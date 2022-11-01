$(document).ready(function(){

    $("#myform").submit(function(){
        let search = $("#books").val();

        if(search == '')
        {
            alert("empty Input ;(");
        }
        else{
            let url = '';
            let img = '';
            let title = '';
            let author = '';

            $.get("httpl://www.googleapis.com/books/v1/volumes?q=" + search + ":keyes&key=AIzaSyBblRs0Bn8bUIb5Kwv9es6ST_8_Ao_anKs", function(response){
                console.log(response);
            });
        }
    });

    return false;
});