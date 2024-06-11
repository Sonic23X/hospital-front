<template>
        <Breadcrumbs main="Form Layout" title="Form Wizard 1"/>
        <div class="container-fluid">
            <div class="row">
                <SimpleWizard/>    
            </div>
        </div>
</template>
<script>
import SimpleWizard from "./SimpleWizard.vue"
export default {
        components:{
                SimpleWizard
        }
}
</script>