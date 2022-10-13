<template>
  <v-row>
    <v-col><v-spacer></v-spacer></v-col>
    <v-col cols="12">
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12" :md="12/footerLinks.length" v-for="(footerLink, index) in footerLinks" :key="index" class="d-flex justify-start">
      <v-list color="transparent">
        <v-subheader class="text-h6">{{ footerLink.heading }}</v-subheader>
        <v-list-item-group>
          <v-list-item dense class="font-weight-thin" v-for="(item, index) in footerLink.items" :key="index"
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

  </v-row>
</template>

<script>

export default {

  data: () => ({
    footerLinks: [
      {
        heading: 'Contact',
        items: [
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
      },
      {
        heading: 'Applications',
        items: [
          {
            name: 'Tagger',
            icon: {
              name: 'mdi-tag-text',
              color: 'blue'
            },
            link: 'https://tagger.teamoppy.com'
          },
          {
            name: 'Clipper',
            icon: {
              name: 'mdi-content-cut',
              color: 'green'
            },
            link: 'https://clipper.teamoppy.com'
          },
          {
            name: 'TeamOppy Dropbox',
            icon: {
              name: 'mdi-cloud',
              color: 'blue'
            },
            link: 'https://db.teamoppy.com'
          }
        ]
      },
      {
        heading: 'Other',
        items: [
          {
            name: 'Sponsor',
            icon: {
              name: 'mdi-currency-eur',
              color: 'teal'
            },
            link: 'https://www.buymeacoffee.com/teamoppysports'
          },
          {
            name: 'Privacy Policy',
            icon: {
              name: 'mdi-file-document-outline',
              color: 'deep-orange'
            },
            link: '/privacy',
            target: '_self'
          }
        ]
      },
      {
        heading: 'External Resources',
        items: [
          {
            name: 'GAA PA Guide',
            icon: {
              name: 'mdi-file-pdf-box',
              color: 'yellow'
            },
            link: 'https://res.cloudinary.com/dvrbaruzq/image/upload/fl_attachment/dffwre8luwt9afkdhvsy.pdf'
          }
        ]
      }
    ]
  }),
}
</script>