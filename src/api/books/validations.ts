import { Request, Response, NextFunction } from 'express'
import { validate } from 'super-easy-validator'

function postBook(req: Request, res: Response, next: NextFunction) {
	try {
		const rules = {
			title: 'string|min:5',
			author: 'string|min:3',
			summary: 'string|min:10',
		}
		const { errors } = validate(rules, req.body)
		if (errors) {
			return res.status(400).json({ message: errors[0] })
		}
		return next()
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

function getBooks(req: Request, res: Response, next: NextFunction) {
	try {
		const rules = {
      limit: 'optional|string|natural',
      page: 'optional|string|natural',
			search: 'optional|string', // title, author, summary
			createdAtMin: 'optional|date',
			createdAtMax: 'optional|date',
			updatedAtMin: 'optional|date',
			updatedAtMax: 'optional|date',
      sortBy: 'optional|enums:createdAt,updatedAt',
      sortOrder: 'optional|enums:ascending,descending',
		}
		const { errors } = validate(rules, req.query)
		if (errors) {
			return res.status(400).json({ message: errors[0] })
		}
		return next()
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

function getBook(req: Request, res: Response, next: NextFunction) {
	try {
		const { errors } = validate({id: 'mongoid'}, req.params)
		if (errors) {
			return res.status(400).json({ message: errors[0] })
		}
		return next()
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

function patchBook(req: Request, res: Response, next: NextFunction) {
	try {
		const rules = {
			title: 'optional|string|min:5',
			author: 'optional|string|min:3',
			summary: 'optional|string|min:10',
      id: 'mongoid'
		}

		const { errors } = validate(rules, {...req.body, ...req.params})
		if (errors) {
			return res.status(400).json({ message: errors[0] })
		}

		return next()
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

function deleteBook(req: Request, res: Response, next: NextFunction) {
	try {
		const { errors } = validate({id: 'mongoid'}, req.params)
		if (errors) {
			return res.status(400).json({ message: errors[0] })
		}
		return next()
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'server error' })
	}
}

const validations = {
	postBook,
  getBooks,
  getBook,
	patchBook,
  deleteBook,
}

export default validations
