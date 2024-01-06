console.log('Welcome to javascript');
//Initilize the variable
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('MyprogressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songName'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));
let masterAudio = document.getElementById('masterAudio');
let songIndex=0;
let songs =[
    {songName:'Let me love you', filePath:'songs/1.mp3',coverPath:'covers/1.jpg'},
    {songName:'Rabba Rabba - Heropanti', filePath:'songs/2.mp3',coverPath:'covers/2.jpg'},
    {songName:'Salamein Ishq Meri Jaan -', filePath:'songs/3.mp3',coverPath:'covers/3.jpg'},
    {songName:'Kaisa ye ishq hai - Mere Brother Ki Dulhan', filePath:'songs/4.mp3',coverPath:'covers/4.jpg'},
    {songName:'Sun raha hai na tu - Ashiqui-2', filePath:'songs/5.mp3',coverPath:'covers/5.jpg'},
    {songName:'Kaise mujhe tum mil gayi - Ghajani', filePath:'songs/6.mp3',coverPath:'covers/6.jpg'},
    {songName:'Chaleya - Jawan', filePath:'songs/7.mp3',coverPath:'covers/7.jpg'},
    {songName:'O Mahi - Dunki', filePath:'songs/8.mp3',coverPath:'covers/8.jpg'},
    {songName:'Main to lut put - Dunki', filePath:'songs/9.mp3',coverPath:'covers/9.jpg'},
    {songName:'Jhoomein jo pathaan - Pathaan', filePath:'songs/10.mp3',coverPath:'covers/10.jpg'}

]

//handle the events

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        
    }
})

audioElement.addEventListener('timeupdate',()=>{

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
        audioElement.currentTime = myProgressBar.value * audioElement.duration/100;


})

makeAllPlays = () =>{

    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
       
    })
}



songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        songIndex=parseInt(e.target.id);
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterAudio.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
        

        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterAudio.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
        
    }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterAudio.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})


