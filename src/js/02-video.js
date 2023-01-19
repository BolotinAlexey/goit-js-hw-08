import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = 'videoplayer-current-time';

const settings = {
  url: 'https://player.vimeo.com/video/236203659',
  width: 640,
  height: 360,
  autoplay: true,
};

const player = new Player('vimeo-player', settings);
const currentLocalStorageValue = localStorage.getItem(CURRENT_TIME);

const settingTime = currentLocalStorageValue ? currentLocalStorageValue : 0;

player.setCurrentTime(settingTime);
player.on('timeupdate', throttle(recordPlayTime, 1000));

function recordPlayTime(e) {
  localStorage.setItem(CURRENT_TIME, e.seconds);
}
