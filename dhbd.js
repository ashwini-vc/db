const calendar = document.querySelector('.calendar');

function createCalendar(year, month) {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  
  const monthName = firstDay.toLocaleString('default', { month: 'long' });
  
  let html = <div class="month">${monthName} ${year}</div>;
  
  html += <div class="weekdays">;
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (const day of weekdays) {
    html += <div>${day}</div>;
  }
  html += </div>;
  
  html += <div class="days">;
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const currentDate = new Date(year, month, i);
    if (i === 1) {
      html += <div style="flex-basis: ${firstDay.getDay() * 100 / 7}%;"></div>;
    }
    html += <div class="${currentDate.toDateString() === new Date().toDateString() ? 'today' : ''}">${i}</div>;
    if (currentDate.getDay() === 6) {
      html += </div><div class="days">;
    }
  }
  html += </div>;
  
  calendar.innerHTML = html;
}

const today = new Date();
createCalendar(today.getFullYear(), today.getMonth());