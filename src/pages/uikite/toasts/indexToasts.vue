<template>
    <Breadcrumbs main="Ui Kits" title="Toasts"/>
     <div class="container-fluid">
            <div class="row">
                <toastrView/>
                <toastrIcon/>
                <toastrPosition/>
            </div>
     </div>
</template>
<script>
import toastrView from "./toastrView.vue"
import toastrIcon from "./toastrIcon.vue"
import toastrPosition from "./toastrPosition.vue"
export default {
    components:{
        toastrView,
        toastrIcon,
        toastrPosition
    }
}
</script>