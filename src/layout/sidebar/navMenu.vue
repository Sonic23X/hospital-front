<template>
  <div id="sidebar-menu">
    <ul class="sidebar-links custom-scrollbar" id="myDIV" :style="[
      layoutobject?.split(' ').includes('horizontal-wrapper') ? layout.settings.layout_type == 'rtl' ? { '  -right': margin + 'px' } : { 'margin-left': margin + 'px' } : { margin: '' },
    ]">
      <li class="back-btn">
        <div class="mobile-back text-right">
          <span>Back</span> <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
        </div>
      </li>
      <li v-for="(menu, index) in menuItems" :key="index" class="sidebar-list">
        <label :class="'badge badge-' + menu.badgeType" v-if="menu.badgeType">{{ menu.badgeValue }}</label>
        <a href="javascript:void(0)" :class="{ active: menu.active }" class="sidebar-link sidebar-title"
          v-if="menu.type == 'sub'" @click="setNavActive(menu, index)">
          <vue-feather :type="menu.icon" class="top"></vue-feather>
          <span>
            {{ $t(menu.title) }}
          </span>
          <div class="according-menu" v-if="menu.children">
            <i class="pull-right" :class="[menu.active ? 'fa fa-angle-down' : 'fa fa-angle-right']"></i>
          </div>
        </a>

        <router-link :to="menu.path" class="sidebar-link sidebar-title" v-if="menu.type == 'link'"
          router-link-exact-active exact v-on:click="hidesecondmenu()">
          <vue-feather :type="menu.icon" class="top"></vue-feather>
          <span>
            {{ $t(menu.title) }}
          </span>
          <i class="fa fa-angle-right pull-right" v-if="menu.children"></i>
        </router-link>

        <a :href="menu.path" class="sidebar-link sidebar-title" v-if="menu.type == 'extLink'"
          @click="setNavActive(menuItem, index)">
          <vue-feather :type="menu.icon" class="top"></vue-feather>
          <span>
            {{ $t(menu.title) }}
          </span>
          <i class="fa fa-angle-right pull-right" v-if="menu.children"></i>
        </a>

        <a :href="menu.path" target="_blank" class="sidebar-link sidebar-title" v-if="menu.type == 'extTabLink'"
          @click="setNavActive(menuItem, index)">
          <vue-feather :type="menu.icon" class="top"></vue-feather>
          <span>
            {{ $t(menu.title) }}
          </span>
          <i class="fa fa-angle-right pull-right" v-if="menu.children"></i>
        </a>

        <ul class="sidebar-submenu" v-if="menu.children" :class="menu.active ? '' : 'd-none'">

          <li v-for="(childrenItem, index) in menu.children" :key="index">

            <a href="javascript:void(0)" v-if="childrenItem.type == 'sub'" @click="setNavActive(childrenItem, index)">
              {{ $t(childrenItem.title) }}
              <label :class="'badge badge-' + childrenItem.badgeType + ' pull-right'" v-if="childrenItem.badgeType">{{
                childrenItem.badgeValue }}</label>
              <i class="fa pull-right mt-1" v-bind:class="[
                childrenItem.active
                  ? 'fa fa-angle-down'
                  : 'fa fa-angle-right',
              ]" v-if="childrenItem.children"></i>
            </a>

            <router-link :to="childrenItem.path" v-if="childrenItem.type == 'link'" router-link-exact-active exact
              v-on:click="hidesecondmenu()">
              {{ $t(childrenItem.title) }}
              <label :class="'badge badge-' + childrenItem.badgeType + ' pull-right'" v-if="childrenItem.badgeType">{{
                childrenItem.badgeValue }}</label>
              <i class="fa fa-angle-right pull-right mt-1" v-if="childrenItem.children"></i>
            </router-link>

            <a :href="childrenItem.path" v-if="childrenItem.type == 'extLink'" class="submenu-title">
              {{ $t(childrenItem.title) }}
              <label :class="'badge badge-' + childrenItem.badgeType + ' pull-right'" v-if="childrenItem.badgeType">{{
                childrenItem.badgeValue }}</label>
              <i class="fa fa-angle-right pull-right mt-1" v-if="childrenItem.children"></i>
            </a>

            <a class="submenu-title" :href="childrenItem.path" target="_blank" v-if="childrenItem.type == 'extTabLink'">
              {{ $t(childrenItem.title) }}
              <label :class="'badge badge-' + childrenItem.badgeType + ' pull-right'" v-if="childrenItem.badgeType">{{
                childrenItem.badgeValue }}</label>
              <i class="fa fa-angle-right pull-right mt-1" v-if="childrenItem.children"></i>
            </a>

            <ul class="nav-sub-childmenu submenu-content" v-if="childrenItem.children"
              :class="{ opensubchild: childrenItem.active }">
              <li v-for="(childrenSubItem, index) in childrenItem.children" :key="index">

                <router-link :to="childrenSubItem.path" v-if="childrenSubItem.type == 'link'" router-link-exact-active
                  exact v-on:click="hidesecondmenu()">
                  {{ $t(childrenSubItem.title) }}
                  <label :class="'badge badge-' + childrenSubItem.badgeType + ' pull-right'
                    " v-if="childrenSubItem.badgeType">{{ childrenSubItem.badgeValue }}</label>
                  <i class="fa fa-angle-right pull-right" v-if="childrenSubItem.children"></i>
                </router-link>

                <router-link :to="childrenSubItem.path" v-if="childrenSubItem.type == 'extLink'" router-link-exact-active>
                  {{ $t(childrenSubItem.title) }}
                  <label :class="'badge badge-' + childrenSubItem.badgeType + ' pull-right'
                    " v-if="childrenSubItem.badgeType">{{ childrenSubItem.badgeValue }}</label>
                  <i class="fa fa-angle-right pull-right" v-if="childrenSubItem.children"></i>
                </router-link>

                <router-link :to="childrenSubItem.path" v-if="childrenSubItem.type == 'extLink'" router-link-exact-active>
                  {{ $t(childrenSubItem.title) }}
                  <label :class="'badge badge-' + childrenSubItem.badgeType + ' pull-right'
                    " v-if="childrenSubItem.badgeType">{{ childrenSubItem.badgeValue }}</label>
                  <i class="fa fa-angle-right pull-right" v-if="childrenSubItem.children"></i>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import navMenu from "@/mixins/navMenu";

export default {
  mixins: [navMenu],

}
</script>