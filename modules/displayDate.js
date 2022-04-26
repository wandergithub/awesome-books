import { DateTime } from './luxon.js';

const now = DateTime.now();
export default function displayDate() {
  const container = document.querySelector('.date');
  container.textContent = now.toLocaleString(DateTime.DATETIME_MED);
}