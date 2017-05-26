var url = window.location.href;

console.log(url);

$( document ).ready(function() {
  $('#link1').attr('href', url + 'Jan%2012%202013');
  $('#link1').html(url + 'Jan%2012%202013');
  $('#link2').attr('href', url + '1357941600');
  $('#link2').html(url + '1357941600');
});
