
function getDogPicture(number, displayCallbackMethod) {
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => {return responseJson})
    .then(responseJson => displayCallbackMethod(responseJson))
    .catch(error => alert('Looks like something went wrong! Please try again later'));
}

function buildDogImage(responseJson) {
  return `
  <div>
    <br/>
    <img src="${responseJson}" class="results-img">
  </div>
  `
}

function renderDogImage(data) {
  const results = data.message.map((item, index) => buildDogImage(item));
  $('.results-area').html(results);
  $('.results-area').show();
}

function formHandler() {
  $('#dog-btn').on('click', () => {
    const numberOfPictures = $('#numberInput').val();
    if (numberOfPictures > 50 || numberOfPictures <= 0) {
      alert('Please select a number from 1 to 50')
    } else {
      getDogPicture(numberOfPictures, renderDogImage);
    }
    
  });
}

$(function() {
  console.log("Just waiting for an imput doggy!");
  formHandler();
})