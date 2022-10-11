
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
            return 600
          case 'xl':
            return 700
        }
      },
    }
}