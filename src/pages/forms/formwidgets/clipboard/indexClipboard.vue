<template>
    <Breadcrumbs main="Form Widgets" title="clipboard"/>
      <div class="container-fluid">
            <div class="row">
                <textInput/>
                <clipboardTextarea/>
                <clipboardParagraph/>
                <copyPortion/>
            </div>
      </div>
</template>
<script>
import textInput from "./textInput.vue"
import clipboardTextarea from "./clipboardTextarea.vue"
import clipboardParagraph from "./clipboardParagraph.vue"
import copyPortion from "./copyPortion.vue"
export default {
    components:{
        textInput,
        clipboardTextarea,
        clipboardParagraph,
        copyPortion
    }
}
</script>