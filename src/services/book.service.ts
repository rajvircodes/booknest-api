import * as bookRepository from '../repositories/book.repository.js';
import type { CreateBookInput } from '../validators/book.validator.js';
import type { UpdateBookInput } from "../validators/update-book.validator.js";
export const getAllBooks = async () => {
    const books = await bookRepository.getAllBooks();

    return books;
};

export const getBookById = async (id: number) => {
    const book = await bookRepository.getBookById(id);

    if (!book) {
        throw new Error('Book not found');
    }

    return book;
};

export const createBook = async (data: CreateBookInput) => {
    const book = await bookRepository.createBook(data);

    return book;
};

export const updateBook = async (
    id: number,
    data: UpdateBookInput
) => {
    const updatedBook = await bookRepository.updateBook(id, data);

    if (!updatedBook) {
        throw new Error("Book not found");
    }

    return updatedBook;
};

export const deleteBook = async (id:number)=>{
    const deleteBook = await bookRepository.deleteBook(id);


    if(!deleteBook){
        throw Error("Book not found!")
    }

    return deleteBook;
}