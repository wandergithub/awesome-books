import { DateTime } from './luxon.js';

const now = DateTime.now();
const displayDate = () => {
  const container = document.querySelector('.date');
  container.textContent = now.toLocaleString(DateTime.DATETIME_MED);
};

export default displayDate;