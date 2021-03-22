const express = require("express") 
const serverlessHttp = require("serverless-http") 
const path = require("path")

const app = express()
const router = express.Router()



router.get("/", (req, res)=>{
  return res.send("express app with serverless")
})



app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')));


module.exports = app;
module.exports.handler = serverlessHttp(app);