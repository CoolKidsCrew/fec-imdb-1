const {PGUSER, PGHOST, PGPASSWORD, PGDATABASE} = require('../../ENV.js');
const {Pool} = require('pg');
// const config = require('../config/config');


// mongoose.connect(`mongodb://${host}:${port}`);
// mongoose.connect('mongodb://localhost/fMDB');

// const db = mongoose.connection;
// db.once('open', () => {
//   console.log(`connected to mongodb instance at mongodb://${host}:${port}/${name}`);
// });
// PGUSER=postgres \
// PGHOST=localhost \
// PGPASSWORD=simple \
// PGDATABASE=main \
// PGPORT=5432
const pool = new Pool({
  host: 'localhost',
  user: PGUSER,
  port: 5432,
  database: 'postgres',
  password: PGPASSWORD,
  max: 50,
  idleTimeoutMillis: 1000,
  connectionTimeoutMillis: 1000
})
module.exports = {
  queryCb: async (id, callback) => {
    let queryStr = `select * from main where id = '${id}'`
    try {
      const client = await pool.connect();
      let result = await client.query(queryStr);
      callback(null, result);
      client.release();
    } catch (err) {
      callback(err)
    }    
  }
}