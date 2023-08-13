console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio("Audio-1.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
let songs=[
    {songName:"Bohemian Rhapsody" , filePath: "Audio-1.mp3",coverPath:"Cover-1.jpg" },
    {songName:"Glimpse Of Us" , filePath: "Audio-2.mp3",coverPath:"Cover-2.jpg" },
    {songName:"Rolling In The Deep" , filePath: "Audio-3.mp3",coverPath:"Cover-3.jpg" },
    {songName:"Say Yes To Heaven" , filePath: "Audio-4.mp3",coverPath:"Cover-5.jpg" },
    {songName:"Champagne Problems" , filePath: "Audio-5.mp3",coverPath:"Cover-5.jpg" },
    {songName:"Driver's License" , filePath: "Audio-6.mp3",coverPath:"Cover-6.jpg" }
]

masterPlay.addEventListener('click',function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
audioElement.addEventListener('timeupdate',function(){
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value= progress;
})
myProgressBar.addEventListener('change',function(){
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})
const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',function(e){
           e.target.classList.remove('fa-pause-circle');
           e.target.classList.add('fa-play-circle');

})
})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',function(e){
        songIndex=parseInt(e.target.id)
       e.target.classList.remove('fa-play-circle');
       e.target.classList.add('fa-pause-circle');
       switch(songIndex){
        case 1:
            audioElement.src='Audio-1.mp3';
            break;
        case 2:
            audioElement.src='Audio-2.mp3';
            break;
        case 3:
            audioElement.src='Audio-3.mp3';
            break;
        case 4:
            audioElement.src='Audio-4.mp3';
            break;
        case 5:
            audioElement.src='Audio-5.mp3';
            break;
        case 6:
            audioElement.src='Audio-6.mp3';
            break;
       }
       masterSongName.innerHTML=songs[(songIndex-1)].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');

       
    })
})
document.getElementById('next').addEventListener('click',function(){
    if(songIndex>6){
        songIndex=1;
    }
    else{
        songIndex+=1;
    }
    switch(songIndex){
        case 1:
            audioElement.src='Audio-1.mp3';
            break;
        case 2:
            audioElement.src='Audio-2.mp3';
            break;
        case 3:
            audioElement.src='Audio-3.mp3';
            break;
        case 4:
            audioElement.src='Audio-4.mp3';
            break;
        case 5:
            audioElement.src='Audio-5.mp3';
            break;
        case 6:
            audioElement.src='Audio-6.mp3';
            break;
       }
       masterSongName.innerHTML=songs[(songIndex-1)].songName;
        audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
    
})
document.getElementById('previous').addEventListener('click',function(){
    if(songIndex<=1){
        songIndex=1;
    }
    else{
        songIndex-=1;
    }
    switch(songIndex){
        case 1:
            audioElement.src='Audio-1.mp3';
            break;
        case 2:
            audioElement.src='Audio-2.mp3';
            break;
        case 3:
            audioElement.src='Audio-3.mp3';
            break;
        case 4:
            audioElement.src='Audio-4.mp3';
            break;
        case 5:
            audioElement.src='Audio-5.mp3';
            break;
        case 6:
            audioElement.src='Audio-6.mp3';
            break;
       }
       masterSongName.innerHTML=songs[(songIndex-1)].songName;
        audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
    
})

