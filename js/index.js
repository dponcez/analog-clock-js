const initApp = () => {
  
  const selectors = {
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
  }

  const { hours, minutes, seconds } = selectors;
  let interval = 1000;
  let max = 30;
  let min = 6;
  
  const handleRotate = (element, value) => {
    element.style.transform = `rotate(${value}deg)`
  }

  setInterval(() => {
    const CURRENT_DATE = new Date();
  
    const HOUR = CURRENT_DATE.getHours() * max;
    const MINUTE = CURRENT_DATE.getMinutes() * min;
    const SECOND = CURRENT_DATE.getSeconds() * min;
    const CURRENT_TIME = HOUR + (MINUTE / 12);

    handleRotate(hours, CURRENT_TIME);
    handleRotate(minutes, MINUTE);
    handleRotate(seconds, SECOND)
    
  }, interval);

}

document.addEventListener('DOMContentLoaded', initApp)