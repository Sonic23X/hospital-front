<template>
    <Breadcrumbs main="Apps" title="Contacts" />
    <div class="container-fluid">
            <div class="email-wrap bookmark-wrap">
              <div class="row">
                  <myContact/>
              </div>
            </div>
    </div>
</template>
<script>
import myContact from "./myContact.vue"
export default {
    components:{
        myContact
    }
}
</script>