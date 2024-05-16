<template>
    <div class="input-group"><span class="input-group-text" id="basic-addon1">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g> 
                    <g> 
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2753 2.71436C16.0029 2.71436 19.8363 6.54674 19.8363 11.2753C19.8363 16.0039 16.0029 19.8363 11.2753 19.8363C6.54674 19.8363 2.71436 16.0039 2.71436 11.2753C2.71436 6.54674 6.54674 2.71436 11.2753 2.71436Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8987 18.4878C20.6778 18.4878 21.3092 19.1202 21.3092 19.8983C21.3092 20.6783 20.6778 21.3097 19.8987 21.3097C19.1197 21.3097 18.4873 20.6783 18.4873 19.8983C18.4873 19.1202 19.1197 18.4878 19.8987 18.4878Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </svg></span>
            <input
            class=" Typeahead-input form-control "
            type="text"
            :class="filtered?'open':''"
            v-on:keyup="searchterm"
            v-model="terms"
            placeholder="Buscar .."
            title=""
            autofocus
          />
            </div>
             <div
          :class="searchResult ? 'Typeahead-menu is-open' : 'Typeahead-menu'" v-if="menuItems.length">
          <div class="ProfileCard u-cf" v-for="(menuItem, index) in menuItems.slice(0, 8)" :key="index" >
            <div class="ProfileCard-avatar header-search">
              <vue-feather :type="menuItem.icon"></vue-feather>
            </div>
            <div class="ProfileCard-details ">
              <div class="ProfileCard-realName">
                <span @click="removeFix()"
                  ><router-link :to="{ path: menuItem.path }" class="realname" >{{ menuItem.title }}</router-link ></span>
              </div>
            </div>
          </div>
        </div>
        <div :class="searchResultEmpty ? 'Typeahead-menu is-open' : 'Typeahead-menu' " >
          <div class="tt-dataset tt-dataset-0">
            <div class="EmptyMessage">
              Your search turned up 0 results. Opps There are no result found.
            </div>
          </div>
        </div>
            
</template>
<script>
  var body = document.getElementsByTagName('body')[0];
  import { mapState } from 'vuex';
  export default {
    name: 'SearchBar',
    data () {
      return {
        filtered: false,
        terms: '',
        searchResult: false,
        searchResultEmpty: false,
      };
    },
    computed: {
      ...mapState({
        menuItems: (state) => state.menu.searchData,
        searchOpen: (state) => state.menu.searchOpen
      }),
    },
    watch: {
      menuItems: function() {
        this.terms ? this.addFix() : this.removeFix();
        if (!this.menuItems.length) this.searchResultEmpty = true;
        else this.searchResultEmpty = false;
      },
    },
    methods: {
     collapseFilter() {
        this.filtered = !this.filtered;
      },
      searchterm: function() {
        this.$store.dispatch('menu/searchTerm', this.terms);
      },
      addFix() {
        body.classList.add('offcanvas');
        this.searchResult = true;
      },
      removeFix() {
        body.classList.remove('offcanvas');
        this.searchResult = false;
        this.terms = '';
      },
    },
  };
</script>