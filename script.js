const apiUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&id=RmTq3cJqyCo%2CfE2h3lGlOsk&key=AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E';
const imageElement = document.getElementById("myImage");
const newestHeader = document.getElementById("newestHeader");
const newestCounter = document.getElementById("viewersCount2");


function updateImage(){
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Update the src attribute with the received data
    console.log(data);
    console.log(data.items[0].statistics.viewCount
      );
    imageElement.src = data.items[0].snippet.thumbnails.medium.url;
    newestHeader.innerHTML = data.items[0].snippet.title;
    newestCounter.innerHTML = data.items[0].statistics.viewCount;
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

updateImage()

setInterval(updateImage, 60000);


