<template>
  <div id="sidebar-menu">
    <ul class="sidebar-links custom-scrollbar" id="myDIV" :style="[
      layoutobject.split(' ').includes('horizontal-wrapper') ? layout.settings.layout_type == 'rtl' ? { '  -right': margin + 'px' } : { 'margin-left': margin + 'px' } : { margin: '0px' },
    ]">
      <li class="back-btn">
        <div class="mobile-back text-right">
          <span>Back</span> <i class="fa fa-angle-right pl-2" aria-hidden="true"></i>
        </div>
      </li>
      <li v-for="(menu, index) in menuItems" :key="index" class="sidebar-list">
        <!-- Sub -->
        <label :class="'badge badge-' + menu.badgeType" v-if="menu.badgeType">{{ menu.badgeValue }}</label>
        <a href="javascript:void(0)" :class="{ active: menu.active }" class="sidebar-link sidebar-title"
          v-if="menu.type == 'sub'" @click="setNavActive(menu, index)">
          <vue-feather :type="menu.icon" class="top"></vue-feather>
          <span>
            {{ menu.title }}
          </span>
          <div class="according-menu" v-if="menu.children">
            <i class="pull-right" :class="[menu.active ? 'fa fa-angle-down' : 'fa fa-angle-right']"></i>
          </div>
        </a>
        <!-- Link -->
        <router-link :to="menu.path" class="sidebar-link sidebar-title" v-if="menu.type == 'link'"
          router-link-exact-active exact v-on:click="hidesecondmenu()">
          <vue-feather :type="menu.icon" class="top"></vue-feather>
          <span>
            {{ menu.title }}
          </span>
          <div class="according-menu">
            <i class="pull-right" :class="[menu.active ? 'fa fa-angle-right' : 'fa fa-angle-down']"></i>
          </div>

        </router-link>

        <a :href="menu.path" class="sidebar-link sidebar-title" target="_blank" v-else>

          <vue-feather :type="menu.icon" class="home"></vue-feather>
          <span class="menu1">
            {{ menu.title }}
          </span>
          <div class="according-menu">
            <i class="pull-right" :class="[menu.active ? 'fa fa-angle-down' : 'fa fa-angle-right']"></i>
          </div>

        </a>
        <!-- External Link -->
        <a :href="menu.path" class="sidebar-link sidebar-title" v-if="menu.type == 'extLink'"
          @click="setNavActive(menuItem, index)">
          <vue-feather :type="menu.icon" class="top"></vue-feather>
          <span>
            {{ menu.title }}
          </span>
          <i class="fa fa-angle-right pull-right" v-if="menu.children"></i>
        </a>
      </li>
    </ul>
    <!-- <div class="sidebar-img-section">
      <div class="sidebar-img-content"><img class="img-fluid" src="../../assets/images/side-bar.png" alt="">
        <h4>Need Help ?</h4><a class="txt" href="https://pixelstrap.freshdesk.com/support/home">Raise ticket at
          "support@pixelstrap.com"</a><a class="btn btn-secondary"
          href="https://themeforest.net/user/pixelstrap/portfolio">Buy Now</a>
      </div>
    </div> -->
  </div>
