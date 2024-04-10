import { Client } from "pg";
const client = new Client({
  connectionString: "postgresql://practice_owner:HN5Z3aOhJpcU@ep-still-wildflower-a5ggcrcb.us-east-2.aws.neon.tech/practice?sslmode=require",
});
async function creteusertable() {
 await client.connect();
  const result = await client.query(`
  CREATE TABLE users1 (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
  `);
  console.log(result);
}
creteusertable()
