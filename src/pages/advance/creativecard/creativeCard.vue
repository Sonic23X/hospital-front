<template>
<Breadcrumbs main="Bonus Ui" title="Creative Card"/>
     <div class="container-fluid">
            <div class="row">
               <div class="col-sm-12 col-md-6 col-xl-6" v-for="card in creativelist" :key="card">
                <div class="card" :class="card.card" >
                  <div class="card-header " :class="card.header">
                    <h5 :class="card.class">{{card.title}}</h5>
                  </div>
                  <div class="card-body">
                    <p>{{card.desc}}</p>
                  </div>
                </div>
              </div>
            </div>
     </div>
</template>
<script>
import { mapState } from "vuex";
export default {
   computed: {
    ...mapState({
      creativelist:(state)=>state.creative.card,    
    }),
   },
}
</script>