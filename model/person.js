import { Model } from '@nozbe/watermelondb'
import { field, text, writer } from '@nozbe/watermelondb/decorators'
import { Q } from '@nozbe/watermelondb'
import { database } from '../App'

export default class Person extends Model {
  static table = 'person'

  @text('username') username
  @field('is_athenticated') isAuthenticated

  @writer async HandleAuth(state) {
    await this.update(person => {
      person.isAuthenticated = state
    })
  }
}


export class User {
  static currentUser = null

  static async getBy(username) {
    return await database.get('person').query(
      Q.where('username', username)
    ).fetch()
  }

  static async createUser(username) {
    let newUser = null
    await database.write(async () => {
      newUser = await database.get('person').create(person => {
        person.username = username
        person.isAuthenticated = true
      })
    })

    this.currentUser = newUser
    return newUser
  }

  static async authCurrentUser() {
    const users = await database.get("person").query().fetch()

    let result = null;
    users.forEach(user => {
      if (user.isAuthenticated === true) {
        result = user
      }
    })

    this.currentUser = result
    return result ? { username: result.username } : null
  }
}
