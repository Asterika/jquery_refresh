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
// $(document).ready(function() {
//   //first(), last()
//   //when you know you want the first children
//   var result = $('#animals').children().first().children('.creature').last();
//   console.log(result);
//
//   //prev() - want all children dog, cat, forest, prairie
//   //in this case, remove class selector
//   //first .prev takes us to Forest
//   //second takes us to cats
//   result = $('#animals').children().first().children().last().prev().prev();
//   console.log(result);
//
//   //next() - longer way in this case
//   result = $('#animals').children().first().children('.creature').first().next();
//   console.log(result);
// })

//MOVING UP THE CHAIN TO PARENT ELEMENT
// $(document).ready(function() {
//   //parent()
//   var result = $('#cat').parent(); //=> mammals
//   //parents()
//   console.log(result);
//
//   result = $('#cat').parents(); //=> mammals, animals, body and html tag of page
//   console.log(result);
//
//   //closest() - when you may not know exactly where it inspect
//   result = $('#cat').closest('.category');
//   console.log(result);
// })
