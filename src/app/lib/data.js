import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL, {
    ssl: 'require', // para conectar corretamente no Neon
});

export default sql;
