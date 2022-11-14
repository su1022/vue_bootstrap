<template>
  <!-- Start Current Page Section -->
    <section id="currentPage">
        <div class="w-10 currentPages text-white">
            <div class="currentTexts">
                <p class="footertexts">Home<span class="text-white fs-1">.</span><span class="text-white"> {{name}}</span></p>
                <h1>{{name}}</h1>
            </div>
        </div>
    </section>
    <!-- End Current Page Section -->
</template>

<script>
export default {
    data(){
        return{
            name:this.$route.params.name,
        }
    }
}
</script>

<style>

</style>