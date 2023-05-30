<template>
    <div class="uppercase text-orange-400 font-mono font-black text-center w-[400px] bg-gray-950 rounded-md py-24 cursor-pointer" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>

<script>
export default {
    name: "Block",
    props: [
        "delay"
    ],
    data () {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },
    mounted () {
        setTimeout( () => {
            this.showBlock = true
            this.startTimer()
        },this.delay)
    },
    methods: {
        startTimer () {
            this.timer = setInterval( () => {
                this.reactionTime += 1
            },1)
        },
        stopTimer () {
            clearInterval( this.timer )
            this.$emit( "stop", this.reactionTime )
        }
    }
}
</script>