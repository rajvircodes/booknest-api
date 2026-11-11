import * as bookRepository from '../repositories/book.repository.js'

export const getAllBooks = async()=>{
    const books = await bookRepository.getAllBooks()

    return books
}

export const getBookById = async (id:number)=>{
    const book = await bookRepository.getBookById(id);

    if(!book){
        throw new Error("Book not found")
    }

    return book;
}