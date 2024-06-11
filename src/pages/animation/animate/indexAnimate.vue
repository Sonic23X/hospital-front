<template>
     <Breadcrumbs main="Animation" title="Animate"/>
      <div class="container-fluid">
            <div class="row">
                 <animateWidget/>
                 <animateOption/>
            </div>
      </div>
</template>
<script>
import animateWidget from "./animateWidget.vue"
import animateOption from "./animateOption.vue"
export default {
     components:{
          animateWidget,
          animateOption
     }
}
</script>