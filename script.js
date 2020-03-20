$(document).ready(function () {

    // example on nyt page
    //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=newest&api-key=PAnMpY7tfyyQehAvMDq36XwlKpK4RQAK";

    var api_key = "&api-key=PAnMpY7tfyyQehAvMDq36XwlKpK4RQAK";
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&begin_date=20191031&end_date=20191102&q=trump&limit=5" + api_key;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
        });
    
});