import { Model } from '@nozbe/watermelondb'
import { field, text, writer } from '@nozbe/watermelondb/decorators'
import { Q } from '@nozbe/watermelondb'
import { database } from '../App'

export default class AppUser extends Model {
  static table = 'user'

  @text('username') username
  @text('user_id') userID
  @text('display_name') displayName
  @text('token') token

  @writer async setToken(token) {
    await this.update(person => {
      person.token = token
    })
  }
}


export class User {
  static currentUser = null

  static async getBy(userID) {
    return await database.get('user').query(
      Q.where('user_id', userID)
    ).fetch()
  }

  static async createUser({ username, displayName, token, userID }) {
    let newUser = null
    await database.write(async () => {
      newUser = await database.get('user').create(person => {
        person.username = username
        person.userID = userID
        person.token = token
        person.displayName = displayName
      })
    })

    this.currentUser = newUser
    return newUser
  }

  static async authCurrentUser() {
    const users = await database.get("user").query().fetch()

    const latestUser = users[users.length - 1]

    if (latestUser && latestUser?.token?.length > 0) {
      this.currentUser = latestUser
      return { username: latestUser.username, result: true }
    }

    return { result: false }
  }
}
