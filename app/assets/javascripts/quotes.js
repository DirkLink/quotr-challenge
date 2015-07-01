var update_saying = function() {
  $.ajax("/random", {
      error: function() { alsert("Something went wrong")},
      success: function(data) {
        $("#quote").text(data.text)
        $("#author").text("- " + data.author)
      }
    })
  } 
$(document).on("ready", function(){
  $("#that_button").on("click", update_saying)
})
  
  


  
