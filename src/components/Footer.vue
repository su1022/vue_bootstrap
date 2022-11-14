<template>
  <!-- Start Footer Section -->
  <footer id="footer" class="py-5 text-light">
    <div class="container">
      <div class="row border-bottom border-secondary">
        <div class="col-12 col-md-6 col-lg-3 my-3">
          <img src="../assets/Images/logo.png" alt="" />
        </div>
        <div class="col-12 col-md-6 col-lg-3 my-3">
          <p class="fs-5">Contact Information</p>
          <p class="footertexts">
            301 The Greenhouse, Custard Factory,London, E2 8DY.
          </p>
          <p class="footertexts">Email: example@mail.com</p>
          <p class="footertexts">Phone: +00 112323980</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3 my-3">
          <p class="fs-5">Company</p>
          <p class="footertexts">Carrer</p>
          <p class="footertexts">Resources</p>
          <p class="footertexts">News & Feed</p>
        </div>
        <div class="col-12 col-md-6 col-lg-3 my-3">
          <p class="fs-5">Newsletter</p>
          <form action="">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Email"
            />
            <button class="btn btn-info mt-2">Submit</button>
          </form>
        </div>
      </div>
      <div class="row py-3">
        <div class="col-lg-4 col-6 me-auto">
          <p class="footertexts">
            Copyright <span id="year"></span>. All Right Reserved.
          </p>
        </div>
        <div class="col-lg-4 col-6 d-flex justify-content-end">
          <div class="footericons m-1">
            <i class="fa-brands fa-facebook-f"></i>
          </div>
          <div class="footericons m-1">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div class="footericons m-1">
            <i class="fa-brands fa-youtube"></i>
          </div>
          <div class="footericons m-1">
            <i class="fa-brands fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
    <a href="#homecarousel" class="btn footericons footerups d-none">
      <i class="fa-solid fa-angle-up"></i>
    </a>
  </footer>
  <!-- End Footer Section -->
</template>

<script>
export default {};
</script>

<style></style>
