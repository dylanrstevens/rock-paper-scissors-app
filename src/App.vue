<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>

      <nav>
        <RouterLink to="/">Play</RouterLink><br>
        <RouterLink to="/instructions">Instructions</RouterLink>
      </nav>

    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
