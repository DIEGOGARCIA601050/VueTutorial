<script>
  // Home.vue
export default {
  name: 'App',
  computed: {
    username() {
      // We will see what `params` is shortly
      return this.$route.params.username
    },
  },
  methods: {
    goToDashboard() {
      if (isAuthenticated) {
        this.$router.push('/dashboard')
      } else {
        this.$router.push('/login')
      }
    },
  },
  data() {
    return {
      message: ""
    };
  },
  async mounted() {
    fetch('/api/message')
      .then(res => res.text())
      .then(res => {
        this.message = res
        return res
      })
      .catch(err => {
        console.log(err);
        return err
      })
      return this.message
  }
}
</script>
<template>
    <div>{{ message }}</div>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/Tutorial">Go to Tutorial</router-link>
    <router-link to="/LaGuerraDeReforma">Go to La Guerra de Reforma</router-link>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>