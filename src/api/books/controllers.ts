import { Request, Response } from 'express'
import { Book } from './models'

async function postBook(req: Request, res: Response) {
	try {
		const { title, author, summary } = req.body

		const book = await Book.create({ title, author, summary })

		return res.status(201).json({ book })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

interface GetBookRequestQuery {
	limit?: string
	page?: string
	search?: string
	createdAtMin?: string
	createdAtMax?: string
	updatedAtMin?: string
	updatedAtMax?: string
	sortBy?: 'createdAt' | 'updatedAt'
	sortOrder?: 'ascending' | 'descending'
}

async function getBooks(req: Request, res: Response) {
	try {
		const {
			limit = 10,
			page = 1,
			search,
			createdAtMin,
			createdAtMax,
			updatedAtMin,
			updatedAtMax,
			sortBy,
			sortOrder,
		} = req.query as GetBookRequestQuery

		let match: Record<string, any> = {}

		if (search) {
			match.$or = [
				{ title: RegExp(search, 'i') },
				{ description: RegExp(search, 'i') },
				{ author: RegExp(search, 'i') },
			]
		}

		if (createdAtMin || createdAtMax) {
			match.createdAt = {}
			createdAtMin && (match.createdAt.$gte = new Date(createdAtMin))
			createdAtMax && (match.createdAt.$lte = new Date(createdAtMax))
		}

		if (updatedAtMin || updatedAtMax) {
			match.updatedAt = {}
			updatedAtMin && (match.updatedAt.$gte = new Date(updatedAtMin))
			updatedAtMax && (match.updatedAt.$lte = new Date(updatedAtMax))
		}

		let query = Book.find(match)
			.sort({ [sortBy ?? 'createdAt']: sortOrder === 'ascending' ? 1 : -1 })
			.skip((+page - 1) * +limit)
			.limit(+limit)

		const books = await query
		const count = await Book.countDocuments(match)

		return res.json({ books, count })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

async function getBook(req: Request, res: Response) {
	try {
		const { id } = req.params

		const book = await Book.findById(id)
		if (!book) {
			return res.status(404).json({ message: 'book not found' })
		}

		return res.json({ book })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

interface PatchBookBody {
	title?: string
	author?: string
	summary?: string
}

async function patchBook(req: Request, res: Response) {
	try {
		const { title, author, summary } = req.body as PatchBookBody
		const { id } = req.params

		const book = await Book.findById(id)
		if (!book) {
			return res.status(404).json({ message: 'book not found' })
		}

		book.title = title ?? book.title
		book.author = author ?? book.author
		book.summary = summary ?? book.summary
		await book.save()

		return res.json({ message: 'book updated successfully' })
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

async function deleteBook(req: Request, res: Response) {
	try {
		const { id } = req.params

		const book = await Book.findById(id)
		if (!book) {
			return res.status(404).json({ message: 'book not found' })
		}

		await book.deleteOne()

		res.statusMessage = 'book deleted successfully'
		return res.sendStatus(204)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

const controllers = {
	postBook,
	getBooks,
	getBook,
	patchBook,
	deleteBook,
}

export default controllers
