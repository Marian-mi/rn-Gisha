import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
    version: 1,
    tables: [
        tableSchema({
            name: "person",
            columns: [
                { name: 'username', type: "string"},
                { name: 'is_athenticated', type: "boolean"},
            ]
        })
    ]
})