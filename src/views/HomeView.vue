<template>
  <div>
    <v-breadcrumbs :items="['Foo', 'Bar', 'Fizz']"></v-breadcrumbs>
    <v-container>
      <v-row align="start" justify="start">
        <!--              <v-col cols="4">-->
        <!--                <v-text-field label="Search templates" append-inner-icon="mdi-magnify"></v-text-field>-->
        <!--              </v-col>-->
        <v-col cols="auto">
          <v-label title="Process" class="font-weight-bold">Process Value</v-label>
        </v-col>
      </v-row>
    </v-container>
    <ProgressChart></ProgressChart>
  </div>
</template>

<script>

import ProgressChart from "@/components/ProgressChart.vue";

export default {
  name: 'HomeView',
  components: {ProgressChart},
}
</script>
