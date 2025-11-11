const express = require('express')
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()
const PORT = process.env.PORT || 8000;

const app = express()

app.use(express.json())
app.use(cors({

}))

app.listen(PORT, () => {
    console.log(`server started at ${PORT} `)
})