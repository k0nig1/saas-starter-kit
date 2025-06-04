const { Client } = require('pg');

exports.handler = async (event) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 5432,
    ssl: {
      rejectUnauthorized: false, // Set to true in production with valid SSL certs
    },  
  });

  try {
    await client.connect();
    console.log('Connected to the database');

    const res = await client.query('SELECT NOW()');
    await client.end();

    console.log('Query executed successfully:', res.rows[0]);

    return {
      statusCode: 200,
      body: JSON.stringify({ time: res.rows[0].now }),
    };
  } catch (err) {
    console.error('Error executing query:', err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};