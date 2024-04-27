import express from 'express'
import con from '../utils/db.js'
import jwt from 'jsonwebtoken'
const router = express.Router();

router.post('/adminlogin', (req, res) => {
    const sql = "SELECT email, password FROM login WHERE email =? AND PASSWORD =?"
    con.query(sql, [req.body.email, req.body.password], (err, result) =>{
        if(err) return res.json({loginStatus: false, Error: `${err}`})
        if(result.length>0){
            const email = result[0].email;
            const token = jwt.sign({role: 'admin', email: email}, "jwt_secret_key", {expiresIn: '1d'})
            res.cookie('token', token)
            return res.json({loginStatus: true})
        }
        else{
            return res.json({loginStatus: false, Error: "Wrong email or password"})
        }
    })
})
router.get('/get_item', (req, res) => {
    const sql = "SELECT in_stock, out_stock FROM 45114_surface_phone_socket JOIN socket ON 45114_surface_phone_socket.id = socket.45114_surface_phone_socket_id JOIN makel ON makel.socket_id = socket.id JOIN items ON items.makel_id = makel.id WHERE 45114_surface_phone_socket.id = 1;"
    con.query(sql, (err, result) => {
        if(result.length>0){
            return res.json({Status: true, Value: result[0]})
        }
        else{
            return res.json({Status: false, Error: `${err}`})
        }
    })
})

router.put('/add_item', (req, res) =>{
    const value = req.body.total;
    const sql = "UPDATE 45114_surface_phone_socket set in_stock = ? where id = 1"
    con.query(sql, value, (err, result) => {
        if(err) return res.json({Status: false, Error: `${err}`})
        return res.json({Status: true, Result: result})
    })
})
router.put('/deduct_item', (req, res) =>{
    const value = [req.body.out, req.body.total];
    console.log(value)
    const sql = "UPDATE 45114_surface_phone_socket set out_stock = ?, in_stock = ? where id = 1"
    con.query(sql, [...value], (err, result) => {
        if(err) return res.json({Status: false, Error: `${err}`})
        return res.json({Status: true, Result: result})
    })
})

export {router as adminRouter}