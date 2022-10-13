
export default {
    data: () => ({
    }),
    watch: {
    },
    computed: {
      imageWidth() {
        var deviceWidth = window.innerWidth
  
        console.log(deviceWidth)
        console.log(this.$vuetify.breakpoint.name)
  
        switch(this.$vuetify.breakpoint.name){
          case 'xs':
            return deviceWidth-40
          case 'sm':
            return 400
          case 'md':
            return 500
          case 'lg':
            return 700
          case 'xl':
            return 1000
        }
      },
      logoImage() {
        if (this.$vuetify.theme.dark) {
          return '/tslogo-dark.svg'
        } else {
          return '/tslogo-light.svg'
        }
      }
    },
    methods: {
      formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
      },
    }
}