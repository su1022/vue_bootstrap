<template>
  <div>
      <!-- Start Portfolio Section -->
    <section id="portfolioSection" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <p class="text-muted">Portfolio</p>
                </div>
                <div class="col-6">
                    <h2>Our Lastest Project</h2>
                </div>
                <div class="col-xl-2 col-md-3 col-5 ms-auto">
                    <router-link :to="{name:'Project',params:{name:'Project'}}" href="#" class="btn btn-outline-info">Browse Project <i class="fa-solid fa-arrow-right"></i></router-link>
                </div>
                <div class="col-12 py-2 d-flex flex-wrap justify-content-center">
                    <div class="portfolioimgs">

                    </div>
                    <div class="portfolioimgs">

                    </div>
                    <div class="portfolioimgs">

                    </div>
                    <div class="portfolioimgs">

                    </div>
                    <div class="portfolioimgs">

                    </div>
                    <div class="portfolioimgs">

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Portfolio Section -->
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>