import { selector } from "../custom_functions/_fns.js";
import { handleRotate } from "../custom_functions/_fns.js";

export const initApp = () => {
  const htmlRefs = {
    hours: selector('[data-hours]'),
    minutes: selector('[data-minutes]'),
    seconds: selector('[data-seconds]')
  }

  const { hours, minutes, seconds } = htmlRefs;
  let interval = 1000;
  let max = 30;
  let min = 6;
  
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