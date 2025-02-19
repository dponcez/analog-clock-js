import { selector } from '../custom_functions/_fns.js';

export const template = () => {
  const container = selector('.container');
  
  container.innerHTML = `
    <div class="clock--container">
        <div class="clock">
          <h2 class="heading">classic</h2>
          <div class="dials--container">
            <div class="hand hrs" style="--dial-color: hsl(204, 70%, 53%);" data-hours="hrs"></div>
            <div class="hand mins" style="--dial-color: hsl(6, 63%, 46%);" data-minutes="mins"></div>
            <div class="hand secs" style="--dial-color: hsl(168, 76%, 36%);" data-seconds="secs"></div>
          </div>
          <div class="number--container">
            <span class="number" style="--i: 0;">XII</span>
            <span class="number small" style="--i: 1;">I</span>
            <span class="number small" style="--i: 2;">II</span>
            <span class="number" style="--i: 3;">III</span>
            <span class="number small" style="--i: 4;">IV</span>
            <span class="number small" style="--i: 5;">V</span>
            <span class="number" style="--i: 6;">VI</span>
            <span class="number small" style="--i: 7;">VII</span>
            <span class="number small" style="--i: 8;">VIII</span>
            <span class="number" style="--i: 9;">IX</span>
            <span class="number small" style="--i: 10;">X</span>
            <span class="number small" style="--i: 11;">XI</span>
          </div>
        </div>
      </div>
  `;
}