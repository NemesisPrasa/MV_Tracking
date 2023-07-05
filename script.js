const apiUrl = 'https://youtube.googleapis.com/youtube/v3/videos?part=statistics%2Csnippet&id=RmTq3cJqyCo%2CfE2h3lGlOsk%2CpNfTK39k55U%2CzndvqTc4P9I%2C_ysomCGaZLw%2CMjCZfZfucEc%2CwTowEKjDGkU%2CHbb5GPxXF1w%2CzugAhfd2r0g&key=AIzaSyCSxEEH9DjflJ1Czxk_wH6_zQWRlbtmT4E';
const imageElement = document.getElementById("myImage");
const newestHeader = document.getElementById("newestHeader");
const newestCounter = document.getElementById("viewersCount2");
const imageElement2 = document.getElementById("myImage2");
const popularHeader = document.getElementById("popularHeader");
const popularCounter = document.getElementById("viewersCountPopular");

async function getData(){
  try{
       const response= await fetch(apiUrl)
       const data= await response.json();
       imageElement.src = data.items[0].snippet.thumbnails.medium.url;
       newestHeader.innerHTML = data.items[0].snippet.title;
       imageElement2.src = data.items[1].snippet.thumbnails.medium.url;
       popularHeader.innerHTML = data.items[1].snippet.title;
       

  }catch (error){
   console.log('Error', error);
  }
      
}
getData();

async function updateData(){
  try{
        const response= await fetch(apiUrl)
        const updatedata= await response.json();

        
        popularCounter.innerHTML = updatedata.items[1].statistics.viewCount;
        newestCounter.innerHTML =  updatedata.items[0].statistics.viewCount;

        length=updatedata.items.length;
            var temp="";
            for(i=2;i<length;i++)
            {
                
                
              temp+="<tr>";
              temp+="<td><img src="+updatedata.items[i].snippet.thumbnails.medium.url+"></td>";
              temp+="<td>"+updatedata.items[i].snippet.title+"</td>";
              temp+="<td>"+updatedata.items[i].statistics.viewCount+"</td>";
            }
            document.getElementById("content").innerHTML=temp;
        

  }
  catch (error){
        console.log('Error', error);
       }

}


updateData();
setInterval(updateData, 60000);


// Example JavaScript code
function animateViewsCount(targetCount) {
  const viewsCountElement = document.getElementById('viewsCount');
  const currentCount = parseInt(viewsCountElement.textContent);
  const increment = Math.ceil((targetCount - currentCount) / 1000); // Increment value for each animation frame

  if (currentCount < targetCount) {
    const animation = setInterval(() => {
      const updatedCount = parseInt(viewsCountElement.textContent) + increment;
      if (updatedCount >= targetCount) {
        clearInterval(animation);
        viewsCountElement.textContent = targetCount;
      } else {
        viewsCountElement.textContent = updatedCount;
      }
    }, 6000); // Change timing here if needed
  } else {
    viewsCountElement.textContent = targetCount;
  }
}

// Example implementation of fetchViewsCount()
async function fetchViewsCount() {

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      const viewsCount = data.items[0].statistics.viewCount;
      return parseInt(viewsCount);
    } else {
      console.error('Failed to fetch views count:', data.error.message);
    }
  } catch (error) {
    console.error('Error occurred while fetching views count:', error);
  }

  return 0; // Return a default value in case of an error
}

// Updated fetchDataAndUpdateViewsCount function
async function fetchDataAndUpdateViewsCount() {
  try {
    // Fetch data from YouTube
    const targetViewsCount = await fetchViewsCount();

    // Animate the views count
    animateViewsCount(targetViewsCount);
  } catch (error) {
    console.error('Error occurred while fetching or updating views count:', error);
  }
}

// Initial fetch and update
fetchDataAndUpdateViewsCount();

// Fetch and update every 60 seconds
setInterval(fetchDataAndUpdateViewsCount, 60000);





