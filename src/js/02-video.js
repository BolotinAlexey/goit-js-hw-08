import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const settings = {
  url: 'https://player.vimeo.com/video/236203659',
  width: 640,
  height: 360,
  autoplay: true,
};

const player = new Player('vimeo-player', settings);
const currentLocalStorageValue = localStorage.getItem(
  'videoplayer-current-time'
);

const currentTime = currentLocalStorageValue ? currentLocalStorageValue : 0;

player.setCurrentTime(currentTime);
player.on('timeupdate', throttle(recordPlayTime, 1000));

function recordPlayTime(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
