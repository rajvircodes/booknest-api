import { Router } from "express";

import * as bookController from '../controllers/book.controller.js'

const router = Router()

router.get('/', bookController.getAllBooks);
router.get('/:id',bookController.getBookById);

export default router;