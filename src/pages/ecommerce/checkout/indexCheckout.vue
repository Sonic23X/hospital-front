<template>
    <div class="checkout">
           <Breadcrumbs main="Ecommerce" title="Checkout" />
             <div class="container-fluid">
            <div class="card">
              <div class="card-header pb-0">
                <h5>Billing Details</h5>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-xl-6 col-sm-12">
                    <form>
                      <div class="row">
                        <div class="mb-3 col-sm-6">
                          <label for="inputEmail4">First Name</label>
                          <input class="form-control" id="inputEmail4" type="email">
                        </div>
                        <div class="mb-3 col-sm-6">
                          <label for="inputPassword4">Last Name</label>
                          <input class="form-control" id="inputPassword4" type="password">
                        </div>
                      </div>
                      <div class="row">
                        <div class="mb-3 col-sm-6">
                          <label for="inputEmail5">Phone</label>
                          <input class="form-control" id="inputEmail5" type="number">
                        </div>
                        <div class="mb-3 col-sm-6">
                          <label for="inputPassword7">Email Address</label>
                          <input class="form-control" id="inputPassword7" type="password">
                        </div>
                      </div>
                      <div class="mb-3">
                        <label for="inputState">Country</label>
                        <select class="form-control" id="inputState">
                          <option selected="">Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="mb-3">
                        <label for="inputAddress5">Address</label>
                        <input class="form-control" id="inputAddress5" type="text">
                      </div>
                      <div class="mb-3">
                        <label for="inputCity">Town/City</label>
                        <input class="form-control" id="inputCity" type="text">
                      </div>
                      <div class="mb-3">
                        <label for="inputAddress2">State/Country</label>
                        <input class="form-control" id="inputAddress2" type="text">
                      </div>
                      <div class="mb-3">
                        <label for="inputAddress6">Postal Code</label>
                        <input class="form-control" id="inputAddress6" type="text">
                      </div>
                      <div class="mb-3">
                        <div class="form-check">
                          <input class="form-check-input" id="gridCheck" type="checkbox">
                          <label class="form-check-label" for="gridCheck">Check me out</label>
                        </div>
                      </div>
                    </form>
                  </div>
                <checkOut/>
                </div>
              </div>
            </div>
             </div>
    </div>
</template>
<script>
import checkOut from "./checkOut.vue"
export default {
    components:{
        checkOut
    }
}
</script>