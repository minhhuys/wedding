// https://usehooks.com/useMedia/
export default {
    data () {
      return {
        useMedia_isMobile: false,
  
        useMedia_queries: ['(max-width: 480px)'],
        // value if match query
        useMedia_values: [true],
        // value if not match query
        useMedia_defaultValue: false,
  
        mediaQueryLists: []
      }
    },
    methods: {
      useMedia_check() {
        const index = this.mediaQueryLists.findIndex(mql => mql.matches);
  
        return typeof this.useMedia_values[index] !== 'undefined' ? this.useMedia_values[index] : this.useMedia_defaultValue;
      },
      useMedia_set() {
        this.useMedia_isMobile = this.useMedia_check()
      }
    },
    mounted() {
        if(window) {
            this.mediaQueryLists = this.useMedia_queries.map(q => window.matchMedia(q));
  
            this.useMedia_set()
        
            this.mediaQueryLists.forEach(mql => mql.addListener(this.useMedia_set));
        }
    },
    beforeDestroy() {
        if(window) {    
            this.mediaQueryLists.forEach(mql => mql.removeListener(this.useMedia_set));
        }
    }
  };
  