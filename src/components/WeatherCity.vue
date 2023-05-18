<template>
    <div>
        <SwipeComponent
            :city="city"
            :list="arrOfArrs"
            @deleteItemInSwiper="$emit('deleteItemInWeather', city)"
        ></SwipeComponent>
    </div>
</template>

<script>
export default {
    emits:['deleteItemInWeather'],
    props:{
        city:{
            type: String,
            required:true
        },
        list:{
            type:Array,
            required:true
        }
    },

    watch:{
        // list:{
        //     function(newVal, oldVal) { // watch it
        //         console.log('Prop changed: ', newVal, ' | was: ', oldVal)    
        //     }
        // } 
    },
    mounted() {
        console.log()
    },
    computed:{
        arrOfArrs(){
            return Array.from(
                { length: Math.ceil(this.list.length / 8) },
                (_, index) => this.list.slice(index * 8, index * 8 + 8)
            )
            // console.log(newArray);
            //  newArray
        }
    }
}
</script>

<style>

</style>