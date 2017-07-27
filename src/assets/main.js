$(function() {

$.ajax({
  url: 'https://www.codeschool.com/users/aaubele.json',
  dataType: 'jsonp',
  success: function(response){
    $.each(response.course.completed, function(i, courseBadge){
      var badge = $('<div class="course"></div>');
      var title = courseBadge.tile;
      var image = courseBadge.url;
      var dong = courseBadge.badge;
      $('#badges').append(badge);
      $('.course').html('<h3>'+title+'</h3><img src="'+dong+'" /><a href="'+image+'" target="_blank" class="btn btn-primary">See Course</a>');
    });



  }
});


});
