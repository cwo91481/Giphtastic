$(document).ready(function () {

    $('button').on('click', function () {
        var ball = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + ball + "&api_key=GT0iCrJt5L91hFgRBsSI0vTrAmOzdNT6";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .then(function (response) {
                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var baseballDiv = $('<div/>');
                    var p = $('<p/>');
                    p.html(results[i].rating);

                    var ballImage = $('<img/>');
                    ballImage.addClass('anImg')

                    ballImage.attr('src', results[i].images.fixed_height.url);
                    ballImage.attr('data-still', results[i].images.fixed_height_still.url)
                    ballImage.attr('data-animate', results[i].images.fixed_height.url)

                        .attr('data-state', 'still');

                    baseballDiv.append(p);
                    baseballDiv.append(ballImage);
                    baseballDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function () {

                    var state = $(this).attr('data-state');
                    console.log(this);

                    if (state == 'still') {
                      $(this).attr('src', $(this).data('animate'));
                       $(this).attr('data-state', 'animate');

                    } else {

                        $(this).attr('src', $(this).data('still'));
                        $(this).attr('data-state', 'still');
                    }
                });
            });
    });

    var homerun = [''];


   
    $('#theButton').on('click', function () {
        var tripleButton = $("#gif-input").val();
        

        var newButton = $("<button>").addClass("btn btn-info baseball").attr('data-name', tripleButton).text(tripleButton).css({ 'margin': '5px' });

        $("#baseballbuttons").append(newButton);
        console.log(newButton)

        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tripleButton + "&api_key=GT0iCrJt5L91hFgRBsSI0vTrAmOzdNT6";
        console.log(tripleButton);

        $.ajax({
            url: queryURL,
            method: 'GET'
        })

            .done(function (response) {

                var results = response.data;
                for (var i = 0; i < results.length; i++) {

                    var batDiv = $('<div/>');
                     var p = $('<p/>');

                    p.text(results[i].rating);
                     var batImage = $('<img>');

                    batImage.addClass('anImg')
                    batImage.attr('src', results[i].images.fixed_height_still.url);
                    batImage.attr('data-still', results[i].images.fixed_height_still.url)
                    batImage.attr('data-animate', results[i].images.fixed_height.url)

                        .attr('data-state', 'still');

                    batDiv.append(p);
                    batDiv.append(batImage);
                    batDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function () {

                    var state = $(this).attr('data-state');
                    console.log(this);

                    if (state == 'still') {
                     $(this).attr('src', $(this).data('animate'));
                     $(this).attr('data-state', 'animate');

                    } else {
                        $(this).attr('src', $(this).data('still'));
                        $(this).attr('data-state', 'still');
                    }
                });
            });

        var searchTerm =$("#gif-input").val("");
        queryURL += "&q=" + searchTerm;
        return false;
    })

});

