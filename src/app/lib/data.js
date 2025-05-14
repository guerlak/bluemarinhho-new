import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_URL, {
  ssl: 'require', // connect properly to Neon 
});

export async function getAllEvents() {
  const events = await sql`
    SELECT * FROM eventos
    ORDER BY data ASC
  `;

  return events;
}
