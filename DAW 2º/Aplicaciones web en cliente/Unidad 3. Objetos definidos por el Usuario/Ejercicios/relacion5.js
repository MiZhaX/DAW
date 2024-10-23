// Lista
class BookList{
    constructor(){
        this.booksRead = 0;
        this.notRead = 0;
        this.nextBook = new Book();
        this.currentBook = new Book();
        this.lastBook = new Book();
        this.list = new Array();
    }

    add(Book){
        this.list.push(Book);
        this.notRead++;
    }

    finishCurrentBook(){
        this.currentBook.read = true;
        this.currentBook.readDate = new Date(Date.now());
        this.booksRead++;
        this.notRead--;
        
        this.lastBook = this.currentBook;
        this.currentBook = this.nextBook;
        
        let nextBook = this.list.find(libro => !libro.read);
        this.nextBook = nextBook;
    }

}

class Book{
    constructor(title, genre, author, read, readDate){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.readDate = readDate;
    }
}