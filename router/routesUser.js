const express = require("express");
const router = express.Router();

//metodo get------------------------------------------
router.get('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if(err)return res.send(err);

        conn.query('select * from user',(err,rows)=>{
            if(err)return res.send(err);

            res.json(rows);
        });        
    })
});

//metodo post ----------------------------------------
router.post('/',(req,res)=>{
   req.getConnection((err,conn)=>{
      if(err)return res.send(err);

      conn.query('insert into user set ?',[req.body],(err,rows)=>{
        if(err)return res.send(err);

        res.send('user added!');
      });
   });

});


//metodo delete --------------------------------------------
router.delete('/:id',(req,res)=>{
  req.getConnection((err,conn)=>{
   if(err)return res.send(err);

   conn.query('delete from user where id = ?',[req.params.id],(err,rows)=>{
      if(err)return res.send(err);

      res.send('user excluded!');
   });
  });

});

//metodo put----------------------------------------------
router.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
          if(err) return res.send(err);

          conn.query('update user set ? where id = ?',[req.body,req.params.id],(err,rows)=>{
           if(err) return res.send(err);

           res.send('user updated!');
          });
    });

});
module.exports = router;