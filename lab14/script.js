/*jshint  esversion:6, globalstrict:true */

$( document ).ready(function() {


    $("#search").click( function(){
        let interval = setInterval(function () {
            const progress = $('progress');

            if (progress.val() < progress.attr('max')) {
                progress.val(progress.val() + 1);
            }

        }, 150);

        $('#content').html("<progress value='0' max='100'></progress>");
        $('#user').html("<progress value='0' max='100'></progress>");

        const userId = $('#userid').val();
        fetch('https://jsonplaceholder.typicode.com/users?id=' + userId)
            .then(response => response.json())
            .then(json => {
                $('#user').empty();
                $('#user').html('<h1>' + json[0].name + '</h1> ' +
                    '<h2>' + json[0].email + '</h2> ' +
                    '<h3>' + json[0].address.street + ', ' + json[0].address.suite + ', ' + json[0].address.city + '</h3>');

            })
            .catch(error => {
                $('#user').html(error);
            });

        fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId)
            .then(response => response.json())
            .then(json => {
                $('#content').empty();
                let content = $("<span/>");
                for(let post of json) {
                    const postHtml = "<div class='post'>" +
                    '<h2>' + post.title + '</h2>' +
                    '<p>' + post.body + '</p>' +
                    '<button class="showComment" data-id="'+post.id+'">Show Comments</button>' +
                    "</div>";
                    content.append(postHtml);
                }

                $('#content').html(content);

            })
            .catch(error => {
                $('#content').html(error);
            });
    });


    $( "#content" ).on( "click", "button", function(){
        const postId = $(this).attr('data-id');
        $(this).after("<progress value='0' max='100'></progress>");

        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
            .then(response => response.json())
            .then(json => {
                let content = $("<span/>");
                content.append('<h1>Comments:</h1>');
                for(let comment of json) {
                    content.append('<h3>' + comment.name + '</h3>');
                    content.append('<p>' + comment.email + '</p>');
                    content.append('<p>>' + comment.body + '</p>');
                    content.append('<hr/>');
                }

                $(this).next().remove();
                $(this).after(content);

            })
            .catch(error => {
                $(this).after(error);
            });
    });

});