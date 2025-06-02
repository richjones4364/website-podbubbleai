import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || '5432'),
  ssl: {
    rejectUnauthorized: false
  }
});

export async function createChatSession() {
  const result = await pool.query(
    'INSERT INTO chat_sessions (created_at) VALUES (NOW()) RETURNING id'
  );
  return result.rows[0].id;
}

export async function saveChatMessage(
  sessionId: string, 
  role: string, 
  content: string, 
  image?: string
) {
  await pool.query(
    'INSERT INTO chat_messages (session_id, role, content, image, created_at) VALUES ($1, $2, $3, $4, NOW())',
    [sessionId, role, content, image]
  );
}

export async function getChatHistory(sessionId: string) {
  const result = await pool.query(
    'SELECT role, content, image, created_at FROM chat_messages WHERE session_id = $1 ORDER BY created_at ASC',
    [sessionId]
  );
  return result.rows;
}

export default pool;