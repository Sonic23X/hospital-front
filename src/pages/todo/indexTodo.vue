<template>
    <Breadcrumbs main="Apps" title="To-Do"/>
    <div class="container-fluid email-wrap bookmark-wrap todo-wrap">
            <div class="row">
                 <div class="col-xl-3">
                     <todoFilter/>
                 </div>
                <div class="col-xl-9 ">
               <addTask/>
                </div>
            </div>
 </div>
</template>
<script>
import addTask from "./addTask.vue"
import todoFilter from "./todoFilter.vue"
export default {
    components:{
        addTask,
        todoFilter
    },
}
</script>