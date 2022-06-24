<template>
<div><header-2 />
   <section class="py-5 my-5">
        <div class="container">
            <!-- <h1 class="mb-5">Feedback</h1> -->
            <div class="bg-white shadow rounded-lg d-block d-sm-flex">
                <div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                        <h3 class="mb-4">Feedback Form</h3>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" value="">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control" value="">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control" value="">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Subject</label>
                                    <input type="text" class="form-control" value="">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>Message</label>
                                    <textarea class="form-control" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button class="btn btn-primary">Submit</button>
                            <button class="btn btn-light">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
 </div>
</template>

<script>
import 'https://code.jquery.com/jquery-3.2.1.slim.min.js';
import Header2 from '../components/Header2.vue';
// import 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js';
// import 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js';

export default {
  components: { Header2 },
   name: 'EditProfile',
  mounted() {
    // let externalScript = document.createElement('script')
    // externalScript.setAttribute('src', 'https://code.jquery.com/jquery-3.2.1.slim.min.js')
    // document.head.appendChild(externalScript)
  },
}
</script>

<style scoped>

.box {
    width: 570px;
    height: 600px;
    border: 1px solid black;
    margin: 20px 0;
    border-radius: 10px;
}
.box h2 {
    padding-top: 40px;
    padding-bottom: 10px;
}
.input {
    width: 300px;
    height: 30px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgb(211, 209, 209);
    padding: 24px 24px;
}
.input::placeholder {
  /* color: rgba(87, 87, 86, 0.8); */
  color: #808080;
  /* text-transform:lowercase; */
  letter-spacing: 1.5px;
  font-size: 14px;
}

.box div {
    text-align: left;
    padding-left: 135px;
    padding-top: 10px;
}
.description {
    width: 300px;
    height: 150px;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgb(211, 209, 209);
    padding: 24px 24px;
}
.description::placeholder {
  /* color: rgba(87, 87, 86, 0.8); */
  color: #808080;
  /* text-transform:lowercase; */
  letter-spacing: 1.5px;
  font-size: 14px;
}
.submit {
    /* margin-left: 120px; */
    padding: 5px 25px;
    color: white;
    border: 1px solid white;
    border-radius: 30px;
    background-color: rgb(89, 54, 243);
}
</style>
