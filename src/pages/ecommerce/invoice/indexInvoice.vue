<template>
  <Breadcrumbs main="E-Commerce" title="Invoice" />
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <div class="invoice">
              <div>
                <div>
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="media">
                        <div class="media-left"><img class="media-object img-60"
                            src="../../../assets/images/logo-icon.png" alt=""></div>
                        <div class="media-body m-l-20 text-right">
                          <h4 class="media-heading">Zeta</h4>
                          <p>hello@Zeta.in<br><span>289-335-6503</span></p>
                        </div>
                      </div>

                    </div>
                    <div class="col-sm-6">
                      <div class="text-md-end text-xs-center">
                        <h3>Invoice #<span class="counter">
                            <number class="bold counter" ref="number1" :from="0" :to="2069" :duration="5" :delay="0"
                              easing="Power1.easeOut" />
                          </span></h3>
                        <p>Issued: May<span> 27, 2023</span><br>Payment Due: June <span>27, 2023</span></p>
                      </div>

                    </div>
                  </div>
                </div>
                <hr>
                <div class="row invo-profile">
                  <div class="col-xl-4">
                    <div class="media">
                      <div class="media-left"><img class="media-object rounded-circle img-60"
                          src="../../../assets/images/user/1.jpg" alt=""></div>
                      <div class="media-body m-l-20">
                        <h4 class="media-heading">Johan Deo</h4>
                        <p>JohanDeo@gmail.com<br><span>555-555-5555</span></p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-8">
                    <div class="text-xl-end" id="project">
                      <h6>Project Description</h6>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long
                        established fact that a reader will be distracted by the readable content of a page when looking
                        at its layout.</p>
                    </div>
                  </div>
                </div>
                <invoiceTable />
              </div>
              <div class="col-sm-12 text-center mt-3">
                <button class="btn btn btn-primary me-2" type="button" @click="printWindow()">Print</button>
                <button class="btn btn-secondary" type="button">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import invoiceTable from "./invoiceTable.vue"
export default {
    components:{
        invoiceTable
    },
     methods: {
      printWindow() {
        window.print();
      }
    }
}
</script>