const videoElement = document.getElementById('video'); 
const button = document.getElementById('button'); 

//Prompt the user to select a media stream, and then it pass to video element, then play
async function selectMediaStream(){
   try{
      //this has our media stream data, user will select the window or page to share
      const mediaStream = await navigator.mediaDevices.getDisplayMedia();
      //to with the stream we received above 
      videoElement.srcObject = mediaStream; 
      videoElement.onloadedmetadata = () =>{
         videoElement.play();
         //on load of video metadata request for picture in picture
         videoElement.requestPictureInPicture();
      }
   }
   catch(error){
      //Catch error here
      window.alert(error); 
   }
}

button.addEventListener('click', async()=>{
   if(button.innerText === "START"){
      await selectMediaStream(); 
      button.innerText = "STOP"
   }
   else{
      button.innerText = "START"; 
      await document.exitPictureInPicture();
   }
})
