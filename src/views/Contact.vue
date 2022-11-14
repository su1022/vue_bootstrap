<template>
  <CurrentPage></CurrentPage>
  <section class="py-5" id="contactSection">
        <div class="container">
            <div class="row">
                <div class="col-8 mx-auto text-center mb-3">
                    <h1>Stay In Touch</h1>
                    <p class="text-muted">
                        Just say hello or drop us a line. You can manualy send us email on <span class="text-primary">example@mail.com</span>
                    </p>
                </div>
                <div class="col-10 mx-auto">
                    <form action="">
                        <div class="row">
                            <div class="col-lg-6 col-12 my-2">
                                <label for="" class="form-label text-secondary">Name</label>
                                <input type="text" class="form-control rounded-1" placeholder="Name">
                            </div>
                            <div class="col-lg-6 col-12 my-2">
                                <label for="" class="form-label text-secondary">Email</label>
                                <input type="email" class="form-control rounded-1" placeholder="Email">
                            </div>
                            <div class="col-12 my-2">
                                <label for="" class="form-label text-secondary">Subject</label>
                                <input type="text" class="form-control rounded-1" placeholder="Subject">
                            </div>
                            <div class="col-12 my-2">
                                <label for="" class="form-label text-secondary rounded-1">Message</label>
                                <textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div class="col-2 my-2 me-auto d-grid">
                                <input type="submit" class="btn btn-info text-light">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CurrentPage from '../components/CurrentPage'
export default {
  components: { CurrentPage },

}
</script>

<style>

</style>