import { createApp } from 'vue'
import App from './App.vue'
import SwipeComponent from './components/SwipeComponent.vue'
import WeatherUIComponent from './components/UI/WeatherUIComponent.vue'
import WeatherCity from './components/WeatherCity.vue'
import AddCity from './components/AddCity.vue'
import IconeName from './components/UI/IconeName.vue'
import DescriptionPicture from './components/UI/DescriptionPicture.vue'
const app = createApp(App)

app.component('SwipeComponent', SwipeComponent )
app.component('WeatherUIComponent', WeatherUIComponent)
app.component('AddCity', AddCity)
app.component('WeatherCity', WeatherCity)
app.component('IconeName', IconeName)
app.component('DescriptionPicture', DescriptionPicture)
app.mount('#app')
