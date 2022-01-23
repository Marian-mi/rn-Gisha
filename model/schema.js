import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 2,
    tables: [
        tableSchema({
            name: "person",
            columns: [
                { name: 'username', type: "string"},
                { name: 'is_athenticated', type: "boolean"},
            ]
        }),
        tableSchema({
            name: "user",
            columns: [
                { name: 'username', type: "string"},
                { name: 'token', type: "string"},
                { name: 'display_name', type: "string"},
                { name: 'user_id', type: "number"},
            ]
        })
    ]
})