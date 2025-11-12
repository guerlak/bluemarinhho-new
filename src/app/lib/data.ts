import postgres from 'postgres';
import { Evento } from '../lib/types/types';

const POSTGRES_URL = process.env.POSTGRES_URL;
if (!POSTGRES_URL) {
  throw new Error('Missing POSTGRES_URL environment variable');
}

export const sql = postgres(POSTGRES_URL, {
  ssl: 'require', // connect properly to Neon 
});

export async function getAllEvents(): Promise<Evento[]> {
  {
    const events = await sql<Evento[]>`
    SELECT
    e.id,
    e.data_hora,
    l.nome,
    l.endereco,
    l.cidade,
    l.descricao,
    l.link
FROM
    eventos AS e
JOIN
    estabelecimentos AS l ON e.id_estabelecimento = l.id
ORDER BY
    e.data_hora ASC;
  `;
    return events;
  }
}