//DOM MANIPULATION - EMPTY - how to empty contents
//can modify html, text, add text node, empty container, with attr, can both read and write specific attributes

//1. modify text contents - change to "hello world"
$(document).ready(function() {
  //this will show you <strong> b/c it's text, not html
	//$('#container').text('<strong>Hello World</strong>');

  //if we enter a parameter here for html, we are writing html
	$('#container').html('<strong>Hello World</strong>');

  //if we enter nothing as a parameter, we are only reading html
  //you can empty it by putting an empty string as a parameter
	console.log($('#container').html());

  //second way to empty:
	//$('#container').empty();

  //how to access for both reading and writing:
	$('#container').attr('new-attribute', 123);
  //to just READ the attribute, enter only 'new-attribute' w/o a second parameter
	console.log($('#container').attr('new-attribute'));
});

// //REMOVE DOM ELEMENTS
// $(document).ready(function() {
// 	$('#add-container').on('click', 'button', function(){
// 		var value = $('#add-container input').val();
//
// 		var html = '<div class="item">\
// 			<div class="remove">X</div>' + value + '</div>';
//
// 		$('#places-container').append(html);
// 	});
//
// 	// this doesn't work for new elements!!
//   //b/c it will only work after the page is reloaded, only on elements that were present when the page was loaded
//   //is only executed once
//   //grab all elements with the class remove inside places-container
//   //if they're clicked, remove the parent element
// 	/*$('#places-container .remove').on('click', function(){
// 		$(this).parent().remove();
// 	});*/
//
//   //this WILL work b/c parent element (places-container) was present from the very beginning
//   //attach event listener to the container that was present at the start
//   //look for those with class 'remove'
//
//   $('#places-container').on('click', '.remove', function(){
//   		$(this).parent().remove();
// 	});
// });

// //DOM MANIPULATION - insert elements right before or after an element on the same hierarchy level of the DOM tree
// $(document).ready(function() {
// 	$('#add-container').on('click', 'button', function(){
// 		var value = $('#add-container input').val();
// 		console.log(value);
//
//     //5. adjust html
//     //create the string that will be used as the new element
// 		var html = '<div class="item">\
//                 <div class="remove">X</div>' + value + '</div>';
//
//     // $('#places-container').children().last().after(html);
//     $('#places-container').children().first().before(html);
//
//   });
// });

// //DOM MANIPULATION -append and prepend - inserts them inside of a container
// //goal: add and remove things from the DOM
// //use event delegation to listen to click event and...
// //grab the value on input field, add another element
//
// //1. in this container
// //2. on click
// //3. of the button
// //4. do this action - grab the value of the input within this container
//
// $(document).ready(function() {
// 	$('#add-container').on('click', 'button', function(){
// 		var value = $('#add-container input').val();
// 		console.log(value);
//
//     //5. adjust html
//     //create the string that will be used as the new element
// 		var html = '<div class="item">\
//                 <div class="remove">X</div>' + value + '</div>';
//         console.log(html);
//
//     //6. append to the html
//     //a. select parent container
//     //append html to places-container
//         //$('#places-container').append(html);
//
//     //b. pick the element itself - a new jQuery object
//     //use appendTo
//         //$(html).appendTo('#places-container');
//
//     //c. prepend -- add the element to the beginning
//     // can also use prependTo
//         $('#places-container').prepend(html);
//         //$(html).prependTo('#places-container');
// 	});
// });
