const quotebtn = document.getElementById("quoteBtn");
const copyBtn =document.getElementById("copyBtn");
const quotetxt=document.getElementById("quote")
let quotes={
    "Dalai Lama":"The purpose of our lives is to be happy.",
    "John Lennon":"Life is what happens when you're busy making other plans.",
    "Stephen King":"Get busy living or get busy dying.",
    "Mae West":"You only live once, but if you do it right, once is enough.",
    "Thomas A. Edison":"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    "Albert Einstein":"If you want to live a happy life, tie it to a goal, not to people or things.",
    "Babe Ruth":"Never let the fear of striking out keep you from playing the game.",
   "Will Smith":"Money and success don’t change people; they merely amplify what is already there.",
    "Steve Jobs":"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking." 
} ;


function randomquote() {
    let authors = Object.keys(quotes);
    let randomnumber = Math.floor(Math.random()*authors.length);
    
    let author = authors[randomnumber]
    const quote= quotes[author]
       document.getElementById("quote").innerHTML=quote;
       document.getElementById("author").innerHTML=author;
}
function copy() {
    navigator.clipboard.writeText(quotetxt.innerText);
    alert("copied \""+quotetxt.innerText+"\"")
}
quotebtn.addEventListener("click",randomquote);
