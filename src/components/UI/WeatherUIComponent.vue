<template>
    <div @contextmenu="showDelete = !showDelete" :class="[{parentWether:true}, {nigth: !checkLigth}, {day: checkLigth}]">
        <div v-if="!checkLigth" class="main"></div>
        <div class="backgroundIcon">
            <DescriptionPicture
                :imageCode="listItem.weather[0].icon"
            ></DescriptionPicture>
        </div>
        <div class="info-section-first">
            <IconeName
                :arrForIterarion='[
                    {
                        icone: "https://img.icons8.com/ios-filled/256/marker.png", 
                        text: city
                    },
                    {
                        icone: "https://img.icons8.com/ios-filled/256/calendar.png",
                        text: getFullDay 
                    },
                    {
                        icone: "https://img.icons8.com/external-kiranshastry-solid-kiranshastry/256/external-watch-interface-kiranshastry-solid-kiranshastry.png",
                        text: `${getFullHour}:00`
                    }
                ]'
            ></IconeName>
        </div>
        <div class="temp">
            <h2>{{ farenheitToCelsius }}° C</h2>
        </div>
        <button 
            v-if="true"
            @click="$emit('deleteItemInUI')"
        >X</button>
    </div>
</template>

<script>
export default {
    emits:['deleteItemInUI'],
    data:()=>({
        temp_c_deg: Number,
        fullHour: String,
        day:String,
        showDelete:false
    }),
    props:{
        city:{
            type:String,
            required:true
        },
        listItem:{
            type:Object,
            required:true
        }
    },
    computed:{
        checkLigth(){
            const hours = Number(this.getFullHour)
            if(hours > 8 && hours < 20){
                return true
            }
            return false
        },
        getFullHour(){
            return this.listItem.dt_txt.split(' ')[1].split(':')[0]
        },
        getFullDay(){
            const [, month, day] = this.listItem.dt_txt.split(' ')[0].split('-')
            return [month, day].join('/')
        },
        farenheitToCelsius(){
            return Math.floor(+this.listItem.main.temp-273.15)
        }
    }
}
</script>

