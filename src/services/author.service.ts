import * as authorRepository from '../repositories/author.repository.js'
import type { CreateAuthorInput } from '../validators/author.validator.js'
import type { UpdateAuthorInput } from "../validators/update-author.validator.js";
import ApiError from '../utils/api-error.js'

// GET All authors

export const getAllAuthors = async ()=>{
    return await authorRepository.getAllAuthors();
};

// GET author by id 

export const getAuthorById = async (id:number)=>{
    const author = await authorRepository.getAuthorById(id)

    if(!author){
        throw new ApiError("Author not found", 404);
    }
    return author;
}

// CREATE author
export const createAuthor = async(data:CreateAuthorInput)=>{
    return await authorRepository.createAuthor(data);
}

// UPDATE author
export const updateAuthor = async (
    id: number,
    data: UpdateAuthorInput
) => {
    const author = await authorRepository.updateAuthor(id, data);

    if (!author) {
        throw new ApiError("Author not found", 404);
    }

    return author;
};