//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: "Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }
  ];
    
// domaća zadaća
    
//  let button = document.querySelector('#generate-btn');
//  const quote = document.querySelector('#quote');
//  const author = document.querySelector('.quote-author');  
//  button.addEventListener('click', changeQuote);
//    
//  function changeQuote() {
//      let random = Math.floor(Math.random() * quotes.length);
//      
//      quote.innerHTML = quotes[random].quote;
//      author.innerHTML = quotes[random].author;
//  }
    
    
// na času    
    
const btn = document.getElementById("generate-btn");
btn.addEventListener("click", function() {
    // za niz od 6 elemenata generise brojeve od 0-5
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random, 'random');
    
   
    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
})

})();













