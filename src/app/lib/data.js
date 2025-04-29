import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_URL, {
    ssl: 'require', // para conectar corretamente no Neon
});

export async function fetchEvents() {
    const events = await sql`
    SELECT * FROM eventos
    ORDER BY data ASC
  `;

    return events;
}
