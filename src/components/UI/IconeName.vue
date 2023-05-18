<template>
    <div 
        v-for="(item, index) in arrForIterarion" class="iconeNameDiv"
        :key="index"
    >
        <img v-if="item.icone" class="icones location" :src="item.icone" alt=""> 
        <h2>{{ item.text }}</h2>
    </div>
</template>

<script>
export default {
    props:{
        arrForIterarion:Array
    }
}
</script>

<style scoped>
*{
    user-select: none;
}
.icones{
    width: 25px;
    height: 25px;
}
.iconeNameDiv{
    display: flex;
    text-align: center;
    gap: 15px;
    font-size: 15px;
}
</style>