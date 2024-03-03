import fs from "fs";

fs.writeFileSync("user_info.txt", "Bob Bobski is the best student in the school");



///// 2 Exercise

const books = 
[
    {id: 1, title: 'Book Title 1', author: 'Book Author 1', genre: 'Book Genre 1'},
    {id: 2, title: 'Book Title 2', author: 'Book Author 2', genre: 'Book Genre 2'},
    {id: 3, title: 'Book Title 3', author: 'Book Author 3', genre: 'Book Genre 3'}
]

// function putBooksInData(books){
//     let data = "";
//     books.forEach(book => {
//         data += `The book with ${book.id} and ${book.title} from ${book.author} written as ${book.genre}\n`
// });
// fs.appendFileSync("bookData.txt", data);
// }

function putBooksInData(books){
    books.forEach(book => { fs.appendFileSync("bookData.txt",`The book with ${book.id} and ${book.title} from ${book.author} written as ${book.genre}\n`)
});

}


putBooksInData(books)
