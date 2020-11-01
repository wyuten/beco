<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>


<style lang="scss">

@import "assets/styles/variables.scss";

h1,
h2,
h3,
ul,
p,
body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "OpenSans", sans-serif;
}

.container {
  padding-left: $sidebarMobileWidth + 20px;
  padding-right: 20px;
}
</style>
