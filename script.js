$(document).ready(function(){
function addToList (item) {
$('ol#items').append("<li>" + item + "</li>" )
};
$(document).on('click','#add-to-list', function() {
  $('ol#items').append("<li>"+$('input').val()+"</li>");
});
addToList("build a website");
});