<template>
  <div id="app">
    <nav>
      <router-link to="/">Cases</router-link>
      <router-link to="/vaccines">Vaccines</router-link>
    </nav>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

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
