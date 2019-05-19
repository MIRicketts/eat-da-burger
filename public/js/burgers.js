$(document).ready(function () {

  $("#burger-form").on("submit", function (e) {
    e.preventDefault();

    // package up from data
    const burgerData = {
      "burger_name": $("#name-input").val().trim()
    }

    $.ajax({
        url: "/api/burgers",
        method: "POST",
        data: burgerData
      })
      .then(function () {
        location.reload();
      })
      .catch(err => console.log(err));
  });

  // update burger
  $(".update-burger").on("click", function () {
    console.log('hi')
    const burgerId = $(this).attr("data-id");
    const devoured = $(this).attr("data-devoured")
    console.log(burgerId, devoured);
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

  $(".delete-burger").on("click", function () {

    const burgerId = $(this).attr("data-id");

    $.ajax({
        url: `/api/burgers/${burgerId}`,
        method: "DELETE"
      })
      .then(() => location.reload())
      .catch(err => console.log(err));
  });

});