<template>
  <!-- Start Carousel Section -->
  <div id="homecarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#homecarousel"
        data-bs-slide-to="0"
        class="active"
      ></button>
      <button
        type="button"
        data-bs-target="#homecarousel"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#homecarousel"
        data-bs-slide-to="2"
      ></button>
    </div>
    <div class="carousel-inner text-center text-light">
      <div class="carousel-item active">
        <div class="homeslides slideimg1">
          <p>We're Design Studio Believe In Ideas</p>
          <h1 class="h1">Creative Design</h1>
          <button class="btn btn-outline-light mt-3">Get Started</button>
        </div>
      </div>
      <div class="carousel-item slideimg2">
        <div class="homeslides"></div>
      </div>
      <div class="carousel-item slideimg3">
        <div class="homeslides"></div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#homecarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#homecarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- End Carousel Section -->
</template>

<script>
export default {};
</script>

<style></style>
