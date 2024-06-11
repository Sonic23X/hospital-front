<template>
     <div class="col-sm-12">
                <div class="card">
                  <div class="card-header pb-0">
                    <h5>Show Notification</h5>
                  </div>
                  <div class="card-body">
                    

                      <button class="btn btn-primary " type="button" @click="info" variant="info">Info me!</button>

                      <button class="btn btn-success " type="button" @click="success" variant="success">Success me!</button>

                      <button class="btn btn-warning " type="button" @click="warning" variant="success"> Warning me!</button>

                      <button class="btn btn-danger " type="button" @click="error" variant="danger">Error me!</button>
                      
                  </div>
                </div>
              </div>
</template>
<script>
export default {
    components:{
        
    },
    methods:{
         primary() {
        this.$toast.show(' New order has been placed ', { theme: 'outline',position: 'bottom-left', type: 'default', duration: 2000 });
      },
       warning() {
        this.$toast.show(' New order has been placed ', { theme: 'outline',position: 'bottom-left', type: 'warning', duration: 2000 });
      },
        success() {
        this.$toast.show(' New order has been placed ', { theme: 'outline',position: 'bottom-left', type: 'success', duration: 2000 });
      },
      info() {
        this.$toast.show(' New order has been placed ', { theme: 'outline',position: 'bottom-left', type: 'info', duration: 2000 });
      },
      error() {
        this.$toast.show(' New order has been placed ', { theme: 'outline',position: 'bottom-left', type: 'error', duration: 2000 });
      },
    }
}
</script>