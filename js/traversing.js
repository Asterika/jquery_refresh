//FIND ALL DESCENDANTS OF THE CONTAINER WITH ID ANIMALS WITH A CLASS OF CREATURE
// $(document).ready(function() {
//   //CSS selectors
//   var result = $('#animals .creature');
//   console.log(result);
//
//   //DOM traversing (more efficient)
//   //create a variable, select parent element, use a method called find
//   result = $('#animals').find('.creature');
//   console.log(result);
// })

// //FIND ONLY DIRECT DESCENDANTS
// $(document).ready(function() {
//   //CSS selector
//   var result = $('#animals > .creature');
//   console.log(result);
//
//   //DOM traversing - more efficient than CSS selectors
//   result = $('#animals').children('.creature');
//   console.log(result);
// })

//MOVING TO THE NEXT ELEMENT IN THE RESULTS YOU'VE FOUND USING CHILDREN OR FIND
$(document).ready(function() {
  //first(), last()
  //when you know you want the first children
  var result = $('#animals').children().first();
  console.log(result);



})
