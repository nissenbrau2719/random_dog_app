function getDogs() {
  let dogNum = $('input#dogs').val();
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Cannot get dogs at this time'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results').empty();
  let dogArray = responseJson.message;
  let dog;
  for (dog of dogArray) {
    $('.results').append(`<img src=${dog}>`);
  }
  $('section').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogs();
  });
}

$(function() {
  console.log('Ready to fetch dogs!');
  watchForm();
});