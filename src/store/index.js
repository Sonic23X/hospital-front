import { createStore } from 'vuex'
import menu from './modules/menu'
import layout from './modules/layout';
import chart from "./modules/chart"
import common from "./modules/common"
import products from "./modules/products"
import chat from "./modules/chat"
import contacts from "./modules/contacts"
import email from "./modules/email"
import masonry from "./modules/masonry"
import job from "./modules/job"
import courses from "./modules/courses"
import todo from "./modules/todo"
import bootstrap from "./modules/bootstrap"
import support from "./modules/support"
import productlist from "./modules/productlist"
import datatable from "./modules/datatable"
import order from "./modules/order"
import kanban from "./modules/kanban"
import creative from "./modules/creative"
import owlcarousel from "./modules/owlcarousel"
import pagination from "./modules/pagination"
import ribbon from "./modules/ribbon"
import hideMenu from "./modules/hideMenu"
import friend from "./modules/friend"
import general from "./modules/general"
import task from "./modules/task"
import dashboard from "./modules/dashboard"
import ecommerce from "./modules/ecommerce"
import faq from "./modules/faq"
import language from "./modules/language"

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    menu,
    layout,
    chart,
    common,
    products,
    chat,
    contacts,
    email,
    masonry,
    job,
    courses,
    todo,
    bootstrap,
    support,
    productlist,
    datatable,
    order,
    kanban,
    creative,
    owlcarousel,
    pagination,
    ribbon,
    hideMenu,
    friend,
    general,
    task,
    dashboard,
    ecommerce,
    faq,
    language
  }
})
