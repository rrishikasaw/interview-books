require('dotenv').config()

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import mongoose from 'mongoose'
import constants from './src/utils/constants'
import colors from './src/utils/colors'

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use(cors())

app.use('/api/books', require('./src/api/books/routes'))

app.listen(process.env.PORT, async () => {
	console.log(colors.fgBrightGreen + 'INFO: ' + colors.reset + 'Server started!')

	// mongodb setup
	const client = await mongoose.connect(process.env.MONGO_URL!, {
		dbName: process.env.DATABASE!,
	})
	constants.db = client.connection
	console.log(colors.fgBrightGreen + 'INFO: ' + colors.reset + 'Atlas connected!')
})
