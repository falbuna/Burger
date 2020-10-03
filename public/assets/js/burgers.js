$(function(){
    // The click event to change the state of the burger to devoured.
    $(".change-state").on("click", function(event){

        const id = $(this).data("id");
        const devour = $(this).data("devour");

        const newDevourState = {
            devoured: devour
        };
        // The put request gets handled here.
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
    // The submit button gets handled here.
    $(".create-form").on("submit", function(event){

        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
            devoured: 0
        }
        // The post request gets handled here.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Created new burger");

                location.reload();
            }
        )
    });
})