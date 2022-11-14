<template>
  <div>
    <header class="pt-2">
      <div class="d-flex container">
        <div class="d-flex me-auto">
          <p class="me-2 mb-0">
            <i class="fa-solid fa-envelope bluefonts me-1"></i>contact@gmail.com
          </p>
          <p class="mb-0">
            <i class="fa-solid fa-phone me-1 bluefonts"></i>+0011223495
          </p>
        </div>
        <div class="d-flex graycolors">
          <nav style="--bs-breadcrumb-divider: '|'" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <i class="fa-brands fa-facebook-f socialmargins"></i>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <i class="fa-brands fa-twitter socialmargins"></i>
              </li>
              <li class="breadcrumb-item">
                <i class="fa-brands fa-youtube socialmargins"></i>
              </li>
              <li class="breadcrumb-item">
                <i class="fa-brands fa-linkedin socialmargins"></i>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <hr />
      <nav class="navbar navbar-expand-lg pt-0 navbar-light">
        <div class="container">
          <router-link to="/" class="navbar-brand">
            <img src="../assets/Images/logo.png" alt="" />
          </router-link>
          

          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="navbar-collapse collapse justify-content-end" id="nav">
            <ul class="navbar-nav">
              <li class="navbar-item">
                
                  <router-link to="/" class="nav-link m-2 links">Home</router-link>
                
              </li>
              <li class="navbar-item">
                
                  <router-link :to="{name:'About',params:{name:'About'}}" class="nav-link m-2 links">About</router-link>
                
              </li>
              <li class="navbar-item">
        
                <router-link :to="{name:'Service',params:{name:'Service'}}" href="#" class="nav-link m-2 links">Services</router-link>
          
              </li>
              <li class="navbar-item">
                <router-link :to="{name:'Project',params:{name:'Project'}}" href="#" class="nav-link m-2 links">Projects</router-link>
              </li>
              <li class="navbar-item">
                <router-link :to="{name:'Contact',params:{name:'Contact'}}" href="#" class="nav-link m-2 links">Contact</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
