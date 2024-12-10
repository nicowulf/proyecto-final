import express from 'express';
process.loadEnvFile()

const PORT = process.env.PORT 

const app = express()

app.listen(PORT, () => {
    console.log("Server listening on port http://localhost:" + PORT)
})