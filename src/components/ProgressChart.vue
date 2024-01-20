<template>

  <div style="display:flex;">
    <v-container grid-list-xl>
      <v-layout flex-child wrap>
        <v-flex d-flex class="v-item">
          <v-sheet class="d-flex" height="100%">
            <div class="text-xs-center w-100">
              <v-progress-circular
                  :rotate="360"
                  :size="150"
                  :width="15"
                  :value="10"
                  color="teal"
              >
                10
              </v-progress-circular>
            </div>
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl>
      <v-layout flex-child wrap>
        <v-flex d-flex class="v-item">
          <v-sheet class="d-flex" height="250">
            <div class="text-xs-center w-100">
              <v-progress-circular
                  :rotate="360"
                  :size="150"
                  :width="15"
                  :value="30"
                  color="primary"
              >
                {{ value }}
              </v-progress-circular>
            </div>
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl>
      <v-layout flex-child wrap>
        <v-flex d-flex class="v-item">
          <v-sheet class="d-flex" height="250">
            <div class="text-xs-center w-100">
              <v-progress-circular
                  :rotate="360"
                  :size="150"
                  :width="15"
                  :value="78"
                  color="red"
              >
                {{ value }}
              </v-progress-circular>
            </div>
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-xl>
      <v-layout flex-child wrap>
        <v-flex d-flex class="v-item">
          <v-sheet class="d-flex" height="250">
            <div class="text-xs-center w-100">
              <v-progress-circular
                  :rotate="360"
                  :size="150"
                  :width="15"
                  :value="50"
                  color="pink"
              >
                {{ 50 }}
              </v-progress-circular>
            </div>
          </v-sheet>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      interval: {},
      value: 0
    }
  },
  // mounted () {
  //   this.interval = setInterval(() => {
  //     if (this.value === 100) {
  //       return (this.value = 0)
  //     }
  //     this.value += 10
  //   }, 1000)
  // }
}
</script>
<style>
.v-item {
  width: 100% !important;
}
.v-progress-circular {
  margin: 1rem
}
</style>