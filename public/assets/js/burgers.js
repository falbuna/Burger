$(function(){
    $(".change-state").on("click", function(event){
        console.log("I've been clicked!")
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
        )
    })
})