</template>
<script>
import { mapState } from "vuex";
import { layoutClasses } from "../../constants/layout";
export default {
  data() {
    return {
      layoutobj: {},
    };
  },
  computed: {
    ...mapState({
      // sidebarType:(state)=>state.layout.sidebar,
      menuItems: (state) => state.menu.data,
      layout: (state) => state.layout.layout,
      sidebar: (state) => state.layout.sidebarType,
      activeoverlay: (state) => state.menu.activeoverlay,
      togglesidebar: (state) => state.menu.togglesidebar,
      width: (state) => state.menu.width,
      height: (state) => state.menu.height,
      margin: (state) => state.menu.margin,
      menuWidth: (state) => state.menu.menuWidth,
    }),
    sidebarType() {
      return this.$route.query.layout || 'default'
    },
    layoutobject: {
      get: function () {
        return JSON.parse(
          JSON.stringify(
            layoutClasses.find(
              (item) => Object.keys(item).pop() === this.layout.settings.layout
            )
          )
        )[this.layout.settings.layout];
      },
      set: function () {
        this.layoutobj = layoutClasses.find(
          (item) => Object.keys(item).pop() === this.layout.settings.layout
        );
        this.layoutobj = JSON.parse(JSON.stringify(this.layoutobj))[
          this.layout.settings.layout
        ];
        return this.layoutobj;
      },
    },

  },
  watch: {
    sidebarType() {
      console.log('sidebar type:', this.sidebarType)
    },
    width() {
      window.addEventListener("resize", this.handleResize);
      this.handleResize();
      window.addEventListener("scroll", this.handleScroll);
      this.handleScroll();
      if (window.innerWidth < 992) {
        const newlayout = JSON.parse(
          JSON.stringify(this.layoutobject).replace(
            "horizontal-wrapper",
            "compact-wrapper"
          )
        );
        document.querySelector(".page-wrapper").className =
          "page-wrapper " + newlayout;
        this.$store.state.menu.margin = 0;
      } else {
        document.querySelector(".page-wrapper").className =
          "page-wrapper " + this.layoutobject;
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();

    setTimeout(() => {
      const elmnt = document.getElementById("myDIV");
      this.$store.state.menu.menuWidth = elmnt.offsetWidth;
      this.$store.state.menu.menuWidth > window.innerWidth
        ? ((this.$store.state.menu.hideRightArrow = false),
          (this.$store.state.menu.hideLeftArrowRTL = false))
        : ((this.$store.state.menu.hideRightArrow = false),
          (this.$store.state.menu.hideLeftArrowRTL = true));
    }, 500);
    this.layoutobject = layoutClasses.find(
      (item) => Object.keys(item).pop() === this.layout.settings.layout
    );
    this.layoutobject = JSON.parse(JSON.stringify(this.layoutobject))[
      this.layout.settings.layout
    ];
  },
  mounted() {
    console.log('sidebar type:', this.sidebarType)
    this.menuItems.filter((items) => {
      if (items.path === this.$route.path)
        this.$store.dispatch("menu/setActiveRoute", items);
      if (!items.children) return false;
      items.children.filter((subItems) => {
        if (subItems.path === this.$route.path)
          this.$store.dispatch("menu/setActiveRoute", subItems);
        if (!subItems.children) return false;
        subItems.children.filter((subSubItems) => {
          if (subSubItems.path === this.$route.path)
            this.$store.dispatch("menu/setActiveRoute", subSubItems);
        });
      });
    });
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 400) {
        if (
          this.layoutobject.split(" ").pop() === "material-type" ||
          this.layoutobject.split(" ").pop() === "normal-sidebar"
        )
          document.querySelector(".sidebar-main").className =
            "sidebar-main hovered";
      } else {
        if (document.getElementById("sidebar-main"))
          document.querySelector(".sidebar-main").className = "sidebar-main";
      }
    },
    setNavActive(item) {
      this.$store.dispatch("menu/setNavActive", item);
      if (
        this.layoutobject.split(" ").includes("compact-sidebar") &&
        window.innerWidth > 991
      ) {
        if (this.menuItems.some((menuItem) => menuItem.active === true)) {
          this.$store.state.menu.activeoverlay = true;
        } else {
          this.$store.state.menu.activeoverlay = false;
        }
      }
    },
    hidesecondmenu() {
      if (window.innerWidth < 991) {
        (this.$store.state.menu.activeoverlay = false),
          (this.$store.state.menu.togglesidebar = false);
        this.menuItems.filter((menuItem) => {
          menuItem.active = false;
        });
      } else if (this.layoutobject.split(" ").includes("compact-sidebar")) {
        (this.$store.state.menu.activeoverlay = false),
          this.menuItems.filter((menuItem) => {
            menuItem.active = false;
          });
      }
    },
    handleResize() {
      this.$store.state.menu.width = window.innerWidth - 300;
    },
  }
}
</script>