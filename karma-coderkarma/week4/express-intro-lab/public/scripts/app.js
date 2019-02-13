console.log("Sanity Check: JS is working!");

const handleSuccess = json => {
  // console.log(json)
  for (let i = 0; i < json.length; i++) {

    let title = json[i].title;

    let artist = json[i].artist;
    console.log(title, artist);
    $("#data").append(`<div class="text-center my-2"> ${title}  - ${artist} </di>`)
  }
};

const handleResponse = json => {
  console.log(json)
  json.forEach((ele) => {
    $("#tacos").append(` <div class="text-center">  ${ele.name} </div>`)
  })
}

$(document).ready(() => {
  const handleError = (xhr, status, errorThrown) => console.log('uh oh');

  $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/albums',
    success: handleSuccess,
    error: handleError
  })

  // creating ajax call for taqueria
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/api/taquerias",
    success: handleResponse
  });

})