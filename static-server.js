const path = require("path")
const express = require("express")

const router = express.Router()
const app = express()

//添加一个静态的资源目录
app.use(express.static(__dirname))


//express restful api
router.get("/",(req,res)=>{
    res.json({
        code:200
    })
})


app.use("/",router)


app.listen(3000,()=>{
    console.log("server is ready on port 3000")
})


