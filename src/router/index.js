import { createRouter, createWebHistory } from 'vue-router'

import BodyView from "../layout/BodyView.vue"

import auth from "../auth/auth.vue"

import login from "../auth/login.vue"

import indexEcommerce from "../pages/dashboard/indexEcommerce.vue"


import indexGeneral from "../pages/widget/general/indexGeneral.vue"
import indexCharts from "../pages/widget/chart/indexCharts.vue"


import indexList from "../pages/project/projectlist/indexList.vue"
import createProject from "../pages/project/createProject/createProject.vue"

import indexUsers from "../pages/users/userprofile/indexUsers.vue"
import indexEdit from "../pages/users/editprofile/indexEdit.vue"
import indexCard from "../pages/users/usercard/indexCard.vue"

import indexValidation from "../pages/forms/formcontrols/validation/indexValidation.vue"
import baseInputs from "../pages/forms/formcontrols/baseinput/baseInputs.vue"
import indexCheckbox from "../pages/forms/formcontrols/checkbox&radio/indexCheckbox.vue"
import inputGroups from "../pages/forms/formcontrols/inputgroups/inputGroups.vue"
import megaOptions from "../pages/forms/formcontrols/megaoptions/megaOptions.vue"


import indexTouchspin from "../pages/forms/formwidgets/touchspin/indexTouchspin.vue"
import indexSelect from "../pages/forms/formwidgets/select2/indexSelect.vue"
import indexSwitch from "../pages/forms/formwidgets/switch/indexSwitch.vue"
import indexTypeahead from "../pages/forms/formwidgets/typeahead/indexTypeahead.vue"
import indexClipboard from "../pages/forms/formwidgets/clipboard/indexClipboard.vue"
import timePicker from "../pages/forms/formwidgets/timepicker/timePicker.vue"
import dateTime from "../pages/forms/formwidgets/datetimepicker/baseInputs.vue"
import datePicker from "../pages/forms/formwidgets/datepicker/datePicker"
import dateRange from "../pages/forms/formwidgets/daterange/dateRange.vue"


import defaultForms from "../pages/forms/formlayout/defaultforms/defaultForms.vue"
import formWizard from "../pages/forms/formlayout/formwizard/formWizard.vue"
import formWizard2 from "../pages/forms/formlayout/formwizard/formWizard2/formWizard2.vue"
import formWizard3 from "../pages/forms/formlayout/formwizard/formWizard3/formWizard3.vue"


import indexScrollable from "../pages/advance/scrollable/indexScrollable.vue"
import tree_View from "../pages/advance/treeview/tree_View.vue"
import indexDropzone from "../pages/advance/dropzone/indexDropzone.vue"
import indexTour from "../pages/advance/tour/indexTour.vue"
import indexSweetalert from "../pages/advance/sweetalert/indexSweetalert.vue"
import indexRibbons from "../pages/advance/ribbons/indexRibbons.vue"
import indexPagination from "../pages/advance/pagination/indexPagination.vue"
import indexBreadcrumb from "../pages/advance/breadcrumb/indexBreadcrumb.vue"
import indexSteps from "../pages/advance/steps/indexSteps.vue"
import rangeSlider from "../pages/advance/rangeslider/rangeSlider.vue"
import imageCropper from "../pages/advance/imagecropper/imageCropper.vue"
import indexSticky from "../pages/advance/sticky/indexSticky.vue"
import basicCard from "../pages/advance/basiccard/basicCard.vue"
import creativeCard from "../pages/advance/creativecard/creativeCard.vue"
import tabbedCard from "../pages/advance/tabbedcard/tabbedCard.vue"
import draggableCard from "../pages/advance/draggablecard/draggableCard.vue"
import indexTimeline1 from "../pages/advance/trimeline1/indexTimeline1.vue"
import owlCarousel from "../pages/advance/owlcarousel/owlCarousel.vue"
import animatedModel from "../pages/advance/animatedmodel/animatedModel.vue"
import indexRating from "../pages/advance/rating/indexRating"
import bootstrapNotify from "../pages/advance/bootstrapnotify/bootstrapNotify.vue"

