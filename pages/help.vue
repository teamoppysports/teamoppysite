<template>
  <v-row>
    <v-col cols="12" lg="10" offset-lg="1" xl="8" offset-xl="2">
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <h1>Help & Support</h1>
        </v-col>
        <v-col cols="12">
          <h2>Find an issue?</h2>
        </v-col>
        <v-col cols="12">
          <p>All TeamOppy Sports apps are rigorously tested however from time to time you may find an issue. Please
            report
            any issues to us.</p>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-list color="transparent">
            <v-subheader class="text-h6">Contact Us</v-subheader>
            <v-list-item-group>
              <v-list-item dense class="font-weight-thin" v-for="(item, index) in contactList" :key="index"
                :href="item.link" :target="item.target ? item.target : '_blank'">
                <v-list-item-icon>
                  <v-icon small v-text="item.icon.name" :color="item.icon.color"></v-icon>
                </v-list-item-icon>
                <v-list-item-content small>
                  <v-list-item-title v-text="item.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="12">
          <h2>Feature Request?</h2>
        </v-col>
        <v-col>
          <p>
            TeamOppy Sports are constantly looking to improve the apps - we would love to hear your suggestions for
            additional features or improvements to the apps.
          </p>
        </v-col>

      </v-row>
    </v-col>
  </v-row>
</template>

<script>

export default {

  data: () => ({

    contactList: [
      {
        name: 'info@teamoppy.com',
        icon: {
          name: 'mdi-email',
          color: '#1d9bf0'
        },
        link: 'mailto:info@teamoppy.com'
      },
      {
        name: '@teamoppy',
        icon: {
          name: 'mdi-twitter',
          color: '#1d9bf0'
        },
        link: 'https://twitter.com/teamoppy'
      }

    ]
  })
}
</script>