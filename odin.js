function Book(title,author,pages,read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.toString = function(){
        console.log(this.title + this.author + this.pages);
    };
}

var theHobbit = new Book("TheHobbit","JJr",353,true);
theHobbit.toString();
