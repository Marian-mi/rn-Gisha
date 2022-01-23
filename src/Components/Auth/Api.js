import { Axios } from "../../../App"
import { User } from "../../../model/person"

export class AuthApi {
    setCtx = null

    constructor(setter) {
        this.setCtx = setter
    }

    async authUser({ Username, Password }) {
        try {
            const response = await Axios.post("User/Validate4App", { Username, Password })

            if (response.status === 200) {
                const data = await response.data
                const q = (await User.getBy(data.UserId))[0] ?? null

                if (q) {
                    q.setToken(data.Token)
                    User.currentUser = q
                        this.setCtx(ps => ({ ...ps, isAuthenticated: true, username: data.DisplayName }))
                }
                else {
                    const { Username, UserId, DisplayName, Token } = data
                    const newUser = await User.createUser({ username: Username, userID: UserId, displayName: DisplayName, token: Token })
                    if (newUser)
                        this.setCtx(ps => ({ ...ps, isAuthenticated: true, username: newUser.displayName }))
                }
            }

        }
        catch (err) {
            console.log(err);
        }
    }
}