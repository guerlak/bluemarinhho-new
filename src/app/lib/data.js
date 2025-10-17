import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_URL, {
  ssl: 'require', // connect properly to Neon 
});

export async function getAllEvents() {
  const events = await sql`
    SELECT
    e.data_hora,
    l.nome,
    l.endereco,
    l.cidade,
    l.descricao,
    l.link
FROM
    eventos AS e
JOIN
    estabelecimentos AS l ON e.id_estabelecimento = l.id;
  `;
  return events;
}
