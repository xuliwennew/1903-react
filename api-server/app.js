/**
 *  express 搭建 restful api server
 **/

const express = require("express")
const path = require("path")
const app = express()
const router = express.Router()

/**
 * 解决访问的跨域问题
 */
router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})


//method = GET URI=/user restful api spirng cloud
router.get("/",(req,res)=>{
    res.json({code:200})
})


app.use("/user",router)


app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})
