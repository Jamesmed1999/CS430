fetch("https://www.googleapis.com/books/v1/volumes?q=Hamlet") //replace q with search query 
.then(response => response.json())
.then(response => {
    console.log(response);
}, error => {
    console.error(error);
})
.then(data => {
    //console.log(data); undefined atm
    
});
