import express from "express";
import fs from "fs";
import { booksData } from "./services.js";
const server = express();

server.use(express.json());


server.get(`/books`, (request, response) => {
    console.log(request);
    response.send(booksData)
});

server.get(`/books/:id`, (request, response) => {
    const bookId = request.params.id;
    console.log(bookId);

    const book = booksData.find(book => book.id === bookId)
    if (!book) {
        response.status(404).send({ message: `Book with id: ${bookId.id} was not found` })
    } else {

        response.send(book)
    }
})

server.post('/books', (request, response) => {

    const bookFromUser = request.body;

    const newBook = {
        id: Date.now(),
        bookTitle: bookFromUser.bookTitle,
        isAvailable: true,
        genre: bookFromUser.genre,
        author: bookFromUser.author,
        pages: bookFromUser.pages
    }

    booksData.push(newBook);

    fs.writeFileSync('../books_store.db.json', JSON.stringify(booksData, null, 2));

    response.status(201).send({ message: 'Book added successfully' });
});

server.put(`/books/:id`, (request, response) => {
    const bookId = request.params.id;
    const updatedBookData = request.body;

    const updatedBook = booksData.find(book => book.id === bookId);

    if (updatedBook) {
            updatedBook.bookTitle = updatedBookData.bookTitle,
            updatedBook.isAvailable = true,
            updatedBook.author = updatedBookData.author,
            updatedBook.pages = updatedBookData.pages


        fs.writeFileSync('../books_store.db.json', JSON.stringify(booksData, null, 2));

        response.send(updatedBook)
    } else {
        response.status(404).send({ error: `Book not found` })
    }

})

server.delete(`/books/:id`, (request, response) => {
    const bookId = request.params.id;
    const filteredBooks = booksData.filter(book => book.id !== bookId);

    fs.writeFileSync('../books_store.db.json', JSON.stringify(filteredBooks, null, 2));

    response.send({ message: `Book deleted succesfully` })
})

server.listen(3000, `localhost`, () => {
    console.log(`Server is up and running`)
})