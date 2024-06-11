<template>
    <div class="col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                        <div class="col-xl-6 col-md-8 m-auto">
                             <animationBox/>
                        </div>
                    </div>
                  </div>
                </div>
    </div>
</template>
<script>
import animationBox from "./animationBox.vue"
export default {
    components:{
        animationBox
    }
}
</script>