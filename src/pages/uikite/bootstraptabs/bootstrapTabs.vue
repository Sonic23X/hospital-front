<template>
     <Breadcrumbs main="Tabs" title="Bootstrap Tabs"/>
      <div class="container-fluid">
            <div class="row">
                <basicTabs/>
                <bottomLeft/>
                <tabsIcon/>
                <tabsRight/>
                <tabsVertical/>
                <pillTabs/>
                <pillIcon/>
                <pillDark/>
                <primaryColor/>
                <secondaryColor/>
                <successColor/>
                <infoColor/>
                <warningColor/>
                <dangerColor/>
            </div>
      </div>
</template>
<script>
import basicTabs from "./basicTabs.vue"
import bottomLeft from "./bottomLeft.vue"
import tabsIcon from "./tabsIcon.vue"
import tabsRight from "./tabsRight.vue"
import tabsVertical from "./tabsVertical.vue"
import pillTabs from "./pillTabs.vue"
import pillIcon from "./pillIcon.vue"
import pillDark from "./pillDark.vue"
import primaryColor from "./primaryColor.vue"
import secondaryColor from "./secondaryColor.vue"
import successColor from "./successColor.vue"
import infoColor from "./infoColor.vue"
import warningColor from "./warningColor.vue"
import dangerColor from "./dangerColor.vue"
export default {
    components:{
        basicTabs,
        bottomLeft,
        tabsIcon,
        tabsRight,
        tabsVertical,
        pillTabs,
        pillIcon,
        pillDark,
        primaryColor,
        secondaryColor,
        successColor,
        infoColor,
        warningColor,
        dangerColor
    }
}
</script>