<style scoped>
.parentWether{
    width: 100%;
    height: 150px;
    opacity: 0.59;
    border-radius: 15px;
    padding: 15px;
    font-size: 22px;
    display: flex;
    justify-content: space-between;
    position: relative;
}
.day{
    background: linear-gradient(90deg, #00D2FF -1.21%, #3A7BD5 98.79%);
}
.nigth{
    background: linear-gradient(90deg, #536976 0%, #292E49 100%);
    color: white;


}
.icones{
    width: 20px;
    height: 20px;
}
.backgroundIcon{
    /* z-index: 10; */
    position: absolute;
    top: -60px;
    right: 0;
}





.main {
    z-index: 1;

    position: fixed;
    top: 50%;
    left: 50%;
    height: 1px;
    width: 1px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: -42vw -4vh 0px 0px #fff,25vw -41vh 0px 0px #fff,-20vw 49vh 0px 1px #fff,5vw 40vh 1px 1px #fff,29vw 19vh 1px 0px #fff,-44vw -13vh 0px 0px #fff,46vw 41vh 0px 1px #fff,-3vw -45vh 0px 1px #fff,47vw 35vh 1px 0px #fff,12vw -8vh 1px 0px #fff,-34vw 48vh 1px 1px #fff,32vw 26vh 1px 1px #fff,32vw -41vh 1px 1px #fff,0vw 37vh 1px 1px #fff,34vw -26vh 1px 0px #fff,-14vw -49vh 1px 0px #fff,-12vw 45vh 0px 1px #fff,-44vw -33vh 0px 1px #fff,-13vw 41vh 0px 0px #fff,-36vw -11vh 0px 1px #fff,-23vw -24vh 1px 0px #fff,-38vw -27vh 0px 1px #fff,16vw -19vh 0px 0px #fff,28vw 33vh 1px 0px #fff,-49vw -4vh 0px 0px #fff,16vw 32vh 0px 1px #fff,36vw -18vh 1px 0px #fff,-25vw -30vh 1px 0px #fff,-23vw 24vh 0px 1px #fff,-2vw -35vh 1px 1px #fff,-25vw 9vh 0px 0px #fff,-15vw -34vh 0px 0px #fff,-8vw -19vh 1px 0px #fff,-20vw -20vh 1px 1px #fff,42vw 50vh 0px 1px #fff,-32vw 10vh 1px 0px #fff,-23vw -17vh 0px 0px #fff,44vw 15vh 1px 0px #fff,-40vw 33vh 1px 1px #fff,-43vw 8vh 0px 0px #fff,-48vw -15vh 1px 1px #fff,-24vw 17vh 0px 0px #fff,-31vw 50vh 1px 0px #fff,36vw -38vh 0px 1px #fff,-7vw 48vh 0px 0px #fff,15vw -32vh 0px 0px #fff,29vw -41vh 0px 0px #fff,2vw 37vh 1px 0px #fff,7vw -40vh 1px 1px #fff,15vw 18vh 0px 0px #fff,25vw -13vh 1px 1px #fff,-46vw -12vh 1px 1px #fff,-18vw 22vh 0px 0px #fff,23vw -9vh 1px 0px #fff,50vw 12vh 0px 1px #fff,45vw 2vh 0px 0px #fff,14vw -48vh 1px 0px #fff,23vw 43vh 0px 1px #fff,-40vw 16vh 1px 1px #fff,20vw -31vh 0px 1px #fff,-17vw 44vh 1px 1px #fff,18vw -45vh 0px 0px #fff,33vw -6vh 0px 0px #fff,0vw 7vh 0px 1px #fff,-10vw -18vh 0px 1px #fff,-19vw 5vh 1px 0px #fff,1vw 42vh 0px 0px #fff,22vw 48vh 0px 1px #fff,39vw -8vh 1px 1px #fff,-6vw -42vh 1px 0px #fff,-47vw 34vh 0px 0px #fff,-46vw 19vh 0px 1px #fff,-12vw -32vh 0px 0px #fff,-45vw -38vh 0px 1px #fff,-28vw 18vh 1px 0px #fff,-38vw -46vh 1px 1px #fff,49vw -6vh 1px 1px #fff,-28vw 18vh 1px 1px #fff,10vw -24vh 0px 1px #fff,-5vw -11vh 1px 1px #fff,33vw -8vh 1px 0px #fff,-16vw 17vh 0px 0px #fff,18vw 27vh 0px 1px #fff,-8vw -10vh 1px 1px #fff;
  
  /* stars were too big with the layers above but left the code in case no one cares  -- as in, if noone's just that  one other loner who actually cares    */
  
  box-shadow: 24vw 9vh 1px 0px #fff,12vw -24vh 0px 1px #fff,-45vw -22vh 0px 0px #fff,-37vw -40vh 0px 1px #fff,29vw 19vh 0px 1px #fff,4vw -8vh 0px 1px #fff,-5vw 21vh 1px 1px #fff,-27vw 26vh 1px 1px #fff,-47vw -3vh 1px 1px #fff,-28vw -30vh 0px 1px #fff,-43vw -27vh 0px 1px #fff,4vw 22vh 1px 1px #fff,36vw 23vh 0px 0px #fff,-21vw 24vh 1px 1px #fff,-16vw 2vh 1px 0px #fff,-16vw -6vh 0px 0px #fff,5vw 26vh 0px 0px #fff,-34vw 41vh 0px 0px #fff,1vw 42vh 1px 1px #fff,11vw -13vh 1px 1px #fff,48vw -8vh 1px 0px #fff,22vw -15vh 0px 0px #fff,45vw 49vh 0px 0px #fff,43vw -27vh 1px 1px #fff,20vw -2vh 0px 0px #fff,8vw 22vh 0px 1px #fff,39vw 48vh 1px 1px #fff,-21vw -11vh 0px 1px #fff,-40vw 45vh 0px 1px #fff,11vw -30vh 1px 0px #fff,26vw 30vh 1px 0px #fff,45vw -29vh 0px 1px #fff,-2vw 18vh 0px 0px #fff,-29vw -45vh 1px 0px #fff,-7vw -27vh 1px 1px #fff,42vw 24vh 0px 0px #fff,45vw -48vh 1px 0px #fff,-36vw -18vh 0px 0px #fff,-44vw 13vh 0px 1px #fff,36vw 16vh 0px 1px #fff,40vw 24vh 0px 0px #fff,18vw 11vh 0px 0px #fff,-15vw -23vh 1px 0px #fff,-24vw 48vh 0px 1px #fff,27vw -45vh 1px 0px #fff,-2vw -24vh 0px 1px #fff,-15vw -28vh 0px 0px #fff,-43vw 13vh 1px 0px #fff,7vw 27vh 1px 0px #fff,47vw 5vh 0px 0px #fff,-45vw 15vh 1px 1px #fff,-5vw -28vh 0px 1px #fff,38vw 25vh 1px 1px #fff,-39vw -1vh 1px 0px #fff,5vw 0vh 1px 0px #fff,49vw 13vh 0px 0px #fff,48vw 10vh 0px 1px #fff,19vw -28vh 0px 0px #fff,4vw 7vh 0px 0px #fff,21vw 21vh 1px 1px #fff,-15vw -15vh 0px 1px #fff,-6vw -42vh 1px 0px #fff,-15vw 48vh 1px 1px #fff,-23vw 25vh 1px 1px #fff,-48vw 25vh 0px 1px #fff,-31vw -19vh 0px 1px #fff,4vw 37vh 1px 1px #fff,-43vw 28vh 0px 0px #fff,3vw -25vh 0px 1px #fff,-39vw 14vh 0px 1px #fff,-40vw 31vh 0px 1px #fff,35vw -36vh 1px 1px #fff,16vw 49vh 0px 0px #fff,6vw 39vh 0px 0px #fff,3vw -35vh 0px 1px #fff,-44vw -2vh 1px 0px #fff,-6vw 21vh 1px 0px #fff,48vw 9vh 1px 1px #fff,-43vw 30vh 1px 1px #fff,29vw -12vh 1px 1px #fff,-48vw 13vh 1px 0px #fff,-42vw 32vh 1px 1px #fff,34vw 15vh 1px 1px #fff,29vw -37vh 1px 1px #fff,28vw 2vh 0px 0px #fff;
  animation: zoom 16s alternate infinite; 
}

@keyframes zoom {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.5);
    }
}
.temp{
    z-index: 99 ;
}
button{
    z-index: 100;
    background-color: red;
    position: absolute;
    width: 17px;
    height: 17px;
    color: black;
    font-size: 13px;
    border: none;
    border-radius: 50%;
    right: 4px;
    top: 4px;
    font-weight: 900;
    cursor:no-drop;
}

</style>