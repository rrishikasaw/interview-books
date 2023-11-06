import { Router } from 'express'
import validations from './validations'
import controllers from './controllers'
const router = Router()

router.post('/', validations.postBook, controllers.postBook)

router.get('/', validations.getBooks, controllers.getBooks)

router.get('/:id', validations.getBook, controllers.getBook)

router.patch('/:id', validations.patchBook, controllers.patchBook)

router.delete('/:id', validations.deleteBook, controllers.deleteBook)

module.exports = router
