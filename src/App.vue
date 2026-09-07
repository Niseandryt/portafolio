<template>
  <main class="app-shell">
    <header class="site-header">
      <div id="logocontainer">
        <img id="logo" src="@/assets/logo.png" alt="logo">
      </div>
      <nav class="navbar">
        <router-link class="nav-link" to="/home">Inicio</router-link>
        <router-link class="nav-link" to="/about">Sobre mi</router-link>
        <router-link class="nav-link" to="/who-am-i">Que hago</router-link>
        <router-link class="nav-link" to="/projects">Proyectos</router-link>
        <router-link class="nav-link" to="/contact">Contacto</router-link>
      </nav>
    </header>

    <div class="page-content">
      <router-view></router-view>
    </div>

    <div>
      <Footer></Footer>
    </div>
  </main>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
  },
};
</script>

<style>
:root {
  --bg-dark: #0f172a;
  --bg-soft: #111827;
  --color-blue: #2e86ab;
  --accent: #7b2cbf;
  --accent-strong: #e63946;
  --text-light: #e5e7eb;
  --text-dark: #1f2937;
}

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
  /* background: #f8fafc; */
  
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-dark);
  margin: 0;
}

.app-shell {
  min-height: 100vh;
  /* background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%); */
  background: var(--bg-dark)
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  /* background: rgba(15, 23, 42, 0.95); */
  background: var(--bg-soft);
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
  display: flex;
  align-items: center;
}

#logocontainer {
  flex: 0.5;
}

#logo {
  width: 6em;
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.nav-link {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 600;
  padding: 0.7rem 1.1rem;
  border-radius: 999px;
  transition: all 0.25s ease;
}

.nav-link:hover {
  background: rgba(251, 191, 36, 0.15);
  color: var(--accent-strong);
}

.nav-link.router-link-exact-active,
.nav-link.router-link-active {
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  color: var(--bg-dark);
  box-shadow: 0 6px 18px rgba(245, 158, 11, 0.35);
}

.page-content {
  padding: 2rem 1rem;
}
</style>
