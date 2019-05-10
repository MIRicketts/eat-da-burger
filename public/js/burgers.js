$(document).ready(function(){

  $("#burger-form").on("submit", function(e){
    e.preventDefault();

    // package up from data
    const burgerData = {
      name: $("#name-input").val().trim()
    }

    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerData
    })
    .then(function(){
      location.reload();
    })
    .catch(err => console.log(err));
  });

  // update burger
  $(".update-burger").on("click", function(){

    const burgerId = $(this).attr("data-id");
    const devoured = $(this).attr("data-devoured")
  
    $.ajax({
      url: (`/api/burgers/${burgerId}`),
      method: "PUT",
      data: {
        devoured: devoured
      }
    })
    .then(() => location.reload())
    .catch(err => console.log(err));
  });

$(".delete-burger").on("click", function(){

  const burgerId = $(this).attr("data-id");

  $.ajax({
    url: `/api/burgers/${burgerId}`,
    method: "DELETE"
  })
  .THEN(() => Location.reload())
  .catch(err => console.log(err));
});

});