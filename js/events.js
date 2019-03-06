//STOP DEFAULT BEHAVIORS or propagating through the DOM
//example 1 - default link behavior is to open in a new page when clicked and # takes you to top or down in page
//let's say we don't want that link to take us to a new page
//step 1 - need to add a parameter to the function (e/event)

//this listens for clicks on the link
$(document).ready(function() {
  $('#example').on('click', 'a', function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('hello');
  });

//this listens for clicks on the container itself and displays that container
//how would we disable that? if we only wanted the click to be contained to the anchor tag and not propagate to the parent elements
//ADD e.stopPropagation to the original event listener
  $('#example').on('click', function(e) {
    console.log('hello container');
  });
});


// //KEY EVENTS
// //if you want to display a value, use keyup to ensure that your value was actually saved in that element
// $(document).ready(function() {
//   //keydown
//   //PROBLEM WITH THIS ONE: the event is triggered BEFORE you input your info
//   //so typing a letter will show nothing, until the second letter is typed, then the first will appear
//
//   //keyup - WORKS DYNAMICALLY
//   //grab the example container, on keydown event, affect in the input field in this way
//   //take the result, change the HTML to "your name is"...
//   //...this = input field, get the value of that
//   $('#example').on('keyup', 'input', function() {
//     $('#result').html('Your name is: ' + $(this).val());
//   })
// })

//CHANGE EVENT - allows us to carry out an action when something has changed
//not clicking a button, just changing a value
//1. use event delegation to listen for chang event on dropdown
  // $(document).ready(function() {
  //   $('#example').on('change', 'select', function() {
  //     //grab the selected option/attribute
  //     var selected = $(this).find('option:selected');
  //     //grab the value of selected item, contain in a var
  //     var value = selected.val();
  //     //grab the price of the selected item, contain in a var
  //     //HTML5 allows .data => automatically knows that data is an attribute b/c data = a tag
  //     var price = selected.data('price');
  //
  //     //check to make sure price is true data, not undefined
  //     //if price is true
  //     //modify the HTML value of the result
  //     //grab the result - will add html value and the price
  //     if(price) {
  //       $('#result').html(value + ' ' + price);
  //     }
  //   })
  // })

//EVENT - SELECT
//pick a destination and have it shown
//grab value of that attribute
//use HTML5 data attribute to show price
// $(document).ready(function() {
//   //get an event handler on the button
//   $('#example').on('click', 'button', function() {
//     //want to first grab the value (use selected attribute)
//     // $('#place').val();
//     //OR grab the option tag - CSS selection
//     var selected = $('#place option:selected');
//     var value = selected.val();
//     // var price = selected.attr('data-price');
//     var price = selected.data('price');
//     //second, the price
//     console.log(value);
//     console.log(price);
//     console.log(value);
//     if(price) {
//     $('#result').html(value + ' ' + price);
//     }
//   });
// });

//EVENT DELEGATION
//rectangle with button inside
//on click, have parent element have a class toggled
//can select button and attach listener
//OR, GRAB A PARENT ELEMENT (BODY OR UPPER CONTAINER)
//grab parent, add CSS selector as second parameter
//target container, if click on button with class switch inside of the container, run this function
// $(document).ready(function() {
//   $('#example').on('click', 'button.switch', function () {
//     console.log($(this)); //button itself
//     //grab the parent of the button, add toggleClass to it
//     $(this).parent().toggleClass('highlighted');
//   })
// });

//EVENT HANDLER - CLICK
// $(document).ready(function() {
//   //select rectangle with id example
//   //.on lets us listen
//   //will run event handler function
//   $('#example').on('click', function() {
//     console.log(this);
//     console.log($(this));
//
//     //this - rectangle
//     // $(this).addClass('highlighted');
//     //if it's been clicked, you can add "removeClass" to display it as not clicked
//     //easier way = toggleClass
//     //add the class if it's not present
//     //if present, it will remove it
//     $(this).toggleClass('highlighted');
//   });
// });


//1. Grab the element you want
//2. Use on
//3. Name of event
//4. Event handler
//5. Access the element you want using this
