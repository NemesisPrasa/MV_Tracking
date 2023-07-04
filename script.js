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

        newestCounter.innerHTML = updatedata.items[0].statistics.viewCount;
        popularCounter.innerHTML = updatedata.items[1].statistics.viewCount;

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

  }catch (error){
        console.log('Error', error);
       }

}

updateData();
setInterval(updateData, 60000);




