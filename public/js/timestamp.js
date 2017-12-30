var url = window.location.href;

console.log(url);

$( document ).ready(function() {
  $('#link1').attr('href', url + 'date/12%20Jan%202013');
  $('#link1').html(url + 'date/12%20Jan%202013');
  $('#link2').attr('href', url + 'timestamp/1357941600');
  $('#link2').html(url + 'timestamp/1357941600');
});
