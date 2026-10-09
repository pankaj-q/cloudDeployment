import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use(express.json());
app.get('/health', (req,res) => {
    return res.status(200).json({
        success: true,
        message: "All route are in good health"
    })
})

app.get('/', async(req, res) => {
    return res.status(200).json({
        message: "Everything okay"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})