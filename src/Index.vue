<template>
  <div id="app">
    <nav>
      <router-link :to="{
        name: 'cases',
        params: {
          columns: columnsCases,
          data: data
        }
      }">Cases</router-link>
      <router-link to="/vaccines">Vaccines</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      columnsCases: [
        {
          label: 'Country',
          value: 'country'
        },
        {
          label: 'Capital city',
          value: 'capital_city'
        }, {
          label: 'Continent',
          value: 'continent'
        },
        {
          label: 'Population',
          value: 'population'
        },
        {
          label: 'Confirmed cases',
          value: 'confirmed'
        },
        {
          label: 'Death cases',
          value: 'deaths'
        }
      ]
    }
  },
  mounted() {
    this.getCases();
  },
  methods: {
    ...mapActions(['getCases']),
  },
  computed: {
    ...mapGetters(['data'])
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app {
  height: 100%;
  display: grid;
  grid-template-columns: minmax(150px, 15%) 1fr;;
  nav {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    background-color: #2c3e50;
    gap: 10px;
    a {
      width: 100%;
      font-size: 1.5rem;
      color: #ffffff;
      text-decoration: none;
      text-align: left;
      padding-left: 10px;
      box-sizing: border-box;

      &.router-link-exact-active {
        font-weight: bold;
        background-color: #687485;
      }
    }
  }

}
</style>
