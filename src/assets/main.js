$(function() {
  //Get Report Card
  getBadges('https://www.codeschool.com/users/sergiocruz.json');
});

function getBadges(url){
    $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(response){
      console.log(response);
      displayCompletedBadges(response.courses.completed);
      displayInProgressBadges(response.courses.in_progress);
    },
    error: function(resp){
      alert('We could load the user badges. Sorry!');
    }
  })
}

function displayCompletedBadges(completed){
  completed.forEach(function(element) {
    $(".js-completed").append(displayBadge(element));
  }, this);
}

function displayInProgressBadges(inProgress){
  inProgress.forEach(function(element) {
    $(".js-inprogress").append(displayBadge(element));
  }, this);
}

function displayBadge(badge){
  var badge = '<div class="course">' +
                '<h3>'+badge.title+'</h3>'+
                '<img src='+badge.badge+' alt='+badge.title+'>'+
                '<a target="_blank" class="btn btn-primary" href='+badge.url+'>See Course</>'
              '</div>'
  return badge;
}
