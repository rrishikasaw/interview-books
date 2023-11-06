import { Schema, model, Document } from 'mongoose'

const BookSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
		summary: {
			type: String,
			required: true,
		},
	},
	{ versionKey: false, timestamps: true }
)

export interface IBook extends Document {
	title: string
	author: string
	summary: number
	createdAt: Date
	updatedAt: Date
}

export const Book = model('Book', BookSchema, 'books')
