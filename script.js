//DOCUMENT MUST BE LOADED - in index.html, load jq first before js
//select the entire document
//if the entire doc is ready, it will execute the code
//jquery takes all of its selection language from CSS
$(document).ready(function() {
  // //our code goes here
  // //SELECT AN ELEMENT BY ID
  // $('#container').html('<strong>hello</strong>');
  //
  // //there is an html node - text node - html node
  // //we can just select by text node
  // $('#container').text('hello');
  //
  // //SELECT AN ELEMENT BY CLASS
  // $('.class1').text('hello');

  //SELECT MULTIPLE CLASSES
  //use jquery to select all elements that have class1 and class2
  // $('.class1, .class2').addClass('highlighted');

  //SELECT ALL ELEMENTS THAT ARE DESCENDANTS OF ANOTHER ELEMENT
  //select all <li> elements that descend from a listing element
  //in this case, <ul> has an id of listing
  // $('#listing li').addClass('highlighted');

  //SELECT ONLY DIRECT DESCENDANTS OF THE LISTING ID
  // $('#listing > li').addClass('highlighted');

  //SELECT ELEMENTS BY ATTRIBUTE OR BY VALUE OF THE ATTRIBUTE
  //can also use only selected elements or checked items
  //select input fields with attribute required + add highlighted class
  // $('input[required]').addClass('highlighted');

  //select element by value
  // $('input[placeholder=Email]').addClass('highlighted');

  //select by attribute that contains a value
  //i.e. select all elements with the value "Name" in them
  //* = "all"/global selector
  // $('input[placeholder*=Name]').addClass('highlighted');
  
});
