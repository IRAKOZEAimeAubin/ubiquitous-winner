<template>
    <div class="flex flex-row items-center gap-4">
        <span class="font-bold text-cyan-950">Reaction Time</span>
        <code class="bg-slate-300 py-[2px] px-1 rounded-md font-black text-slate-950">{{ score }} ms</code>
    </div>
</template>

<script>
export default {
    name: "Results",
    props: [
        "score"
    ]
};
</script>