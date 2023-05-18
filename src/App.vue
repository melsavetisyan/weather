<template>
  <div class="parentForAll">
   
   <WeatherCity
    v-for="(cityData, index) in arrayOfDatas"
      :key="index"
      :city="cityData.city.name"
      :list="cityData.list"
      @deleteItemInWeather="deleteCity"
    ></WeatherCity>
 </div>
 <div class="addCityComponent">
   <AddCity  @addedCity="(value) => this.city = value"></AddCity>
 </div> 
</template>

<script>
export default {

  data:()=>({
    lat: '',
    lon: '',
    city: '',
    arrayOfDatas: [],
    getMyLocation: false,
  }),

  methods:{
    deleteCity(city){
      this.arrayOfDatas = this.arrayOfDatas.filter(item => item.city.name !== city)
    },
    getLocation(){
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          // alert(`lon:${lon}, lat: ${lat}`)
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    },
  },
  mounted(){
    this.getLocation()
      if(JSON.parse(localStorage.weatherArray).length){
        this.arrayOfDatas.push(...JSON.parse(localStorage.getItem('weatherArray')))
      }else{
        this.getMyLocation = true
      }
  },
  watch:{
    lon(){
      if(this.getMyLocation){
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${this.lat}&lon=${this.lon}`,{
          headers:{'Accept-Language': 'en-EN'}
        })
        .then(res => res.json())
        .then(data => this.city = data.address.city)
      }
    },
    
    city(){
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city}&appid=9deedf47613864fa3a495199a5dbb7a5`)
      .then(res => res.json())
      .then(data => {
        if(data.cod === '200'){
          this.arrayOfDatas.push(Object.freeze(data))
        }
        window.arrayOfDatas = this.arrayOfDatas
      })

      
    },

    arrayOfDatas: {
      handler: function(newVal) {
        localStorage.setItem('weatherArray', JSON.stringify(newVal.filter(item => item.cod === '200')))
        console.log(newVal);
        window.newVal = newVal[0]
      },    
      deep: true  
    },
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color: black;
}
.parentForAll{
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
}
.divForSliderParent{
  align-items: center;
  width: 700px;
  height: 200px;
}
.addCityComponent{
  position: fixed;
  top: 25px;
  right: 25px;
  display: flex;
}
</style>
