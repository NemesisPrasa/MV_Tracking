function formatDateTime(date) {
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: 'Asia/Colombo'
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

   // Function to extract words within double quotation marks
function extractQuotedWords(sentence) {
    var regex = /"([^"]*)"/;
    var matches = regex.exec(sentence);
    if (matches && matches.length > 1) {
      return matches[1];
    } else {
      return '';
    }
}




 // Get the container element
 var container = document.getElementById('container');

 // Function to change the content
 function changeContent() {
   container.innerHTML = `
   
<div class="item item1">
            
<div class="video-itzy">
    <div class="mv-title">
        <p><span>Ranking:</span> 01</p>
        <p><span>Released:</span> Mar 9, 2020</p>
        

    </div>
    <iframe class="mv_itzy"
    src=https://livecounts.io/embed/youtube-live-view-counter/fE2h3lGlOsk ">
    </iframe>
</div>

<div class="video-itzy">
    <div class="mv-title">
        <p><span>Ranking:</span> 02</p>
        <p><span>Released:</span>  Feb 10, 2019</p>
        

    </div>
    <iframe class="mv_itzy"
    src=https://livecounts.io/embed/youtube-live-view-counter/pNfTK39k55U ">
    </iframe>
</div>

<div class="video-itzy">
    <div class="mv-title">
        <p><span>Ranking:</span> 03</p>
        <p><span>Released:</span> Jul 28, 2019</p>
        

    </div>
    <iframe class="mv_itzy"
    src=https://livecounts.io/embed/youtube-live-view-counter/zndvqTc4P9I ">
    </iframe>
</div>

<div class="video-itzy">
    <div class="mv-title">
            <p><span>Ranking:</span> 04</p>
            <p><span>Released:</span> Apr 30, 2021 </p>
            

        </div>
        <iframe class="mv_itzy"
        src=https://livecounts.io/embed/youtube-live-view-counter/_ysomCGaZLw ">
        </iframe>
</div>

    <div class="video-itzy">
        <div class="mv-title">
            <p><span>Ranking:</span> 05</p>
            <p><span>Released:</span>  Sep 24, 2021</p>
            

        </div>
        <iframe class="mv_itzy"
        src=https://livecounts.io/embed/youtube-live-view-counter/MjCZfZfucEc ">
        </iframe>
    </div>

</div>

<div class="item item2">

<div class="video-itzy">
    <div class="mv-title">
        <p><span>Ranking:</span> 06</p>
        <p><span>Released:</span> Aug 17, 2020</p>
        

    </div>
    <iframe class="mv_itzy"
    src=https://livecounts.io/embed/youtube-live-view-counter/wTowEKjDGkU ">
    </iframe>
</div>

<div class="video-itzy">
    <div class="mv-title">
        <p><span>Ranking:</span> 07</p>
        <p><span>Released:</span>  Jul 15, 2022 </p>
        

    </div>
    <iframe class="mv_itzy"
    src=https://livecounts.io/embed/youtube-live-view-counter/Hbb5GPxXF1w ">
    </iframe>
</div>

<div class="video-itzy">
    <div class="mv-title">
        <p><span>Ranking:</span> 08</p>
        <p><span>Released:</span>  Nov 30, 2022</p>
        

    </div>
    <iframe class="mv_itzy"
    src=https://livecounts.io/embed/youtube-live-view-counter/zugAhfd2r0g ">
    </iframe>
</div>

<div class="video-itzy">
    <div class="mv-title">
            <p><span>Ranking:</span> 09</p>
            <p><span>Released:</span> Sep 26, 2021 </p>
            

        </div>
        <iframe class="mv_itzy"
        src=https://livecounts.io/embed/youtube-live-view-counter/9oyodEkzn94 ">
        </iframe>
</div>

    <div class="video-itzy">
        <div class="mv-title">
            <p><span>Ranking:</span> 10</p>
            <p><span>Released:</span>  Oct 21, 2022</p>
            

        </div>
        <iframe class="mv_itzy"
        src=https://livecounts.io/embed/youtube-live-view-counter/6uZy86ePgO0 ">
        </iframe>
    </div>

</div>

<div class="item item1">

<div class="video-itzy">
    <div class="mv-title">
        <p><span>Ranking:</span> 11</p>
        <p><span>Released:</span>  Mar 22, 2022</p>
        

    </div>
    <iframe class="mv_itzy"
    src=https://livecounts.io/embed/youtube-live-view-counter/krzf1hkFAZA ">
    </iframe>
</div>



<div class="video-itzy">
    <div class="mv-title">
        <p><span>Ranking:</span> 12</p>
        <p><span>Released:</span> Oct 31, 2021</p>
        

    </div>
    <iframe class="mv_itzy"
    src=https://livecounts.io/embed/youtube-live-view-counter/yeHZNPplmm4 ">
    </iframe>
</div>

<div class="video-itzy">
    <div class="mv-title">
            <p><span>Ranking:</span> 13</p>
            <p><span>Released:</span>  Sep 20, 2022 </p>
            

        </div>
        <iframe class="mv_itzy"
        src=https://livecounts.io/embed/youtube-live-view-counter/F-QTb-0wRGk ">
        </iframe>
</div>

<div class="video-itzy">
    <div class="mv-title">
        <p><span>Ranking:</span> 14</p>
        <p><span>Released:</span>  Jul 2, 2023</p>
        

    </div>
    <iframe class="mv_itzy"
    src=https://livecounts.io/embed/youtube-live-view-counter/RmTq3cJqyCo ">
    </iframe>
</div>

    <div class="video-itzy">
        <div class="mv-title">
            <p><span>Ranking:</span> 15</p>
            <p><span>Released:</span>  Apr 14, 2022</p>
            

        </div>
        <iframe class="mv_itzy"
        src=https://livecounts.io/embed/youtube-live-view-counter/OB7HVOCo6oQ ">
        </iframe>
    </div>

</div>
   
   `
 
   ;
 }

 // Call the changeContent function after 3 seconds
 setTimeout(changeContent, 180000);


 // Get the container element
 var header = document.getElementById('header');

 // Function to change the content
 function changeContent1() {
    header.innerHTML = `
    <div class="group-name">
            <p>Group Name: <span id="group-name">Itzy</span></p>
        </div>
        <div class="group-news">
            <p>News: <span id="group-name"> “None of My Business” coming to us on July 24 </span></p>
        </div>
       
        
        <div id="current-time"></div>
    `;
 }

 // Call the changeContent function after 1 minute (60 seconds)
 setTimeout(changeContent1, 180000);


