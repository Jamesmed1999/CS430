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
    const writer = data.items[i].volumeInfo.authors;
    const publisher= data.items[i].volumeInfo.publisher;
    const publishedDate=data.items[i].volumeInfo.publishedDate;
    const description=data.items[i].volumeInfo.description;
    const pageCount=data.items[i].volumeInfo.pageCount;


    const heading = document.createElement("h2");
    const heading2 = document.createElement("h3");
    const heading3=document.createElement("h3");
    const heading4=document.createElement("h3");
    const heading5=document.createElement("h4");
    const heading6=document.createElement("h3");


    const bookimg = document.createElement("img");



    bookimg.src = data.items[i].volumeInfo.imageLinks.thumbnail;
    heading.innerHTML = "Title: "+name;
    heading2.innerHTML = "Author: "+ writer;
    heading3.innerHTML="Publisher: "+publisher;
    heading4.innerHTML="Published Date: "+publishedDate;
    heading6.innerHTML="Page Count: "+pageCount;
    heading5.innerHTML="Description: "+description;



    div.appendChild(bookimg);
    div.appendChild(heading);
    div.appendChild(heading2);
    div.appendChild(heading3);
    div.appendChild(heading4);
    div.appendChild(heading6);
    div.appendChild(heading5);


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