function playSound(soundFile) {
    const audio = document.getElementById('audioPlayer');
    audio.src = soundFile;
    audio.play();
  }

  const audio = document.getElementById('audioPlayer');
const volumeSlider = document.getElementById('volumeSlider');

function playSound(soundFile) {
  audio.src = soundFile;
  audio.play();
}

function changeVolume(volume) {
  audio.volume = volume;
}


function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
