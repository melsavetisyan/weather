<template>
    
    <select @change="selectCity" v-if="canAdd" v-model="cityName">

        <option value="Yerevan">Yerevan</option>
        <option value="Moscow">Moscow</option>
        <option value="London">London</option>
        <option value="Stepanakert">Stepanakert</option>
        <option
         v-for="(item, index) in capitals"
         :key="index"
         :value="item">{{ item }}</option>
    </select>

    <button class="addCityButton" @click="canAdd = !canAdd">
        {{ !canAdd? '+' : '-' }}

    </button>
</template>

<script>

export default {
    emits:['addedCity'],
    data:()=>({
        canAdd : false,
        cityName:'',
        capitals: ["Abu Dhabi", "Abuja", "Accra", "Addis Ababa", "Algiers", "Amman", "Amsterdam", "Ankara", "Antananarivo", "Apia", "Ashgabat", "Asmara", "Astana", "Asuncion", "Athens", "Avarua", "Baghdad", "Baku", "Bamako", "Bandar Seri Begawan", "Bangkok", "Bangui", "Banjul", "Basseterre", "Beijing", "Beirut", "Belgrade", "Belmopan", "Berlin", "Bern", "Bishkek", "Bissau", "Bogota", "Brasilia", "Bratislava", "Brazzaville", "Bridgetown", "Brussels", "Bucharest", "Budapest", "Buenos Aires", "Bujumbura", "Cairo", "Canberra", "Caracas", "Castries", "Chisinau", "Colombo", "Conakry", "Copenhagen", "Dakar", "Damascus", "Dhaka", "Dili", "Djibouti", "Dodoma", "Dublin", "Dushanbe", "Edinburgh", "Freetown", "Funafuti", "Gaborone", "Georgetown", "Gibraltar", "Guatemala City", "Hanoi", "Harare", "Havana", "Helsinki", "Honiara", "Islamabad", "Jakarta", "Juba", "Kabul", "Kampala", "Kathmandu", "Khartoum", "Kiev", "Kigali", "Kingston", "Kingstown", "Kinshasa", "Kuala Lumpur", "Kuwait City", "Libreville", "Lilongwe", "Lima", "Lisbon", "Ljubljana", "Lome", "London", "Luanda", "Lusaka", "Luxembourg", "Madrid", "Majuro", "Malabo", "Male", "Managua", "Manama", "Manila", "Maputo", "Maseru", "Mbabane", "Melekeok", "Mexico City", "Minsk", "Mogadishu", "Monaco", "Monrovia", "Montevideo", "Moroni", "Moscow", "Muscat", "Nairobi", "Nassau", "Naypyidaw", "New Delhi", "Nicosia", "Nouakchott", "Nuku'alofa", "Nuuk", "Oranjestad", "Oslo", "Ottawa", "Ouagadougou", "Pago Pago", "Palikir", "Panama City", "Papeete", "Paramaribo", "Paris", "Phnom Penh", "Podgorica", "Port Louis", "Port Moresby", "Port Vila", "Port-au-Prince", "Port of Spain", "Porto-Novo", "Prague", "Praia", "Pretoria", "Pyongyang", "Quito", "Rabat", "Reykjavik", "Riga", "Riyadh", "Road", "Rome", "Roseau", "Saint George's", "Saint John's", "Saint Peter Port", "Saint-Denis", "San Jose", "San Marino", "San Salvador", "Sanaa", "Santiago", "Santo Domingo", "Sarajevo", "Seoul", "Singapore", "Skopje", "Sofia", "Stockholm", "Sucre", "Sukhumi", "Suva", "Taipei", "Tallinn", "Tarawa", "Tashkent", "Tbilisi", "Tegucigalpa", "Tehran", "Thimphu", "Tirana", "Tokyo", "Tripoli", "Tunis", "Ulaanbaatar", "Vaduz", "Valletta", "Vatican City", "Victoria", "Vienna", "Vientiane", "Vilnius", "Warsaw", "Washington, D.C.", "Wellington", "Windhoek", "Yamoussoukro", "Yaounde", "Yerevan", "Zagreb"]
    }),
    methods: {
        selectCity(){
            this.$emit('addedCity', this.cityName)
            this.canAdd =  false
        }
    },
}
</script>

<style scoped>
.addCityButton{
    width: 60px;
    height: 60px;
    background: red;
    color: black;
    font-size: 60px ;
    border-radius: 50%;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;  
    padding: 0;
}
</style>