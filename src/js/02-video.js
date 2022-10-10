
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAG = 'videoplayer-current-time';

function onPlayTime(data) {
  localStorage.setItem(LOCAL_STORAG, JSON.stringify(data));
}

player.on('timeupdate', throttle(onPlayTime, 1000));


function initPage() {
  const saveTime = localStorage.getItem(LOCAL_STORAG);
  if (saveTime) {
    const paused = JSON.parse(saveTime).seconds;
    player.setCurrentTime(paused);
  }
}
initPage();