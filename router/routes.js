const express = require("express");
const router = express.Router();

//metodo get------------------------------------------
router.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)return res.send(err);

        conn.query('select * from libros',(err,rows)=>{
            if(err)return res.send(err);

            res.json(rows);
        });        
    })
})

 //metodo post ----------------------------------------
router.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)return res.send(err);

        conn.query('insert into libros set ?',[req.body],(err,rows)=>{
            if(err)return res.send(err);

            res.send('libro added!');
        });        
    })
})

//metodo delete --------------------------------------------
router.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)return res.send(err);

        conn.query('delete from libros where id = ?',[req.params.id],(err,rows)=>{
            if(err)return res.send(err);

            res.send('libro excluded!');
        });        
    })
})

//metodo put----------------------------------------------
router.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)return res.send(err);

        conn.query('update libros set ? where id = ?',[req.body, req.params.id],(err,rows)=>{
            if(err)return res.send(err);

            res.send('libro updated!');
        });        
    })
})

module.exports = router;