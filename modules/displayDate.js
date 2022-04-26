import { DateTime } from '../node_modules/luxon/src/luxon.js';

const now = DateTime.now();
export default function displayDate() {
  const container = document.querySelector('.date');
  container.textContent = now.toLocaleString(DateTime.DATETIME_MED);
}