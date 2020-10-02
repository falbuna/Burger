$(function(){
    $(".change-state").on("click", function(event){

        const id = $(this).data("id");
        const devour = $(this).data("devour");

        const newDevourState = {
            devoured: devour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed burger to", devour);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){

        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Created new burger");

                location.reload();
            }
        );console.log(newBurger);
    });
})