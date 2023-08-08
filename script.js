
const apiKey = 'AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E';
const videoId = '0bIRwBpBcZQ';

const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`;
const apiUrl1 = 'https://youtube.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&id=0bIRwBpBcZQ%2CRmTq3cJqyCo%2CfE2h3lGlOsk%2CpNfTK39k55U%2CzndvqTc4P9I%2C_ysomCGaZLw%2CMjCZfZfucEc%2CwTowEKjDGkU%2CHbb5GPxXF1w%2CzugAhfd2r0g&key=AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E';

const odometer = new Odometer({
  el: document.querySelector("#myOdometer1"),
  value: 0,
  format: "(,ddd)",
});

const odometer1 = new Odometer({
  el: document.querySelector("#myOdometer2"),
  value: 0,
  format: "(,ddd)",
});

const odometer2 = new Odometer({
  el: document.querySelector("#myOdometer3"),
  value: 0,
  format: "(,ddd)",
});

const imageElement = document.getElementById("myImage");

async function getData(){
  try{
       const response= await fetch(apiUrl1)
       const data= await response.json();
       console.log(data);
       imageElement.src = data.items[0].snippet.thumbnails.medium.url;
       
       

  }catch (error){
   console.log('Error', error);
  }
      
}
getData();

function fetchViewCountAndUpdateOdometer() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const viewCount = parseInt(data.items[0].statistics.viewCount, 10);
      let start = viewCount;
      const max = viewCount + 150;
      const increment = 4;

      setInterval(() => {
        if (start <= max) {
        odometer.update(start);
        odometer1.update( start - 20000000)
        odometer2.update( start - 17071441)
        start += increment;
  }},3000)
})

    .catch((error) => console.error('Error fetching data:', error));
   
}

fetchViewCountAndUpdateOdometer()

setInterval(fetchViewCountAndUpdateOdometer, 120000); 

function formatDateTime(date) {
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Seoul'
  };

  return date.toLocaleString('en-US', options);
}

// Function to update the content of the div
function updateDateTime() {
  var currentDate = new Date();
  var formattedDateTime = formatDateTime(currentDate);
  document.getElementById('current-time').textContent = formattedDateTime;
}

// Update the content immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);


/*
let start = 0;
const max = 100;
const increment = 10;


function updateStart() {
  if (start <= max) {
    odometer.update(start);
    start += increment;
    setTimeout(updateStart, 1000); // Call the function again after 1 second (1000 milliseconds)
  }
}

updateStart();

*/