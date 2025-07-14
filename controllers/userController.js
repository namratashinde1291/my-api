const { Result } = require('pg');
const pool = require ('../db');

exports.createUser  = async (req,res) =>{
    const {name, email} = req.body;
    try{
        const result = await pool.query("insert into users (name,email) values ($1,$2)",
        [name,email]);
        //console.log(result);
        res.status(201).json(result.rows[0]);
    }
    catch(err){
        res.status(500).json({error:'error creating user'});
    }
};

exports.getUsers = async (req,res) => {
    try{
        const result = await pool.query('select * from users');
        res.status(201).json(result.rows);
    }
    catch(err){
        res.status(400).json({error:'Error fetching users'});
    }
};

exports.getUser = async (req,res) =>{
   try {
    const result = await pool.query(
      'SELECT * FROM users WHERE id = $1',
      [req.params.id]
    );
    if (result.rows.length === 0) return res.status(404).send('User not found');
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching user' });
  }
};