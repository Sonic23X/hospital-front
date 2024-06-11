<template>
    <Breadcrumbs main="Ui Kits" title="Avatars"/>
    <div class="container-fluid">
            <div class="user-profile">
              <div class="row">
                  <sizingRatio/>
                  <statusIndicator/>
              </div>
            </div>
    </div>
</template>
<script>
import sizingRatio from "./sizingRatio.vue"
import statusIndicator from "./statusIndicator.vue"
export default {
    components:{
        sizingRatio,
        statusIndicator
    }
}
</script>