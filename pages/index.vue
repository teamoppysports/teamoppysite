<template>
  <div>
    <v-row>
      <v-col cols="12" lg="10" offset-lg="1" xl="8" offset-xl="2">
        <v-row>
          <v-col cols="12" class="d-flex justify-center">
            <h1>Welcome to <strong>TeamOppy Sports</strong></h1>

          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <p class="subtext">Sports Performance Analysis software</p>
          </v-col>



          <v-col cols="12" class="d-flex justify-center">
            <div>
              <v-img :src="logoImage" alt="Screenshot" class="screenshot" :width="imageWidth" />
            </div>
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <h2 class="font-weight-thin"><strong>Enhance</strong> your performance analysis process today</h2>
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <v-card outlined max-width="500">
              <v-card-title>
                Get Started
              </v-card-title>
              <v-card-text>
                To quickly get started go to the Applications Launchpad to access the TeamOppy Sports apps.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn outlined large to="/launchpad">Launchpad</v-btn>
              </v-card-actions>
            </v-card>

          </v-col>

          <v-col cols="12">
            <v-spacer></v-spacer>
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <div>
              <v-img src="images/welcome/charts.svg" :width="imageWidth">
              </v-img>
            </div>
          </v-col>

          <v-col cols="12" md="5" offset-md="1">
            <v-row>
              <v-col v-for="(info, index) in taggerInfoCards" :key="index" class="d-flex justify-center" cols="12">
                <v-card color="transparent" class="d-flex flex-column" tile outlined height="200">
                  <v-card-title>
                    <span>{{ info.title }}</span>
                    <v-spacer></v-spacer>
                    <v-icon large :color="info.icon.color">{{ info.icon.name }}</v-icon>
                  </v-card-title>
                  <v-card-text>
                    {{ info.mainText }}
                  </v-card-text>
                  <v-spacer></v-spacer>
                </v-card>

              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" md="5" class="d-flex align-center">
            <v-img src="images/welcome/tagger_home_page.png" alt="Screenshot" class="screenshot" :width="imageWidth" />
          </v-col>

          <v-col cols="12" md="5" class="d-flex align-center">
            <v-img src="images/welcome/clipper_home_page.png" alt="Screenshot" class="screenshot" :width="imageWidth" />
          </v-col>

          <v-col cols="12" md="5" offset-md="1">
            <v-row>
              <v-col v-for="(info, index) in clipperInfoCards" :key="index" class="d-flex justify-center" cols="12">
                <v-card color="transparent" class="d-flex flex-column" tile outlined height="200">
                  <v-card-title>
                    <span>{{ info.title }}</span>
                    <v-spacer></v-spacer>
                    <v-icon large :color="info.icon.color">{{ info.icon.name }}</v-icon>
                  </v-card-title>
                  <v-card-text>
                    {{ info.mainText }}
                  </v-card-text>
                  <v-spacer></v-spacer>
                </v-card>

              </v-col>
            </v-row>
          </v-col>

          <v-col cols="12" class="d-flex justify-center">
            <v-card outlined max-width="500">
              <v-card-title>
                Latest news
              </v-card-title>
              <v-card-text>
                For all the latest news, feature updates and more, check out our blog posts page.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn outlined large to="/blog">Blog</v-btn>
              </v-card-actions>
            </v-card>

          </v-col>


          <v-col cols="12" lg="8" offset-lg="2" class="d-flex justify-center">
            <div class="blockquote">
              <blockquote>
                <p class="text-caption font-italic">
                  "My interest in Performance Analysis started through involvement with my local sports team.
                  TeamOppy Sports was born out as a hobby project during the Covid years when I, like so many others had some extra time on my hands!
                  Hopefully the TeamOppy Sports applications will be useful to many and assist in the performance analysis process for Analysts, Players and Coaches at all levels of sport."
                </p>
                <p class="editable author">Peter - Owner and Developer of TeamOppy Sports.</p>
              </blockquote>
            </div>
          </v-col>

        </v-row>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import common from '@/mixins/blog/common.js'

export default {

  mixins: [
    common
  ],
  data() {
    return {
      taggerInfoCards: [
        {
          title: 'Key performance indicators',
          mainText: 'The Tagger application enables you to tag events along with the event position (x,y) as they occur in the game and view the results in the Dashboard and Player Data pages.',
          icon: {
            name: 'mdi-tag-text',
            color: 'blue'
          }
        },
        {
          title: 'Video',
          mainText: 'Add a video source to Tagger. Each event that you tag will be associated with a clip of the event. This will allow players and coaches to quickly view the video of specific events.',
          icon: {
            name: 'mdi-video-vintage',
            color: 'purple'
          }
        },
        {
          title: 'Customise',
          mainText: 'The Tagger application is fully customisable. It comes with a number of system defined sport configurations that you can easily modify. You can even add and configure your own sport!',
          icon: {
            name: 'mdi-pencil-plus',
            color: 'indigo'
          }
        },
      ],
      clipperInfoCards: [
        {
          title: 'Clip Video',
          mainText: 'The Clipper application enables you to take enhanced clips of games.',
          icon: {
            name: 'mdi-content-cut',
            color: 'green'
          }
        },
        {
          title: 'Graphics and Text',
          mainText: 'Add graphics and text overlay to the clip to highlight specific things in the clip, pause for a configurable number of seconds, then resume the clip.',
          icon: {
            name: 'mdi-brush',
            color: 'teal'
          }
        },
        {
          title: 'Share',
          mainText: 'Share the clips with your team members using a couple of simple options.',
          icon: {
            name: 'mdi-folder-account',
            color: 'orange'
          }
        },
      ]
    }

  }
}
</script>