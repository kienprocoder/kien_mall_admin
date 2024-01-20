<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer permanent location="left" style="padding-top: 0">
        <template v-slot:prepend>
          <v-list-item lines="two" prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
                       title="Jane Smith" style="color: white"></v-list-item>
        </template>

        <v-divider></v-divider>

        <v-list density="compact" nav class="ob-menu">
          <router-link to="/dashboard">
            <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" value="dashboard"></v-list-item>
          </router-link>
          <router-link to="/home">
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          </router-link>

          <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
          <v-list-item prepend-icon="mdi-store" title="Products" value="products"></v-list-item>
          <v-list-item prepend-icon="mdi-cart" title="Orders" value="orders"></v-list-item>
          <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style=" min-height: 962px">
        <div style="width: auto; border-bottom: 1px solid #ddd; height: 4rem !important;">
          <v-container>
            <v-row align="end" justify="end">
<!--              <v-col cols="4">-->
<!--                <v-text-field label="Search templates" append-inner-icon="mdi-magnify"></v-text-field>-->
<!--              </v-col>-->
              <v-col cols="auto">
                <v-icon end icon="mdi-bell"></v-icon>
              </v-col>
              <v-col cols="auto" style="padding-left: 0">
                <router-link to="/">
                  <v-icon end icon="mdi-logout" color="black"></v-icon>
                </router-link>
              </v-col>
            </v-row>
          </v-container>
        </div>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
<!--  <div class="text-center">-->
<!--    <v-pagination-->
<!--        v-model="page"-->
<!--        :length="15"-->
<!--        :total-visible="4"-->
<!--    ></v-pagination>-->
<!--  </div>-->
</template>
<script>
export default {
  data() {
    return {
      showDropDown: false,
      showSide: true,
      page: 1,
      drawer: true,
      items: [
        {title: 'Profile'},
        {title: 'Logout'}
      ]
    }
  },
  methods: {
    // hide show side bar
    toggleSideBar() {
      this.showSide = !this.showSide

    },
    // toggle user
    toggleDrop() {
      this.showDropDown = !this.showDropDown

    }
  }

}
</script>

<style>
nav {
  padding: 10px;
}
.v-navigation-drawer {
  background-color: #182444;
}
.v-divider {
  margin: 0px;
  color: white;
}
.v-list-item--nav {
  color: white;
}
.v-list-item--nav {
  font-size: 1rem;
}
.v-list-item--nav .v-list-item-title {
  font-size: 1rem;
}
.menu-item {
  float: left;
}
.v-list-item--density-compact.v-list-item--one-line {
  width: 100% !important;
}
.ob-menu .v-list-item-title {
  float: left;
}
</style>