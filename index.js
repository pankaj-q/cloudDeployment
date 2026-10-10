import express from 'express'
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT || 5001;
const app = express();


app.use(express.json());
app.get('/health', (req,res) => {
    return res.status(200).json({
        success: true,
        message: "All route are in good health"
    })
})

app.get('/', async(req, res) => {
    return res.status(200).json({
        message: "Everything okay and the all parts are working fine like"
    })
})

app.listen(PORT,"0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`)
})