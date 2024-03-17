import fs from "fs";

export const booksData = JSON.parse(fs.readFileSync('../books_store.db.json', {encoding: `utf-8`}));