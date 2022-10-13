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
              <th class="text-center text-h6" width="33%">
                TeamOppy Dropbox
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-center" style="color:lightgreen">Free</td>
              <td class="text-center" style="color:lightgreen">Free</td>
              <td class="text-center" style="color:lightgreen">Free</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <h1>Support Us</h1>
    </v-col>
    <v-col>
      <p>
        TeamOppy Sports operates on a pay what you think it's worth model. All TeamOppy Sports apps are freely
        available.
      </p>
      <p>
        There are however costs associated with operating TeamOppy Sports including hosting fees along with the time and effort involved.
      </p>
      <p>
        If you would like to support us then you can do so by visiting <a href="https://www.buymeacoffee.com/teamoppysports" target="_blank" style="text-decoration: none">here</a>.
      </p>
    </v-col>
  </v-row>
</template>

<script>
</script>