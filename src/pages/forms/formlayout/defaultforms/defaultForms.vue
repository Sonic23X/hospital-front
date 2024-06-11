<template>
    <Breadcrumbs main="Form Layout" title="Default Forms"/>
    <div class="container-fluid">
            <div class="row">
                <defaultView/>
                <megaForm/>
            </div>
    </div>
</template>
<script>
import defaultView from "./defaultView.vue"
import megaForm from "./megaForm.vue"
export default {
    components:{
        defaultView,
        megaForm
    }
}
</script>