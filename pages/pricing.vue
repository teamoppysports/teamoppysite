<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center">
      <h1>Pricing</h1>
    </v-col>
    <v-col cols="12">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center text-h6" width="33%">
                Tagger
              </th>
              <th class="text-center text-h6" width="33%">
                Clipper
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center" :style="freeStyleColor">€8 per month or €88 per year</td>
              <td class="text-center" :style="freeStyleColor">Free</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row> 
</template>


<script>

export default {
  computed: {
    freeStyleColor() {
      if (this.$vuetify.theme.dark){
        return 'color:lightgreen'
      }else{
        return 'color:darkgreen'
      }
    }
  }
}
</script>