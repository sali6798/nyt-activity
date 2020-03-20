$(document).ready(function () {

    var searchEl = $("#search-term");
    var limitEl = $("#limit");
    var startYearEl = $("#start-year");
    var endYearEl = $("#end-year");

    var searchBtn = $("#search");
    var clearBtn = $("#clear");

    // example on nyt page
    //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&page=2&sort=newest&api-key=PAnMpY7tfyyQehAvMDq36XwlKpK4RQAK";

    var api_key = "&api-key=PAnMpY7tfyyQehAvMDq36XwlKpK4RQAK";
    //ar queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times&begin_date=20191031&end_date=20191102&q=trump&limit=5" + api_key;

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=new+york+times";
    // var querySearch = "&q=trump" + searchEl.val();
    // var queryStartYear = "&begin_date=" + startYearEl.val();
    // var queryEndYear = "&end_date" + endYearEl.val();

    var limit = "";


    $("#search").on("click", function (event) {
        event.preventDefault();

        if (searchEl.val() !== "") {
            queryURL += "&q=trump=" + searchEl.val()
        }
        if (startYearEl.val() !== "") {
            queryURL += "&begin_date=" + startYearEl.val() + "0101";

        }
        if (endYearEl.val() !== "") {
            queryURL += "&end_date=" + endYearEl.val() + "1231";

        }
        queryURL += api_key;
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);

            });

    });
});





















