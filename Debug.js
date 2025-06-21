const library = {
    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

    addBook(book) {
        const { title, author, year } = book;
        if (!title || !author || !year) {
            console.log(" Error: Book information is incomplete. A book must include title, author, and year.");
            return false;
        }
        if (typeof title !== "string" || typeof author !== "string" || typeof year !== "number") {
            console.log(" Error: Invalid data types. Title and author should be strings, year should be a number.");
            return false;
        }
        const duplicate = this.findBookByTitle(title);
        if (duplicate) {
            console.log(` Warning: Book titled "${title}" already exists in the library.`);
            return false;
        }

        this.books.push({ title, author, year });
        console.log(` Success: "${title}" added to the library.`);
        return true;
    },

    findBookByTitle(title) {
        return this.books.find(book => book.title === title);
    },

    removeBook(title) {
        const index = this.books.findIndex(book => book.title === title);

        if (index !== -1) {
            const removed = this.books.splice(index, 1);
            console.log(` Book titled "${title}" has been removed.`);
            return removed[0];
        } else {
            console.log(` Error: Book titled "${title}" not found.`);
            return null;
        }
    }
};

