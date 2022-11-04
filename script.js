fetch("https://www.googleapis.com/books/v1/volumes?q=Hamlet") //replace q with search query 
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

function getBook(data)
{
    const name = data.items[0].volumeInfo.title;
    const writer = data.items[0].volumeInfo.authors[0];
    //const bookimg = data.items[0].volumeInfo.imageLinks.thumbnail;
    const div = document.getElementById("result");
    const heading = document.createElement("h1");
    const heading2 = document.createElement("h2");
    const bookimg = document.createElement("img");
    bookimg.src = data.items[0].volumeInfo.imageLinks.thumbnail;
    heading.innerHTML = name;
    heading2.innerHTML = writer;
    div.appendChild(bookimg);
    div.appendChild(heading);
    div.appendChild(heading2);
    
    
}
