# Module 07 - Advanced JavaScript and APIs

## Overview
Now that you have mastered the basics of JavaScript, let's dive into advanced concepts! This module covers browser APIs, asynchronous programming, and how to interact with external services to create modern web applications.

## Objectives
By the end of this module, you will be able to:
- Understand and use promises and async/await
- Interact with REST APIs
- Manipulate local storage (localStorage)
- Handle advanced events
- Implement form validation
- Create applications with external data

## Prerequisites
- Module 06 - JavaScript Functions and Objects
- Understanding of basic events

## Required Materials
- VS Code
- Internet connection for testing APIs
- Modern browser with developer tools

## Session Structure
- Session 1: Asynchronous Programming (30 min)
- Session 2: APIs and Fetch (30 min)
- Practical Activity: Weather Application (1 hour)

## Theory: Asynchronous Programming

### Why Asynchronous?
JavaScript in the browser is **single-threaded** - it can only do one thing at a time. Asynchronous operations prevent blocking the user interface during network requests.

### Promises
```javascript
// Create a promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Success!");
    } else {
      reject("Error!");
    }
  }, 1000);
});

// Use a promise
myPromise
  .then(result => {
    console.log("Success:", result);
  })
  .catch(error => {
    console.log("Failure:", error);
  })
  .finally(() => {
    console.log("Done");
  });
```

### Async/Await (Modern syntax)
```javascript
async function loadData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call
loadData();
```

## Practical Activity: Fetch API

### Making HTTP Requests
```javascript
// GET request
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

// POST request
async function createUser(userData) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}
```

## Theory: Local Storage

### localStorage and sessionStorage
```javascript
// Save data
localStorage.setItem('name', 'Alice');
localStorage.setItem('age', '25');
localStorage.setItem('preferences', JSON.stringify({theme: 'dark', language: 'en'}));

// Retrieve data
const name = localStorage.getItem('name');
const preferences = JSON.parse(localStorage.getItem('preferences'));

// Remove data
localStorage.removeItem('age');
localStorage.clear(); // Remove everything

// sessionStorage (persists only during session)
sessionStorage.setItem('token', 'abc123');
```

## Project: Weather Application

Let's create a complete weather application using a public API:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🌤️ Weather App</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>🌤️ Weather App</h1>

    <div class="search-section">
      <input type="text" id="city-input" placeholder="Enter a city..."
             value="Paris" />
      <button id="search-btn">🔍 Search</button>
      <button id="location-btn">📍 My Location</button>
    </div>

    <div id="loading" class="loading hidden">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>

    <div id="weather-display" class="weather-display hidden">
      <div class="current-weather">
        <h2 id="city-name">Paris</h2>
        <div class="temp-section">
          <span id="temperature">20°C</span>
          <img id="weather-icon" src="" alt="Weather icon" />
        </div>
        <p id="description">Sunny</p>
        <div class="details">
          <div class="detail">
            <span class="label">Humidity:</span>
            <span id="humidity">65%</span>
          </div>
          <div class="detail">
            <span class="label">Wind:</span>
            <span id="wind">15 km/h</span>
          </div>
          <div class="detail">
            <span class="label">Pressure:</span>
            <span id="pressure">1013 hPa</span>
          </div>
        </div>
      </div>

      <div class="forecast">
        <h3>5-Day Forecast</h3>
        <div id="forecast-container" class="forecast-container">
          <!-- Forecasts will be added here -->
        </div>
      </div>
    </div>

    <div id="error-message" class="error hidden">
      City not found. Please try again.
    </div>

    <div class="favorites">
      <h3>Favorite Cities</h3>
      <div id="favorites-list" class="favorites-list">
        <!-- Favorites will be added here -->
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

