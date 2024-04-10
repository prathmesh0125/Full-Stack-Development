import { Client } from "pg";

async function insertUserIntoTable(username:string,email:string,password:string) {
  const client = new Client({
    connectionString: "postgresql://practice_owner:HN5Z3aOhJpcU@ep-still-wildflower-a5ggcrcb.us-east-2.aws.neon.tech/practice?sslmode=require",
  });

  try {
    await client.connect();

    

    const insertUserQuery = `
      INSERT INTO users1 (username, email, password)
      VALUES ($1, $2, $3)
    `;
const VALUES=[username, email, password]
    const result = await client.query(insertUserQuery, VALUES);
    console.log("Insertion success", result);
  } catch (err) {
    console.error("Error during insertion:", err);
  } finally {
    await client.end();
  }
}

insertUserIntoTable('itachi','itachi@123','mongikyo');
