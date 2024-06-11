<template>
     <Breadcrumbs main="Ui Kits" title="Dropdown"/>
      <div class="container-fluid">
            <div class="row">
                <basicDropdown/>
                <basicColor/>
                <dropdownSplit/>
                <roundedDropdown/>
                <dropdownDivider/>
            </div>
      </div>
</template>
<script>
import basicDropdown from "./basicDropdown.vue"
import basicColor from "./basicColor.vue"
import dropdownSplit from "./dropdownSplit.vue"
import roundedDropdown from "./roundedDropdown.vue"
import dropdownDivider from "./dropdownView.vue"
export default {
    components:{
        basicDropdown,
        basicColor,
        dropdownSplit,
        roundedDropdown,
        dropdownDivider
    }
}
</script>