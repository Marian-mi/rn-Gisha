import { createTable, schemaMigrations } from '@nozbe/watermelondb/Schema/migrations'

export default schemaMigrations({
    migrations: [
        {
            toVersion: 2,
            steps: [
                createTable({
                    name: "user",
                    columns: [
                        { name: 'username', type: "string" },
                        { name: 'token', type: "string" },
                        { name: 'display_name', type: "string" },
                        { name: 'user_id', type: "number" },
                    ]
                }),
            ],
        },
    ],
})