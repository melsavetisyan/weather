<template>
    <img class="iconImage" :src='`http://openweathermap.org/img/wn/${imageCode}@2x.png`' alt="">
</template>

<script>
export default {
    props:{
        imageCode:{
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
*{
    user-select: none;
}
.iconImage{
    z-index: 10;
    width: 280px;
    height: 270px;
}
</style>