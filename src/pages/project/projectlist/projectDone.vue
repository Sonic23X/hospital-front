<template>
     
                            <div class="row">
                              <div class="col-xl-4 col-lg-6" id="#top-home" v-for="(project,index) in doneprojects" :key="index" :class="index < 3 ? 'mb-4' : ''">
                                <div class="project-box">
                                  <span class="badge" :class="'badge-'+project.type">{{ project.badge }}</span>
                                   <span class="badge" :class="'badge-'+project.type2">{{ project.badge }}</span>
                                  <h6>{{ project.title }}</h6>
                                  <div class="media">
                                    <img class="img-20 me-2 rounded-circle" :src='getImgUrl(project.img)' alt="" title="">
                                    <div class="media-body">
                                      <p>{{ project.sites }}</p>
                                    </div>
                                  </div>
                                  <p>{{ project.desc }}</p>
                                  <div class="row details">
                                    <div class="col-6">
                                      <span>Issues </span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'font-'+project.type">{{ project.issue }}</div>
                                    <div class="col-6">
                                      <span>Resolved</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'font-'+project.type">{{ project.resolved }}</div>
                                    <div class="col-6">
                                      <span>Comment</span>
                                    </div>
                                    <div class="col-6 text-primary" :class="'font-'+project.type">{{ project.comment }}</div>
                                  </div>
                                  <div class="customers">
                                    <ul>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img1)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img2)' alt="" title=""></li>
                                      <li class="d-inline-block">
                                        <img class="img-30 rounded-circle" :src='getImgUrl(project.customers_img3)' alt="" title=""></li>
                                      <li class="d-inline-block ms-2">
                                        <p class="f-12">{{project.like}} More</p>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="project-status mt-4">
                                    <div class="media mb-0">
                                      <p>{{project.progress}}%</p>
                                      <div class="media-body text-end">
                                        <span>Done</span>
                                      </div>
                                    </div>
                                    <div class="progress" style="height: 5px">
                                      <div
                                        class="progress-bar-animated progress-bar-striped"
                                        :class="'bg-'+project.type"
                                        role="progressbar"
                                        :style= "{'width': project.progress + '%'}"
                                        aria-valuenow="10"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                         
</template>
<script>
import { mapState } from 'vuex';
export default {
    data(){
      return {
      };
    },
    computed: {
      ...mapState({
        allprojects: state => state.common.allprojects,
        doingprojects: state => state.common.doingprojects,
        doneprojects: state => state.common.doneprojects
      })
    },
    methods:{
      getImgUrl(path) {
        return require('@/assets/images/'+path);
      },
    }
}
</script>