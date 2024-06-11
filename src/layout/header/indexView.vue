<template>
    <div class="header-wrapper row m-0">
        <div class="header-logo-wrapper col-auto p-0">
            <sidebar />
        </div>
        <div class="left-side-header col ps-0 d-none d-md-block">
            <!--<searchView />-->
        </div>
        <div class="nav-right col-10 col-sm-6 pull-right right-header p-0">
            <ul class="nav-menus">
                <li>
                    <modeView />
                </li>
                <li class="d-md-none resp-serch-input">
                    <searchInput />
                </li>
                <!--
                <li class="cart-nav onhover-dropdown">
                    <cartView />
                </li>
                <li class="language-nav">
                    <languageView />
                </li>
                <li class="onhover-dropdown">
                    <bookMark />
                </li>
                <li class="onhover-dropdown">
                    <notificationView />
                </li>
                -->
                <li class="maximize">
                    <maximizeView />
                </li>
                <li class="profile-nav onhover-dropdown pe-0 py-0 me-0">
                    <profileView />
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import searchInput from "./searchInput.vue"
import sidebar from "./sidebarView.vue"
import searchView from "./searchView.vue"
import modeView from "./modeView.vue"
import cartView from "./cartView.vue"
import bookMark from "./bookMark.vue"
import notificationView from "./notificationView.vue"
import maximizeView from "./maximizeView.vue"
import profileView from "./profileView.vue"
import languageView from "./languageView.vue"
export default {
    components: {
        sidebar,
        searchView,
        modeView,
        cartView,
        bookMark,
        notificationView,
        maximizeView,
        profileView,
        searchInput,
        languageView
    },
    data() {
        return {
            filtered: false,
        };
    },
    methods: {
        collapseFilter() {
            this.filtered = !this.filtered;
        },
    }
}
</script>