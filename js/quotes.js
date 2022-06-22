const quotes = [
   {
    quote : "Only I can change my life, no one can do it for me.",
    author: "Carol Burnett",
   } ,
   {
    quote : "Life is unfair, get used to it.",
    author: "Bill Gates",
   } ,
   {
    quote : "Being happy never goes out of style.",
    author: "Lill Pulitzer",
   } ,
   {
    quote : "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
   } ,
   {
    quote : "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
   } ,
   {
    quote : "It ain't over till it's over.",
    author: "Yogi Berra",
   } ,
   {
    quote : "Love asks me no questions, and gives me endless support.",
    author: "William Shakespeare",
   } ,
   {
    quote : "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
   } ,
   {
    quote : "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
   } ,
   {
    quote : "Do one thing every day that scares you.",
    author: "Anonymous",
   } ,
   {
    quote : "Try not to become a man of success. Rather become a man of value.",
    author: "Albert Einstein",
   } ,
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function setQuotes(){
    const randomQueote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = `"${randomQueote.quote}"`;
    author.innerText = randomQueote.author;
}
setQuotes();