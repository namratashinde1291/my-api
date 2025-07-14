const express = require('express');
//const pool = require('./db');
const app = express();
const userRoutes = require('./routes/users');
app.use(express.json());

app.use('/users',userRoutes);

/*app.get('/',(req,res) =>{
    res.send('Hello from Express');
});*/

/*app.use((req,res,next)=>{
      console.log(`[${req.method}] ${req.url}`);
    next();
})*/

/* In memory CRUD
let users =[];

app.post('/users',(req,res)=>{
    const user = {n
        id:Date.now(),
        ...req.body
    };
    users.push(user);
    res.status(201).json(user);
});

app.get('/users',(req,res) =>{
    res.json(users);
});

app.get('/users/:id',(req,res)=>{
    const user = users.find(u=>u.id  == req.params.id);
    if (!user){
        return res.status(404).send('User not found');
    }
    res.json(user);
});*/

/* In DB CURD */

/*app.post('/users',async (req,res) =>{
    const {name, email} = req.body;
    //const name = req.body.name;
    //const email = req.body.email; 
    try{
        const result = await pool.query('insert into users (name,email) values ($1, $2)',
        [name,email]);
        res.status(201).json(result.rows[0]);
    }
    catch(err){
        res.status(500).send("Error in creating user");
    }
});*/

const PORT = 5000;
app.listen(PORT,() =>console.log(`Server running on port ${PORT}`));