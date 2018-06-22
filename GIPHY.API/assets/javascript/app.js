$(document).ready(function() {

    var topics = [];

    //Function to fetch giphy searches. Use $.ajax({ and set q parameter to the search term.
    //Additionally set l = 10 and 
        
    function displayCitiesSearch() {
        var x = $(this).data("search");
        console.log(x);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=4aPMl9hUA5rmBYrDPdDe9F31y6t2FcKM&limit=10";

        console.log(queryURL);

        $.ajax({
                    url: queryURL,
                    method:"GET"
                }).done(function(response) {
                    var results = response.data
                    console.log(results);
                    for (var i = 0; i < results.length; i++) {

                    var cityDiv = $("<div class='col-md-4'>");

                    var rating = results[i].rating;
                    var cityImage = $("<img>");
                    var p = $("<p>").text("Rating: " + rating);

                    var defaultAnimatedSrc = results[i].images.fixed_height.url;
                    var staticSrc = results[i].images.fixed_height_still.url;

                    cityImage.attr("src", staticSrc);
                    cityImage.addClass("cityGiphy");
                    cityDiv.append(p);
                    cityDiv.append(cityImage);
                    cityImage.attr("data-state", "still");
                    cityImage.attr("data-still", staticSrc);
                    cityImage.attr("data-animate", defaultAnimatedSrc);
                    $("#gifSpace").prepend(cityDiv);
                }
        });
}

    $("#addCity").on("click", function(event) {
            event.preventDefault();
            var newCity = $("#cityInput").val().trim();
            topics.push(newCity);
            console.log(topics);
            $("#cityInput").val('');
            displayButtons();
        });

        function displayButtons() {
            $("#myButtons").empty();
            for (var i = 0; i < topics.length; i++) {
                var a = $('<buttons class="btn btn-primary">');
                a.attr("id", "city");
                a.attr("data-search", topics[i]);
                a.text(topics[i]);
                $("#myButtons").append(a);
            }
        }

        displayButtons();

        $(document).on("click", "#city", displayCitiesSearch);

        $(document).on("click", ".cityGiphy", pausePlayGifs);

        function pausePlayGifs () {
            var state = $(this).attr("data-state");
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
              } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
          }
        }
}); 