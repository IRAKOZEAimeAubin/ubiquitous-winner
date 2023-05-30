<script setup>
import Block from './components/Block.vue';
import Results from './components/Results.vue';
</script>

<template>
  <div class="flex flex-col gap-4 w-[100%] items-center mt-8">
    <h1 class="text-4xl font-bebas tracking-widest font-bold text-red-600">Reaction Timer</h1>
    <p class="bg-orange-100 px-2 py-1 rounded-md">Click on the <code class="font-bold">PLAY</code> button and wait for a <code class="font-bold">BLACK</code> rectangle to appear, the click on it.</p>
    <button class="uppercase tracking-wider font-semibold text-white bg-green-600 py-1 px-3 rounded-md hover:opacity-80 disabled:opacity-40" @click=" start " :disabled="isPlaying">Play</button>
    <Results v-if="showResults" :score="score"/>
    <Block v-if="isPlaying" :delay="delay" @stop="endGame"/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Block, Results
  },
  data () {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    };
  },
  methods: {
    start () {
      this.delay = Math.floor( Math.random() * 1000 ) + 1000;
      this.isPlaying = true;
      this.showResults = false
    },
    endGame ( reactionTime ) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>
