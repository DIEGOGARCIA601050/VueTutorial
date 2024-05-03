<script>
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
      .then(res => res.json())
      .then(res => {
        this.message = res?.text
        return res?.text
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
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <div class="navbar">
        <div>{{ message }}</div>
        <router-link to="/">Página principal</router-link>
        <router-link to="/LaGuerraDeReforma">La Guerra de Reforma</router-link>
        <router-link to="/La-Revolución">La Revolución</router-link>
      </div>
    
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<style>
  .navbar {
    position: fixed;
    background-color: whitesmoke;
    width: 100%;
    text-align: center;
    height: 10vh;
  }
</style>
