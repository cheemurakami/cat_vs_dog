$(document).ready(function(){
  $('#cat-img').click(function(){
    $("ul#user").prepend("<li>meow!</li>");
    $("ul#user2").prepend("<li>bark!</li>");
  });
  
});