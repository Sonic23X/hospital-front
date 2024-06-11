<template>
  <div class="notification-box">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <g>
          <path d="M8.54248 9.21777H15.3975" stroke="#130F26" stroke-width="1.5" stroke-linecap="round"
            stroke-linejoin="round"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M11.9702 2.5C5.58324 2.5 4.50424 3.432 4.50424 10.929C4.50424 19.322 4.34724 21.5 5.94324 21.5C7.53824 21.5 10.1432 17.816 11.9702 17.816C13.7972 17.816 16.4022 21.5 17.9972 21.5C19.5932 21.5 19.4362 19.322 19.4362 10.929C19.4362 3.432 18.3572 2.5 11.9702 2.5Z"
            stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </g>
    </svg>
  </div>
  <div class="onhover-show-div bookmark-flip" :class="bookmarkSearchBox ? 'active' : ''">
    <div class="flip-card">
      <div class="flip-card-inner" :class="bookmarkSearchBox ? 'flipped' : ''">
        <div class="front dropdown-title">
          <h3 class="mb-2">Bookmark</h3>
          <ul class="bookmark-dropdown pb-0">
            <li class="custom-scrollbar">
              <div class="row">
                <div class="col-4 text-center" v-for="(menuItem, index) in bookmarkItems.slice(0, 8)" :key="index">
                  <div class="bookmark-content">
                    <div class="bookmark-icon">
                      <vue-feather :type="menuItem.icon"></vue-feather>
                    </div>
                    <h5 class="mt-2"> <router-link :to="{ path: menuItem.path }" class="realname">{{ menuItem.title
                    }}</router-link></h5>
                  </div>
                </div>
              </div>
            </li>
            <li class="text-center">
              <a class="flip-btn btn btn-primary" id="flip-btn" href="javascript:void(0)" @click="openbookmark"> Add New
                Bookmark</a>
            </li>
          </ul>
        </div>
        <div class="back dropdown-title">
          <ul>
            <li>
              <div class="bookmark-dropdown flip-back-content">
                <input type="text" placeholder="search..." v-on:keyup="searchTerm" v-model="terms" />
              </div>
              <div class="bookmark-search custom-scrollbar"
                :class="searchMenuItems.length ? 'Typeahead-menu is-open' : 'Typeahead-menu'"
                v-if="searchMenuItems.length">
                <div class="ProfileCard u-cf" v-for="(menuItem, index) in searchMenuItems.slice(0, 8)" :key="index">
                  <div class="ProfileCard-avatar header-search">
                    <vue-feather :type="menuItem.icon"></vue-feather>
                  </div>
                  <div class="ProfileCard-details">
                    <div class="ProfileCard-realName">
                      <span @click="removeFix()" style="float:left">
                        <router-link :to="{ path: menuItem.path }" class="realname">{{ menuItem.title }}</router-link>
                      </span>
                      <span class="float-right"><a href="JavaScript:void(0);" @click="addToBookmark(menuItem)"><i
                            class="fa fa-star-o f-18 bookmark-search f-right"
                            :class="menuItem.bookmark ? 'text-warning' : ''"></i></a></span>
                    </div>
                  </div>
                </div>
              </div>
              <div :class="bookmarkSearchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu'">
                <div class="tt-dataset tt-dataset-0">
                  <div class="EmptyMessage">
                    Your search turned up 0 results. Opps There are no result found.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href="javascript:void(0)" class="d-block flip-back f-w-700" id="flip-back" @click="openbookmark"> Back
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      filtered: false,
      terms: '',
      bookmarkSearchBox: false,
      bookmarkSearchResult: false,
      bookmarkSearchResultEmpty: false,
      bookmarkItems: [],
    }
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.data,
      searchMenuItems: (state) => state.menu.searchData,
    }),
  },
  watch: {
    searchMenuItems: function () {
      this.terms ? this.addFix() : this.removeFix();
      if (!this.searchMenuItems.length) this.bookmarkSearchResultEmpty = true;
      else this.bookmarkSearchResultEmpty = false;
    },
  },
  mounted() {
    this.menuItems.filter((items) => {
      if (items.bookmark) {
        this.bookmarkItems.push(items);
      }
    });
  },
  methods: {
    collapseFilter() {
      this.filtered = !this.filtered;
    },
    openbookmark() {
      this.bookmarkSearchBox = !this.bookmarkSearchBox;
      if (!this.bookmarkSearchBox) this.removeFix();
    },
    searchTerm: function () {
      this.addFix();
      this.$store.dispatch('menu/searchTerm', this.terms);
    },
    addFix() {
      this.bookmarkSearchResult = true;
    },
    removeFix() {
      this.bookmarkSearchResult = false;
      this.text = '';
    },
    addToBookmark(items) {
      const index = this.bookmarkItems.indexOf(items);
      if (index === -1 && !items.bookmark) {
        items.bookmark = true;
        this.bookmarkItems.push(items);
        this.text = '';
      } else {
        this.bookmarkItems.splice(index, 1);
        items.bookmark = false;
      }
    },
  }
}
</script>