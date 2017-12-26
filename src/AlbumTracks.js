/* eslint no-param-reassign: ["error", { "props": false }] */
import convertToHumanTime from './ConvertToHumanTime';

function createMarkup(tracks) {
  return tracks.map(track => `
  <div class="music" data-track-preview="">
    <p class="music-number">${track.track_number}</p>
    <p class="music-title">${track.name}</p>
    <p class="music-duration">${convertToHumanTime(track.duration_ms)}</p>
  </div>`).join('');
}

export default function renderAlbumTracks(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}
