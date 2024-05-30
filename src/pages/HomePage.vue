<script setup lang="ts">
import StyledButton from '@/components/StyledButton.vue';
</script>

<template>
  <main class="home-page">
      <header>
        <div class="wrapper">
          <nav>
            <StyledButton link="/">Hello</StyledButton>
            <StyledButton @click="alert('hello')">Hello</StyledButton>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/testimonial">Testimonial</RouterLink>
      </nav>
    </div>
  </header>
  </main>
</template>

<style lang="postcss">
.home-page header {
  line-height: 1.5;
  height: 80px;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {}

}
</style>