import indexAnimate from "../pages/animation/animate/indexAnimate.vue"
import indexAos from "../pages/animation/aos/indexAos.vue"


import flagIcons from "../pages/icons/flagicons/flagIcons.vue" 
import fontAwesome from "../pages/icons/fontawesome/fontAwesome.vue"
import icoIcon from "../pages/icons/icoIcon/icoIcon.vue"
import themifyIcon from "../pages/icons/themifyicon/themifyIcon.vue"
import featherIcons from "../pages/icons/feathericons/featherIcons.vue"
import whetherIcon from "../pages/icons/whethericon/whetherIcon.vue"

import apexChart from "../pages/charts/apexchart/apexChart.vue"
import googleChart from "../pages/charts/google/googleChart.vue"
import indexChartist from "../pages/charts/Chartist/indexChartist.vue"
import chartJSChart from "../pages/charts/chartJS/chartJSChart.vue"

import basicTables from "../pages/tables/bootstrap/basictable/basicTables.vue"
import tableComponents from "../pages/tables/bootstrap/tablecomponents/tableComponents.vue"

import basicInit from "../pages/tables/datatable/basicinit/basicInit.vue"

import indexProduct from "../pages/ecommerce/product/indexProduct.vue"
import chartView from "../pages/ecommerce/chartView.vue"
import indexCheckout from "../pages/ecommerce/checkout/indexCheckout.vue"
import index_payment from "../pages/ecommerce/paymentdetails/index_payment.vue"
import indexInvoice from "../pages/ecommerce/invoice/indexInvoice.vue"
import wishList from "../pages/ecommerce/wishList.vue"
import indexPricing from "../pages/ecommerce/pricing/indexPricing.vue"
import indexView from "../pages/ecommerce/productpage/indexView.vue"
import productList from "../pages/ecommerce/productlist/productList.vue"
import orderHistory from "../pages/ecommerce/orderhistory/orderHistory.vue"
import productForm from "../pages/ecommerce/new/productForm.vue"

import SalesTable from "../pages/sales/admin/list/index.vue"
import SalesDetails from "../pages/sales/admin/details/index.vue"
import SalesPointView from "../pages/sales/salesView/index.vue"

import indexEvents from "../pages/events/list/index.vue"
import createEvent from "../pages/events/create/index.vue"

import indexVisits from "../pages/visits/index/index.vue"
import createVisit from "../pages/visits/create/index.vue"

import indexPatients from "../pages/patients/list/index.vue"
import detailsPatient from "../pages/patients/details/index.vue"


