const { Client } = require('pg');

exports.handler = async (event) => {
  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432
  });

  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    await client.end();

    return {
      statusCode: 200,
      body: JSON.stringify({ time: res.rows[0].now }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};