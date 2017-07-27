$(function() {

$.ajax({
  url: 'https://www.codeschool.com/users/aaubele.json',
  dataType: 'jsonp',
  success: function(response){
    console.log("Success!");
  }
});


});
