/*fetch("https://www.googleapis.com/books/v1/volumes?q=Hamlet") //replace q with search query 
.then((response) => {
    if(response.ok)
    {
        return response.json();
    }
    else{
        throw new Error("Network Response error")
    }
})
.then(data => {
    console.log(data.items[0]);
    console.log(data.items[0].volumeInfo.title);
    console.log(data.items[0].volumeInfo.authors[0]);
    getBook(data)
})
.catch((error) => console.error("FETCH ERROR:", error));
*/
function getBook(data)
{
    const div = document.getElementById("result");

    if(div.hasChildNodes())
    {
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    }

    for(let i = 0; i < 25; i++)
    {
    const name = data.items[i].volumeInfo.title;
    const writer = data.items[i].volumeInfo.authors[0];
   


    const heading = document.createElement("h1");
    const heading2 = document.createElement("h2");
    const bookimg = document.createElement("img");
    bookimg.src = data.items[i].volumeInfo.imageLinks.thumbnail;
    heading.innerHTML = name;
    heading2.innerHTML = writer;
    div.appendChild(bookimg);
    div.appendChild(heading);
    div.appendChild(heading2);
    }
    
}

function apiSearch(term)
{
    
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + term) //replace q with search query 
    .then((response) => {
        if(response.ok)
        {
            return response.json();
        }
        else{
            throw new Error("Network Response error")
        }
    })
    .then(data => {
        console.log(data.items[3]);
        console.log(data.items[3].volumeInfo.title);
        console.log(data.items[3].volumeInfo.authors[3]);
        getBook(data)
        
    })
    .catch((error) => console.error("FETCH ERROR:", error));
    
}