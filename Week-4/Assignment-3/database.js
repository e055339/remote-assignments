import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getUser(email, password) {
  const [result] = await pool.query(
    `SELECT * FROM user WHERE email = ? AND password = ?`,
    [email, password]
  );
  return result[0];
}

export async function createUser(email, password) {
  const [result] = await pool.query(
    `
  INSERT INTO user(email,password) 
  VALUE(?,?)
  `,
    [email, password]
  );
  const id = result.insertId;
  return getUser(id);
}

export async function getUserEmail(email) {
  const [result] = await pool.query(
    `
  SELECT * FROM user 
  WHERE email = ?
  `,
    [email]
  );
  return result[0];
}

// const result = await getUserEmail("yoshi@gmail.com");
// console.log(result);
