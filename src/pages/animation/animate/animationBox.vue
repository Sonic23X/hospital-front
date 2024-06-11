<template>
     <div id="animation-box">
                            <transition appear :enter-active-class="enterClass">
                          <div class="box" :key="show"><div class="card">
                            <div class="animate-widget">  <img class="img-fluid" src="../../../assets/images/banner/3.jpg" alt="">  
                              <div class="text-center p-25">
                                <p class="text-muted mb-0">Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings</p>
                              </div>
                              </div>
                              </div>
                              </div>
                            </transition>
                            </div>
                          
                        <form class="theme-form text-center">
                          <div class="mb-3">
                               <select v-model="enterAnimation" @change="selectAnimate" class="form-select input input--dropdown js-animations text-center text-md-start">
                              <option v-for="(anim, index) in animationList" :value="anim" :key="index">{{ anim }}</option>
                              </select>
                          </div>
                           <button class="js-triggeraNimation btn btn-primary" @click.prevent="selectAnimated(enterAnimation)">Animate it</button>
                        </form>
                        
</template>
<script>
import animationMixin from "@/mixins/animationMixin";
export default {
  name: "VueAnimate",
  mixins: [animationMixin],
 
};
</script>
<style scoped>
/* @import 'animate.css/source/animate.css' */
</style>