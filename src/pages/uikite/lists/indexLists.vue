<template>
     <Breadcrumbs main="Tabs" title="Lists"/>
      <div class="container-fluid">
            <div class="row">
                <defaultList/>
                <flushStyle/>
                <withBadges/>
                <customContent/>
                <javaScriptBehavior/>
                <withIcon/>
                <withImages/>
            </div>
      </div>
</template>
<script>
import defaultList from "./defaultList.vue"
import flushStyle from "./flushStyle.vue"
import withBadges from "./withBadges.vue"
import customContent from "./customContent.vue"
import javaScriptBehavior from "./javaScriptBehavior.vue"
import withIcon from "./withIcon.vue"
import withImages from "./withImages.vue"
export default {
    components:{
        defaultList,
        flushStyle,
        withBadges,
        customContent,
        javaScriptBehavior,
        withIcon,
        withImages
    }
}
</script>