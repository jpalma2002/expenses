<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
/* Styling for header */
header {
  line-height: 1.5;
  background-color: #f0f0f0; /* Add a background color */
  padding: 1rem; /* Add some padding */
}

/* Styling for logo */
.logo {
  display: block;
  margin: 0 auto 2rem;
}

/* Media query for larger screens */
@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center; /* Use align-items instead of place-items */
    justify-content: space-between; /* Add space between elements */
    padding: 1rem 2rem; /* Adjust padding */
  }

  .logo {
    margin: 0; /* Remove margin */
  }

  header .wrapper {
    display: flex;
    align-items: center; /* Align items to the center */
    flex-wrap: wrap;
  }
}
</style>
