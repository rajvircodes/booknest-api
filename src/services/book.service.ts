import * as bookRepository from '../repositories/book.repository.js'

export const getAllBooks = async()=>{
    const books = await bookRepository.getAllBooks()

    return books
}