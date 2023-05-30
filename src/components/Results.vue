<template>
    <div class="flex flex-row items-center gap-4">
        <span class="font-bold text-cyan-950">Your Reaction Time:</span>
        <code class="bg-slate-300 py-[2px] px-1 rounded-md font-black text-slate-950">{{ score }} ms</code>
    </div>
    <span class="font-black text-gray-950 text-lg bg-amber-200 px-2 py-[1px] rounded-md">{{ rank }}</span>
</template>

<script>
export default {
    name: "Results",
    props: [
        "score"
    ],
    data () {
        return {
            rank: null
        }
    },
    mounted () {
        if ( this.score <= 50 ) {
            this.rank = "Lightning Fast"
        } else if ( this.score <= 75 ) {
            this.rank = "Ninja Fingers"
        } else if ( this.score <= 100 ) {
            this.rank = "Rapid Reflexes"
        } else {
            this.rank = "Snail Pace"
        }
    }
};
</script>