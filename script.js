
const apiKey = 'AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E';
const videoId = '0bIRwBpBcZQ%2CRmTq3cJqyCo%2CFcQ6oB1JPiA%2CfE2h3lGlOsk%2CpNfTK39k55U%2CzndvqTc4P9I%2C_ysomCGaZLw%2CMjCZfZfucEc%2CwTowEKjDGkU%2CHbb5GPxXF1w%2CzugAhfd2r0g%2C6uZy86ePgO0%2Ckrzf1hkFAZA%2CF-QTb-0wRGk';

const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&id=${videoId}&key=${apiKey}`;
const apiUrl1 = 'https://youtube.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&id=0bIRwBpBcZQ%2CRmTq3cJqyCo%2CFcQ6oB1JPiA%2CfE2h3lGlOsk%2CpNfTK39k55U%2CzndvqTc4P9I%2C_ysomCGaZLw%2CMjCZfZfucEc%2CwTowEKjDGkU%2CHbb5GPxXF1w%2CzugAhfd2r0g%2C6uZy86ePgO0%2Ckrzf1hkFAZA%2CF-QTb-0wRGk&key=AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E';

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

const odometer4 = new Odometer({
  el: document.querySelector("#myOdometer4"),
  value: 0,
  format: "(,ddd)",
});

const odometer5 = new Odometer({
  el: document.querySelector("#myOdometer5"),
  value: 0,
  format: "(,ddd)",
});

const odometer61 = new Odometer({
  el: document.querySelector("#myOdometer6-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer62 = new Odometer({
  el: document.querySelector("#myOdometer6-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer71 = new Odometer({
  el: document.querySelector("#myOdometer7-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer72 = new Odometer({
  el: document.querySelector("#myOdometer7-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer81 = new Odometer({
  el: document.querySelector("#myOdometer8-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer82 = new Odometer({
  el: document.querySelector("#myOdometer8-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer91 = new Odometer({
  el: document.querySelector("#myOdometer9-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer92 = new Odometer({
  el: document.querySelector("#myOdometer9-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer101 = new Odometer({
  el: document.querySelector("#myOdometer10-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer102 = new Odometer({
  el: document.querySelector("#myOdometer10-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer111 = new Odometer({
  el: document.querySelector("#myOdometer11-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer112 = new Odometer({
  el: document.querySelector("#myOdometer11-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer121 = new Odometer({
  el: document.querySelector("#myOdometer12-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer122 = new Odometer({
  el: document.querySelector("#myOdometer12-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer131 = new Odometer({
  el: document.querySelector("#myOdometer13-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer132 = new Odometer({
  el: document.querySelector("#myOdometer13-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer141 = new Odometer({
  el: document.querySelector("#myOdometer14-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer142 = new Odometer({
  el: document.querySelector("#myOdometer14-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer151 = new Odometer({
  el: document.querySelector("#myOdometer15-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer152 = new Odometer({
  el: document.querySelector("#myOdometer15-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer161 = new Odometer({
  el: document.querySelector("#myOdometer16-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer162 = new Odometer({
  el: document.querySelector("#myOdometer16-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer171 = new Odometer({
  el: document.querySelector("#myOdometer17-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer172 = new Odometer({
  el: document.querySelector("#myOdometer17-1"),
  value: 0,
  format: "(,ddd)",
});

const odometer181 = new Odometer({
  el: document.querySelector("#myOdometer18-2"),
  value: 0,
  format: "(,ddd)",
});

const odometer182 = new Odometer({
  el: document.querySelector("#myOdometer18-1"),
  value: 0,
  format: "(,ddd)",
});

const imageElement = document.getElementById("myImage");
const thumb1 = document.getElementById("thumb1");
const thumb2 = document.getElementById("thumb2");
const thumb3 = document.getElementById("thumb3");
const thumb4 = document.getElementById("thumb4");
const thumb5 = document.getElementById("thumb5");
const thumb6 = document.getElementById("thumb6");
const thumb7 = document.getElementById("thumb7");
const thumb8 = document.getElementById("thumb8");
const thumb9 = document.getElementById("thumb9");
const thumb10 = document.getElementById("thumb10");
const thumb11 = document.getElementById("thumb11");
const thumb12 = document.getElementById("thumb12");
const thumb13 = document.getElementById("thumb13");

async function getData() {
  try {
    const response = await fetch(apiUrl1)
    const data = await response.json();
    imageElement.src = data.items[0].snippet.thumbnails.medium.url;
    thumb1.src = data.items[1].snippet.thumbnails.medium.url; 
    thumb2.src = data.items[2].snippet.thumbnails.medium.url; 
    thumb3.src = data.items[3].snippet.thumbnails.medium.url; 
    thumb4.src = data.items[4].snippet.thumbnails.medium.url; 
    thumb5.src = data.items[5].snippet.thumbnails.medium.url; 
    thumb6.src = data.items[6].snippet.thumbnails.medium.url; 
    thumb7.src = data.items[7].snippet.thumbnails.medium.url; 
    thumb8.src = data.items[8].snippet.thumbnails.medium.url; 
    thumb9.src = data.items[9].snippet.thumbnails.medium.url; 
    thumb10.src = data.items[10].snippet.thumbnails.medium.url;
    thumb11.src = data.items[11].snippet.thumbnails.medium.url;
    thumb12.src = data.items[12].snippet.thumbnails.medium.url;
    thumb13.src = data.items[13].snippet.thumbnails.medium.url;



  } catch (error) {
    console.log('Error', error);
  }

}
getData();

function fetchViewCount() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[1].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 68;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer61.update(start);
          odometer62.update(start - 12600408)
          start += increment;
        }
      }, 5000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount()
setInterval(fetchViewCount, 180000);

function fetchViewCount2() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[2].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 120;
    const increment = 3;

     setInterval(() => {
        if (start <= max) {
          odometer71.update(start);
          odometer72.update(start - 5909365)
          start += increment;
        }
      }, 4000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount2()
setInterval(fetchViewCount2, 180000);

function fetchViewCount3() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[3].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer81.update(start);
          odometer82.update(start - 512742145)
          start += increment;
        }
      }, 10000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount3()
setInterval(fetchViewCount3, 180000);

function fetchViewCount4() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[4].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer91.update(start);
          odometer92.update(start - 318407072)
          start += increment;
        }
      }, 10000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount4()
setInterval(fetchViewCount4, 180000);

function fetchViewCount5() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[5].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer101.update(start);
          odometer102.update(start - 261694383)
          start += increment;
        }
      }, 10000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount5()
setInterval(fetchViewCount5, 180000);

function fetchViewCount6() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[6].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer111.update(start);
          odometer112.update(start - 245049151)
          start += increment;
        }
      }, 10000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount6()
setInterval(fetchViewCount6, 180000);

function fetchViewCount7() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[7].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer121.update(start);
          odometer122.update(start - 236218047)
          start += increment;
        }
      }, 10000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount7()
setInterval(fetchViewCount7, 180000);

function fetchViewCount8() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[8].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer131.update(start);
          odometer132.update(start - 204314157)
          start += increment;
        }
      }, 10000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount8()
setInterval(fetchViewCount8, 180000);

function fetchViewCount9() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[9].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer141.update(start);
          odometer142.update(start - 137830535)
          start += increment;
        }
      }, 10000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount9()
setInterval(fetchViewCount9, 180000);

function fetchViewCount10() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[10].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer151.update(start);
          odometer152.update(start - 136116991)
          start += increment;
        }
      }, 10000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount10()
setInterval(fetchViewCount10, 180000);

function fetchViewCount11() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[11].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer161.update(start);
          odometer162.update(start - 24624638)
          start += increment;
        }
      }, 10000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount11()
setInterval(fetchViewCount11, 180000);


function fetchViewCount12() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[12].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer171.update(start);
          odometer172.update(start - 22271253)
          start += increment;
        }
      }, 10000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount12()
setInterval(fetchViewCount12, 180000);

function fetchViewCount13() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    const viewCount = parseInt(data.items[13].statistics.viewCount);
    let start = viewCount;
    const max = viewCount + 70;
    const increment = 2;

     setInterval(() => {
        if (start <= max) {
          odometer181.update(start);
          odometer182.update(start - 15168996)
          start += increment;
        }
      }, 30000)
      
    })

    .catch((error) => console.error('Error fetching data:', error));
}
fetchViewCount13()
setInterval(fetchViewCount13, 240000);

function fetchViewCountAndUpdateOdometer() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {

      const viewCount = parseInt(data.items[0].statistics.viewCount);
      const likeCount = parseInt(data.items[0].statistics.likeCount);
      const commentCount = parseInt(data.items[0].statistics.commentCount);

      let start = viewCount;
      const max = viewCount + 150;
      const increment = 4;

      setInterval(() => {
        if (start <= max) {
          odometer.update(start);
          odometer1.update(start - 20000000)
          odometer2.update(start - 17848799)
          start += increment;
        }
      }, 3000)

      let startLike = likeCount;
      const maxLike = likeCount + 11;
      const incrementLike = 1;

      setInterval(() => {
        if (startLike <= maxLike) {
          odometer4.update(startLike);
          startLike += incrementLike;
        }
      }, 10000)
      let startComment = commentCount;
      const maxComment = commentCount + 11;
      const incrementComment = 1;

      setInterval(() => {
        if (startComment <= maxComment) {
          odometer5.update(startComment);
          startComment += incrementComment;
        }
      }, 10000)
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
