let musicData=null;

function formatMyData(musicData){
      console.log('musicData:',musicData);
      let htmlOutput='';
      let arr=musicData["data"];
      //lets add header for our grid
      htmlOutput +=`<div class="header"><div class="headerItem">Title</div>
      <div class="headerItem">Artist</div>
      <div class="headerItem">Released</div>
      <div class="headerItem">Genre</div>
      <div class="headerItem">Player</div>
      </div>`;
      for(let i=0; i<arr.length; i++){
        htmlOutput +='<div class="eachItem">';
              htmlOutput +='<div class="title">'+arr[i].title+'</div>'; 
              htmlOutput +='<div class="artist">'+arr[i].artist+'</div>';  
              htmlOutput +='<div class="album">'+arr[i].released+'</div>';
              htmlOutput +='<div class="released">'+arr[i].genre+'</div>';
              htmlOutput +='<div class="player">'
               htmlOutput +=`<audio controls>
                    <source src="music/${arr[i].fileName}" type="audio/wav">
                   </audio>`;
              htmlOutput +='</div>';
              htmlOutput +='</div>';

              document.getElementById('musicList').innerHTML=htmlOutput;

      }

}

function loadMusicData(){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "json_music_data.txt", true);
    xhr.send();

    xhr.onreadystatechange = function() {
      //This is where it will wait for server to come back with response
      if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           //document.getElementById("demo").innerHTML = xhr.responseText;
           musicData=JSON.parse(xhr.responseText);

           //console.log(musicData);
           formatMyData(musicData);
        }
    };
}

function searchMusic(){
    //console.log('search clicked');
    let title=document.getElementById('searchTitle').value;
    let artist=document.getElementById('searchArtist').value;
    let release=document.getElementById('searchRelease').value;

    //console.log(title,artist,release);

    musicData.data=musicData.data.filter(
      function(e,i){
          if(title){
              return e.title==title;
          }
          else if(artist){
             return e.artist==artist;
          }
          else if(release){
            return e.released==release;
          }
          
      }
    );

    formatMyData(musicData);


}



loadMusicData();


/*

favSongsData=JSON.stringify(favSongsData);
favSongsData=JSON.parse(favSongsData);
//console.log(favSongsData);
//console.log(typeof favSongsData);

////Lets loop through each item using good old For loop

for(let key in favSongsData){
   //console.log('key:',key);
   //console.log('value:',favSongsData[key]);
}

let arr=favSongsData.data;
for(let i=0; i<arr.length; i++){
  //console.log('item: ',i,arr[i]);
}

///Give me all the songs by lionel richie
let outputArr=[];
for(let i=0; i<arr.length; i++){
  if(arr[i].artist=='Lionel Richie'){
     outputArr.push(arr[i]);
  }
}
console.log('Lionel Richie: ',outputArr);

////OR use the built in filter method for array which lets you filter out items from array

//Shania Twain

outputArr=arr.filter(
   function(e,i){
     return e.artist=='Lionel Richie';
   }
);
console.log('Lionel Richie: ',outputArr);

//Can we get all the songs that came out after 1985?
outputArr=arr.filter(
  function(e,i){
    //
    return Number(e.released)>1985;
  }
);
console.log('After 1985: ',outputArr);
*/