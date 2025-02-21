# Analog Clock Project

> **NOTE**: this project is an implementation of an analog clock using _JavaScript_, _HTML_, and _CSS_.

## What's an Analog Clock?

An analog clock is a clock with a traditional face that displays the time using moving hands to indicate the **hours**, **minutes**, and **seconds**.

## Features
----

- Displays the current time with hour, minute, and second hands.
- Updates the time every second.

## Technologies Used
----

- [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

__Source code editor__

- [VSCode](https://code.visualstudio.com)

__Tool__

- [GIT](https://git-scm.com)

## Installation
----

1. Clone the repository:
  ```bash
  git clone https://github.com/yourusername/analog-clock-js.git
  ```

2. Navigate to the project directory:
  ```bash
  cd analog-clock-js
  ```

3. Open `index.html` in your web browser to view the clock.

## Usage
----

- Simply open the `index.html` file in any modern web browser.
- The clock will display the current time and update every second.

## Contributing
----

1. Fork the repository.
2. Create a new branch:
  ```bash
  git checkout -b feature-branch
  ```
3. Make your changes and commit them:
  ```bash
  git commit -m "Description of changes"
  ```
4. Push to the branch:
  ```bash
  git push origin feature-branch
  ```
5. Open a pull request.

### Project Structure
----

```
└── 📁analog-clock-js
    └── 📁css
        └── index.css
    └── 📁custom_functions
        └── _fns.js
    └── 📁js
        └── index.js
    └── 📁modules
        └── clock.js
        └── template.js
    └── .gitignore
    └── index.html
    └── LICENSE
    └── README.md
```

### Code Snippets
----

The code fragment below is an illustration of an _Analog Clock_ and its implementation with _HTML5_, _CSS3_ and JavaScript_, and is not part of this project:

#### HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Analog Clock</title>
  <link rel="stylesheet" href="css/index.css">
</head>
<body>
  <div class="clock">
    <div class="clock-face">
      <div class="hand hour-hand"></div>
      <div class="hand minute-hand"></div>
      <div class="hand second-hand"></div>
    </div>
  </div>
  <script src="js/index.js"></script>
</body>
</html>
```

#### CSS (`css/index.css`)

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
  margin: 0;
  font-family: Arial, sans-serif;
}

.clock {
  width: 300px;
  height: 300px;
  border: 20px solid white;
  border-radius: 50%;
  position: relative;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.clock-face {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px);
}

.hand {
  width: 50%;
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
```

#### JavaScript (`js/index.js`)

```js
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
```

Code fragment above was generated from <small>[Copilot]</small>

### License
----

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgements
----

- Inspired by various online tutorials and resources on creating analog clocks with JavaScript.