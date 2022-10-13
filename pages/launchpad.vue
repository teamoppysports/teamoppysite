<template>
<v-row>
  <v-col cols="12" class="d-flex justify-center">
    <h1>Application Launchpad</h1>
  </v-col>
  <v-col v-for="app in applications" :key="app.name" class="d-flex justify-center" cols="12" lg="4" md="6" sm="12">
    <v-card class="d-flex flex-column" tile hover outlined :href="app.link" target="_blank" max-width="500" height="500" >
      <v-card-title>
        <span>{{ app.name }}</span>
        <v-spacer></v-spacer>
        <v-icon large :color="app.icon.color">{{ app.icon.name }}</v-icon>
      </v-card-title>
      <v-card-subtitle class="text-subtitle-2">
        {{ app.briefDescription }}
      </v-card-subtitle>
      <v-card-text></v-card-text>
      <v-card-text>
        {{ app.description }}
      </v-card-text>
     <v-spacer></v-spacer>
     <v-card-text class="text-caption font-weight-thin">
      {{ app.note }}
     </v-card-text>
      <v-card-text>
        <v-chip class="ma-2" outlined v-for="tag in app.tags" :key="tag">{{ tag }} </v-chip>
      </v-card-text>
    </v-card>

  </v-col>
</v-row>

</template>

<script>
    export default {
  name: 'Launchpad',
  data () {
    return {
      applications: [
        {
          name: 'Tagger',
          briefDescription: 'Tag, analyse, share',
          icon: {
            name: 'mdi-tag-text',
            color: 'blue' 
          },
          link: 'https://tagger.teamoppy.com',
          description: 'Live game or post game video event tagging. Track your KPIs. Generate a summary of the game. Visualise your data with charts, timelines, position maps, etc. Gain insights into patterns of play. Customize and even create your own sport!',
          tags: [
            'Tag',
            'Live',
            'Video',
            'Dashboard',
            'Customize'
          ]
        },
        {
          name: 'Clipper',
          briefDescription: 'Clip, draw and add text, share',
          icon: {
            name: 'mdi-content-cut',
            color: 'green' 
          },
          link: 'https://clipper.teamoppy.com',
          description: 'Advanced Video Analysis. Add your video source (Youtube, Vimeo or Local Video File), clip the video, draw on and add text. Add tags for quick search. Create a playlist of clips and share with your team members.',
          tags: [
            'Video Clips',
            'Draw',
            'Add Text',
            'Playlists'
          ]
        },
        {
          name: 'TeamOppy Dropbox',
          briefDescription: 'Team setup, games, tagging, video, dashboard. Dropbox storage.',
          icon: {
            name: 'mdi-cloud',
            color: 'blue' 
          },
          link: 'https://db.teamoppy.com',
          description: 'This is the original teamoppy app. Set up a team and add members. Create games - tag and analyse. Track progress with season charts. Uses the Dropbox API to store your data.',
          tags: [
            'Dropbox',
            'Teams',
            'Games',
            'Tag',
            'Analyse'
          ],
          note: 'Note: This app is currently in maintenance mode, meaning that only occasional bug fixes will be applied. Focus will be directed to enhancing the Tagger and Clipper apps going forward.'
        }
      ]
    }
  },
}
</script>