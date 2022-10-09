
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
  const outputValue = JSON.parse(localStorage.getItem(LOCAL_STORAG));

  if (outputValue === null) {
    return;
  }

  const paused = outputValue['seconds'];
  if (paused) {
    player
      .setCurrentTime(paused)
      .then(function () {})
      .catch(function (error) {
        switch (error.name) {
          case 'RangeError':
            break;
          default:
            break;
        }
      });
  }
}

initPage();