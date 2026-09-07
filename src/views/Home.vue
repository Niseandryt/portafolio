<template>
    <section class="hero">
        <h1>Axel Morán</h1>
        <h2>Desarrollador Fullstack | Mentor Tecnológico | Líder Meticuloso</h2>
        <div class="terminal">
            <span>$ echo "Transformo ideas en sistemas prácticos y sólidos"</span><span class="cursor"></span>
        </div>
        <br>
        <div id="projects-link">
            <router-link to="/projects" class="nav-link">Ver proyectos ↓</router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeView',
    components: {

    }
}
document.addEventListener("DOMContentLoaded", function() {
    const text = 'Transformo ideas en sistemas prácticos y sólidos';
    const terminal = document.querySelector('.terminal');
    
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        // terminal.innerHTML = '$ echo "' + text.substring(0, i+1) + '"' + '<span class="cursor"></span>';
        terminal.innerHTML = `$ echo "${text.substring(0, i+1)}" <span class='cursor'></span>`
        i++;
        setTimeout(typeWriter, 80); // velocidad de escritura (ms)
      } else {
        // terminal.innerHTML = '$ echo "' + text + '"' + '<span class="cursor"></span>';
        terminal.innerHTML = `$ echo "${text}" <span class="cursor"></span>`;
      }
    }
    typeWriter();
  });
</script>

<style scoped>
.hero {
    padding: 5rem 2rem;
    text-align: center;
    background: linear-gradient(135deg, var(--bg-dark), var(--bg-soft));
}

.hero h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    margin-bottom: 0.5rem;
    color: var(--text-light);
}

.hero h2 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--color-blue);
}

.hero .terminal {
    font-family: monospace;
    background: var(--color-black);
    color: var(--accent);
    display: inline-block;
    padding: 1rem;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(123, 44, 191, 0.6);
    animation: fadeIn 0.25s ease-in;
}

.cursor {
    display: inline-block;
    width: 10px;
    height: 1px;
    background: var(--accent);
    animation: blink 1s infinite;
}

#projects-link {
    margin-top:2em;

    .nav-link { 
        background: linear-gradient(135deg, var(--accent), var(--accent-strong));
        color: var(--bg-dark);
        box-shadow: 0 6px 18px rgba(245, 158, 11, 0.35);
    }

    .nav-link:hover {
        background: rgba(251, 191, 36, 0.15);
        color: var(--accent-strong);
        box-shadow: none;
    }
}

@keyframes blink {

    0%,
    50% {
        opacity: 1;
    }

    51%,
    100% {
        opacity: 0;
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>