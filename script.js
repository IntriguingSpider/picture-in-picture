const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt user to select a media stream, pass to vid element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    //
  }
}

button.addEventListener("click", async () => {
  //Disable Button
  button.disabled = true;
  //start picture in picture
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
});
//onLoad
selectMediaStream();