const routes = [
  {
    path:"/",
    component:BodyView,
    children: [
      {
        path: '',
        name: 'defaultRoot',
        component: indexEcommerce,
        meta: {
          title: 'Hospital - inicio',
        }
      },
    ]
  },
  {
    path:"/auth",
    component: auth,
    children:[
      {
        path:"login",
        name:"login",
        component:login,
         meta: {
          title: 'Hospital - login',
        }
      }
    ]
  },
  {
    path: '/inventary',
    component: BodyView,
    children: [
      {
        path:"",
        name:"Hospital - inventario",
        component: productList,
        meta: {
          title: 'Hospital - inventario',
        }
      },
      {
        path: "add",
        name: "Hospital - agregar producto",
        component: productForm,
        meta: {
          title: 'Hospital - agregar producto',
        }
      },
      {
        path:"details/:id",
        name:"productPage",
        component:indexView,
        meta: {
          title: 'Hospital - detalles',
        }
      },
    ]
  },
  {
    path:"/sales",
    component:BodyView,
    children:[
      {
        path:"",
        name:"Hospital - Ventas",
        component: SalesTable,
        meta: {
          title: 'Hospital - Ventas',
        }
      },
      {
        path:"details/:id",
        name:"salesDetails",
        component: SalesDetails,
        meta: {
          title: 'Hospital - Detalles de venta',
        }
      },
      {
        path: "checkout",
        name: "salesPointView",
        component: SalesPointView,
        meta: {
          title: 'Ventas',
        }
      }
    ],
  },
  {
    path:"/widgets",
    component:BodyView,
    children:[
      { 
        path:"general",
        name:"General",
        component:indexGeneral,
        meta: {
          title: 'Widgets General | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"chart",
        name:"charts",
        component:indexCharts,
        meta: {
          title: 'Widgets Chart | Zeta - Premium Vue Admin Template',
        }
      }
      ]
  },
  {
    path:"/project",
    component:BodyView,
    children:[
      {
        path:"project-list",
        name:"projectlist",
        component:indexList,
        meta: {
          title: 'Project List| Zeta - Premium Vue Admin Template',
        }
      } ,
      {
        path:"create-Project",
        name:"createProject",
        component:createProject,
        meta: {
          title: 'Create Project| Zeta - Premium Vue Admin Template',
        }
      },
    ]
  },
  {
     path:"/users",
     component:BodyView,
     children:[
       {
         path:"profile",
         name:"users",
         component:indexUsers,
         meta: {
          title: 'User Profile| Zeta - Premium Vue Admin Template',
        }
       },
       {
         path:"edit",
         name:"editprofile",
         component:indexEdit,
         meta: {
          title: 'User Edit| Zeta - Premium Vue Admin Template',
        }
       },
       {
         path:"cards",
         name:"usercard",
         component:indexCard,
         meta: {
          title: 'User Cards| Zeta - Premium Vue Admin Template',
        }
       }
     ]
  },
  {
    path:"/form",
    component:BodyView,
    children:[
      {
        path:"validation",
        name:"Validation",
        component:indexValidation,
        meta: {
          title: 'Form Controls Form Validation| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"inputs",
        name:"baseInputs",
        component:baseInputs,
        meta: {
          title: 'Form Controls Base Input| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"checkbox-radio",
        name:"indexCheckbox",
        component:indexCheckbox,
        meta: {
          title: 'Form Controls Checkbox & Radio| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"input-groups",
        name:"inputGroups",
        component:inputGroups,
        meta: {
          title: 'Form Controls Input Groups| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"mega-options",
        name:"megaOptions",
        component:megaOptions,
        meta: {
          title: 'Form Controls Mega Options| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"touchspin",
        name:"indexTouchspin",
        component:indexTouchspin,
        meta: {
          title: 'Form Widgets Touchspin| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"select2",
        name:"indexSelect",
        component:indexSelect,
        meta: {
          title: 'Form Widgets Select| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"switch",
        name:"indexSwitch",
        component:indexSwitch,
        meta: {
          title: 'Form Widgets Switch| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"typeahead",
        name:"indexTypeahead",
        component:indexTypeahead,
        meta: {
          title: 'Form Widgets Typeahead| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"clipboard",
        name:"indexClipboard",
        component:indexClipboard,
        meta: {
          title: 'Form Widgets Clipboard| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"default",
        name:"defaultForms",
        component:defaultForms,
        meta: {
          title: ' Defult Form| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"timepicker",
        name:"timePicker",
        component:timePicker,
        meta: {
          title: ' Timepicker| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"date-time",
        name:"dateTime",
        component:dateTime,
        meta: {
          title: ' Datepicker Timepicker| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"datepicker",
        name:"datePicker",
        component:datePicker,
        meta: {
          title: ' Datepicker| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"date-range",
        name:"dateRange",
        component:dateRange,
        meta: {
          title: ' Datepicker Rangpicker| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"form-wizard",
        name:"formWizard",
        component:formWizard,
        meta: {
          title: 'Form Layout Form Wizard 1| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"form-wizard2",
        name:"formWizard2",
        component:formWizard2,
        meta: {
          title: 'Form Layout Form Wizard 2| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"form-wizard3",
        name:"formWizard3",
        component:formWizard3,
        meta: {
          title: 'Form Layout Form Wizard 3| Zeta - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
      path:"/advance",
      component:BodyView,
      children:[
        {
          path:"scrollable",
          name:"indexScrollable",
          component:indexScrollable,
          meta: {
            title: 'Bonus UI  Scrollable | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"tree",
          name:"treeView",
          component:tree_View,
          meta: {
            title: 'Bonus UI  Tree | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"bootstap-notify",
          name:"bootstrapNotify",
          component:bootstrapNotify,
          meta: {
            title: 'Bonus UI  Bootstrap Notify | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"dropzone",
          name:"indexDropzone",
          component:indexDropzone,
          meta: {
            title: 'Bonus UI  Dropzone | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"tour",
          name:"indexTour",
          component:indexTour,
          meta: {
            title: 'Bonus UI  Tour | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"sweetalert",
          name:"indexSweetalert",
          component:indexSweetalert,
          meta: {
            title: 'Bonus UI  SweetAlert | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"ribbons",
          name:"indexRibbons",
          component:indexRibbons,
          meta: {
            title: 'Bonus UI  Ribbons | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"pagination",
          name:"indexPagination",
          component:indexPagination,
          meta: {
            title: 'Bonus UI  Pagenation | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"breadcrumb",
          name:"indexBreadcrumb",
          component:indexBreadcrumb,
          meta: {
            title: 'Bonus UI  Breadcrumb | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"steps",
          name:"indexSteps",
          component:indexSteps,
          meta: {
            title: 'Bonus UI  Steps | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"range-slider",
          name:"rangeSlider",
          component:rangeSlider,
          meta: {
            title: 'Bonus UI  Range | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"image-cropper",
          name:"imageCropper",
          component:imageCropper,
          meta: {
            title: 'Bonus UI  imageCropper | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"sticky",
          name:"indexSticky",
          component:indexSticky,
          meta: {
            title: 'Bonus UI  Sticky | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"basic-card",
          name:"basicCard",
          component:basicCard,
          meta: {
            title: 'Bonus UI  Basic Card | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"creative-card",
          name:"creativeCard",
          component:creativeCard,
          meta: {
            title: 'Bonus UI  Creative Card | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"tabbed-card",
          name:"tabbedCard",
          component:tabbedCard,
          meta: {
            title: 'Bonus UI  Tabbed Card | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"draggable-card",
          name:"draggableCard",
          component:draggableCard,
          meta: {
            title: 'Bonus UI  Draggable Card | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"timeline",
          name:"Timeline1",
          component:indexTimeline1,
          meta: {
            title: 'Bonus UI  Timeline | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"animated-modal",
          name:"animatedModel",
          component:animatedModel,
          meta: {
            title: 'Bonus UI  Animated Modal | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"rating",
          name:"indexRating",
          component:indexRating,
          meta: {
            title: 'Bonus UI  Rating | Zeta - Premium Vue Admin Template',
          }
        },
        {
          path:"owl-carousel",
          name:"owlCarousel",
          component:owlCarousel,
          meta: {
            title: 'Bonus UI  Owl Carousel | Zeta - Premium Vue Admin Template',
          }
        }
      ]
  },
  {
    path:"/animation",
    component:BodyView,
    children:[
      {
        path:"animate",
        name:"indexAnimate",
        component:indexAnimate,
        meta: {
          title: 'Animate | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"aos-animation",
        name:"indexAos",
        component:indexAos,
        meta: {
          title: 'Aos Animation | Zeta - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path:"/icons",
    component:BodyView,
    children:[
      {
        path:"flag",
        name:"flagIcons",
        component:flagIcons,
        meta: {
          title: 'Icons Flag | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"fontawesome",
        name:"fontAwesome",
        component:fontAwesome,
        meta: {
          title: 'Icons Fontawesome | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"ico",
        name:"icoIcon",
        component:icoIcon,
        meta: {
          title: 'Icons Icoicon | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"themify",
        name:"themifyIcon",
        component:themifyIcon,
        meta: {
          title: 'Icons Themify | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"feather_icon",
        name:"featherIcons",
        component:featherIcons,
        meta: {
          title: 'Icons Feather | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"whether",
        name:"whetherIcon",
        component:whetherIcon,
        meta: {
          title: 'Icons Whether | Zeta - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path:"/visits",
    component:BodyView,
    children:[
      {
        path:"",
        name:"visits",
        component: indexVisits,
        meta: {
          title: 'Hospital - Visitas',
        }
      },
      {
        path:"create",
        name:"visitsCreate",
        component: createVisit,
        meta: {
          title: 'Hospital - Nueva visita',
        }
      },
    ]
  },
  {
    path:"/events",
    component: BodyView,
    children:[
      {
        path:"",
        name:"events",
        component: indexEvents,
        meta: {
          title: 'Hospital - Citas',
        }
      },
      {
        path:"create",
        name:"eventsCreate",
        component: createEvent,
        meta: {
          title: 'Hospital - Nueva cita',
        }
      }
    ]
  },
  {
    path:"/patients",
    component: BodyView,
    children:[
      {
        path:"",
        name:"patientsList",
        component: indexPatients,
        meta: {
          title: 'Hospital - Pacientes',
        }
      },
      {
        path:"details/:id",
        name:"patientsDetails",
        component: detailsPatient,
        meta: {
          title: 'Hospital - Expediente',
        }
      }
    ]
  },

  {
     path:"/chart",
     component:BodyView,
     children:[

      {
        path:"apexChart",
        name:"apexChart",
        component:apexChart,
        meta: {
          title: 'Chart Apex Chart| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"google",
        name:"googleChart",
        component:googleChart,
        meta: {
          title: 'Chart Google Chart| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"chartist",
        name:"indexChartist",
        component:indexChartist,
        meta: {
          title: 'Chart Chartist Chart| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"chartJS",
        name:"chartJSChart",
        component:chartJSChart
      }
     ]
  },
  {
    path:"/table",
    component:BodyView,
    children:[
      {
        path:"basic",
        name:"basicTables",
        component:basicTables,
        meta: {
          title: 'Table Bootstrap Table| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"/table-components",
        name:"tableComponents",
        component:tableComponents,
        meta: {
          title: 'Table Table Components| Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"/datatable-basic",
        name:"basicInit",
        component:basicInit,
        meta: {
          title: 'Table Basic Init| Zeta - Premium Vue Admin Template',
        }
      }
    ]
  },
  {
    path:"/ecommerce",
    component:BodyView,
    children:[
      {
        path:"indexProduct",
        name:"product",
        component:indexProduct,
        meta: {
          title: 'Product | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"cartView",
        name:"cart",
        component:chartView,
        meta: {
          title: 'Cart | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"checkout",
        name:"checkout",
        component:indexCheckout,
        meta: {
          title: 'Checkout | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"payment/details",
        name:"paymentdetils",
        component:index_payment,
        meta: {
          title: 'Payment Detail | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"invoiceView",
        name:"invoice",
        component:indexInvoice,
        meta: {
          title: 'Invoice | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"wishlist",
        name:"wishList",
        component:wishList,
        meta: {
          title: 'Wish List | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"pricing",
        name:"Pricing",
        component:indexPricing,
        meta: {
          title: 'Pricing | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"productlist",
        name:"productList",
        component:productList,
        meta: {
          title: 'Product list | Zeta - Premium Vue Admin Template',
        }
      },
      {
        path:"order/history",
        name:"orderHistory",
        component:orderHistory,
        meta: {
          title: 'Order History | Zeta - Premium Vue Admin Template',
        }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(''),
  routes,
  linkExactActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  if(to.meta.title)
  document.title = to.meta.title;
  const  path = ['/auth/login','/auth/register'];
  if (path.includes(to.path) || localStorage.getItem('user')  ){
    return next();
  }
  next('/auth/login');
});


export default router
