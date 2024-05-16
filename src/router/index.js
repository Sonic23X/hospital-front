import { createRouter, createWebHistory } from 'vue-router'
import BodyView from "../layout/BodyView.vue"
import dashbordView from "../components/dashbord/dashbordView"
import usersView from "../components/dashbord/usersView"
import doctorsView from "../components/dashbord/doctorsView"
import nursesView from "../components/dashbord/nursesView"
import payment_reportView from "../components/dashbord/payment_reportView"
import patient_dischargeView from "../components/dashbord/patient_dischargeView"
import inventoryView from "../components/dashbord/inventoryView"

const routes = [
  {
    path: '/',
    component: BodyView,
    children:[
      {
        path:'/',
        name:"dashbord",
        component:dashbordView,
      }
    ]
  },
  {
    path: '/',
    component: BodyView,
    children:[
      {
        path:'/users',
        name:"users",
        component:usersView,
      }
    ]
  },
  {
    path: '/',
    component: BodyView,
    children:[
      {
        path:'/doctors',
        name:"doctors",
        component:doctorsView,
      }
    ]
  },
  {
    path: '/',
    component: BodyView,
    children:[
      {
        path:'/nurses',
        name:"nurses",
        component:nursesView,
      }
    ]
  },
  {
    path: '/',
    component: BodyView,
    children:[
      {
        path:'/payment_report',
        name:"payment_report",
        component:payment_reportView,
      }
    ]
  },
  {
    path: '/',
    component: BodyView,
    children:[
      {
        path:'/patient_discharge',
        name:"patient_discharge",
        component:patient_dischargeView,
      }
    ]
  },
  {
    path: '/',
    component: BodyView,
    children:[
      {
        path:'/inventory',
        name:"inventory",
        component:inventoryView,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,) => {
  if(to.meta.title)
  document.title = to.meta.title;
  
});

export default router