```javascript
// script.js

// API Configuration (use your own API key)
const API_KEY = 'YOUR_API_KEY_HERE'; // Get a key from https://openweathermap.org/api
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0';

// Class to manage weather
class WeatherApp {
  constructor() {
    this.favorites = this.loadFavorites();
    this.currentCity = 'Paris';
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadWeather(this.currentCity);
  }

  setupEventListeners() {
    // Search by city
    document.getElementById('search-btn').addEventListener('click', () => {
      const city = document.getElementById('city-input').value.trim();
      if (city) {
        this.loadWeather(city);
      }
    });

    // Search by geolocation
    document.getElementById('location-btn').addEventListener('click', () => {
      this.getCurrentLocation();
    });

    // Enter key press
    document.getElementById('city-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        document.getElementById('search-btn').click();
      }
    });
  }

  async loadWeather(city) {
    this.showLoading();
    try {
      const weatherData = await this.fetchWeather(city);
      const forecastData = await this.fetchForecast(city);

      this.displayWeather(weatherData);
      this.displayForecast(forecastData);
      this.currentCity = city;

      this.hideLoading();
      this.hideError();
    } catch (error) {
      console.error('Error:', error);
      this.showError();
      this.hideLoading();
    }
  }

  async fetchWeather(city) {
    const response = await fetch(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=en`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    return await response.json();
  }

  async fetchForecast(city) {
    const response = await fetch(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=en`
    );

    if (!response.ok) {
      throw new Error('Forecast not available');
    }

    const data = await response.json();
    // Group by day (one forecast per day at noon)
    const dailyForecasts = [];
    const seenDays = new Set();

    data.list.forEach(item => {
      const date = new Date(item.dt * 1000);
      const dayKey = date.toDateString();

      if (!seenDays.has(dayKey) && date.getHours() === 12) {
        dailyForecasts.push(item);
        seenDays.add(dayKey);
      }
    });

    return dailyForecasts.slice(0, 5); // 5 days
  }

  displayWeather(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent =
      `${Math.round(data.main.temp)}°C`;
    document.getElementById('description').textContent =
      data.weather[0].description;
    document.getElementById('humidity').textContent =
      `${data.main.humidity}%`;
    document.getElementById('wind').textContent =
      `${Math.round(data.wind.speed * 3.6)} km/h`;
    document.getElementById('pressure').textContent =
      `${data.main.pressure} hPa`;

    // Weather icon
    const iconCode = data.weather[0].icon;
    document.getElementById('weather-icon').src =
      `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById('weather-display').classList.remove('hidden');
  }

  displayForecast(forecastData) {
    const container = document.getElementById('forecast-container');
    container.innerHTML = '';

    forecastData.forEach(day => {
      const date = new Date(day.dt * 1000);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      const temp = Math.round(day.main.temp);
      const iconCode = day.weather[0].icon;

      const forecastItem = document.createElement('div');
      forecastItem.className = 'forecast-item';
      forecastItem.innerHTML = `
        <div class="day">${dayName}</div>
        <img src="https://openweathermap.org/img/wn/${iconCode}.png"
             alt="${day.weather[0].description}">
        <div class="temp">${temp}°C</div>
      `;

      container.appendChild(forecastItem);
    });
  }

  async getCurrentLocation() {
    if (!navigator.geolocation) {
      alert('Geolocation not supported');
      return;
    }

    this.showLoading();
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const cityName = await this.getCityName(latitude, longitude);
          document.getElementById('city-input').value = cityName;
          this.loadWeather(cityName);
        } catch (error) {
          console.error('Geolocation error:', error);
          this.showError();
          this.hideLoading();
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        alert('Unable to get your location');
        this.hideLoading();
      }
    );
  }

  async getCityName(lat, lon) {
    const response = await fetch(
      `${GEO_URL}/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    return data[0]?.name || 'Current Location';
  }

  // Favorites management
  addToFavorites(city) {
    if (!this.favorites.includes(city)) {
      this.favorites.push(city);
      this.saveFavorites();
      this.updateFavoritesList();
    }
  }

  removeFromFavorites(city) {
    this.favorites = this.favorites.filter(fav => fav !== city);
    this.saveFavorites();
    this.updateFavoritesList();
  }

  loadFavorites() {
    const saved = localStorage.getItem('weather-favorites');
    return saved ? JSON.parse(saved) : [];
  }

  saveFavorites() {
    localStorage.setItem('weather-favorites', JSON.stringify(this.favorites));
  }

  updateFavoritesList() {
    const container = document.getElementById('favorites-list');
    container.innerHTML = '';

    this.favorites.forEach(city => {
      const favItem = document.createElement('div');
      favItem.className = 'favorite-item';
      favItem.innerHTML = `
        <span>${city}</span>
        <button class="remove-fav" data-city="${city}">✕</button>
      `;

      favItem.addEventListener('click', (e) => {
        if (!e.target.classList.contains('remove-fav')) {
          this.loadWeather(city);
        }
      });

      container.appendChild(favItem);
    });

    // Handler to remove favorites
    container.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove-fav')) {
        const city = e.target.dataset.city;
        this.removeFromFavorites(city);
      }
    });
  }

  // UI states
  showLoading() {
    document.getElementById('loading').classList.remove('hidden');
  }

  hideLoading() {
    document.getElementById('loading').classList.add('hidden');
  }

  showError() {
    document.getElementById('error-message').classList.remove('hidden');
    document.getElementById('weather-display').classList.add('hidden');
  }

  hideError() {
    document.getElementById('error-message').classList.add('hidden');
  }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  new WeatherApp();
});
```

```css
/* style.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  min-height: 100vh;
  padding: 20px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  color: #2d3436;
  margin-bottom: 30px;
  font-size: 2.5em;
}

.search-section {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

#city-input {
  flex: 1;
  min-width: 200px;
  padding: 12px 16px;
  border: 2px solid #ddd;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
}

#city-input:focus {
  border-color: #0984e3;
}

button {
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

#search-btn {
  background: #00b894;
  color: white;
}

#search-btn:hover {
  background: #00a085;
  transform: translateY(-2px);
}

#location-btn {
  background: #fdcb6e;
  color: #2d3436;
}

#location-btn:hover {
  background: #e6b85c;
  transform: translateY(-2px);
}

.loading {
  text-align: center;
  padding: 40px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0984e3;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.weather-display {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  text-align: center;
}

.current-weather h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

.temp-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
}

#temperature {
  font-size: 4em;
  font-weight: 300;
}

#weather-icon {
  width: 80px;
  height: 80px;
}

#description {
  font-size: 1.2em;
  margin-bottom: 20px;
  text-transform: capitalize;
}

.details {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}

.detail {
  background: rgba(255,255,255,0.2);
  padding: 10px 15px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.label {
  font-weight: 500;
  margin-right: 5px;
}

.forecast {
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

.forecast h3 {
  margin-bottom: 15px;
  text-align: center;
}

.forecast-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
}

.forecast-item {
  background: rgba(255,255,255,0.2);
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  flex: 1;
  min-width: 80px;
  backdrop-filter: blur(10px);
}

.forecast-item img {
  width: 40px;
  height: 40px;
  margin: 5px 0;
}

.day {
  font-weight: 600;
  margin-bottom: 5px;
}

.temp {
  font-size: 1.2em;
  font-weight: 500;
}

.error {
  background: #ff7675;
  color: white;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
}

.favorites {
  margin-top: 30px;
}

.favorites h3 {
  margin-bottom: 15px;
  color: #2d3436;
}

.favorites-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.favorite-item {
  background: #f8f9fa;
  padding: 8px 12px;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.favorite-item:hover {
  background: #0984e3;
  color: white;
}

.remove-fav {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  margin-left: 5px;
}

.remove-fav:hover {
  color: #ff7675;
}

.hidden {
  display: none !important;
}

@media (max-width: 600px) {
  .container {
    padding: 20px;
  }

  .search-section {
    flex-direction: column;
  }

  .forecast-container {
    flex-direction: column;
  }

  .forecast-item {
    margin-bottom: 10px;
  }
}
```

## Assessment
1. Create an asynchronous function that fetches data from a public API
2. Implement error handling for network requests
3. Add caching functionality with localStorage
4. Create a responsive user interface

## Extra Challenge
Integrate a geolocation API to find nearby points of interest:

```javascript
async function findNearbyPlaces(lat, lon, type = 'restaurant') {
  const response = await fetch(
    `https://api.foursquare.com/v3/places/search?ll=${lat},${lon}&query=${type}`,
    {
      headers: {
        'Authorization': 'YOUR_FOURSQUARE_API_KEY'
      }
    }
  );
  return await response.json();
}
```

## Next Steps
Congratulations on mastering APIs and asynchronous programming! In the next module, we will build full-stack applications by integrating the backend.

## Resources
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript Info: Promises](https://javascript.info/promise-basics)
- [OpenWeatherMap API](https://openweathermap.org/api)