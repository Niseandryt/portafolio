<template>
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-brand">
                <h2>Portafolio</h2>
                <p>Creando experiencias digitales modernas y funcionales.</p>
            </div>

            <nav class="footer-nav" aria-label="Navegación del pie de página">
                <h3>Enlaces</h3>
                <div class="footer-nav-links">
                    <router-link to="/home">Inicio</router-link>
                    <router-link to="/about">Sobre mí</router-link>
                    <router-link to="/who-am-i">Qué hago</router-link>
                    <router-link to="/projects">Proyectos</router-link>
                    <router-link to="/contact">Contacto</router-link>
                </div>
            </nav>

            <div class="footer-contact">
                <h3>Conecta conmigo</h3>
                <a href="mailto:axelmoran78@gmail.com">axelmoran78@gmail.com</a>
                <div class="social-links">
                    <a href="https://www.linkedin.com/in/axel-mor%C3%A1n-597185251/" aria-label="LinkedIn"
                        target="_blank">LinkedIn</a>
                    <a href="https://github.com/Niseandryt" aria-label="GitHub" target="_blank" id="github">GitHub</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; {{ new Date().getFullYear() }} Axel Morán. Todos los derechos reservados.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent',
    components: {

    }
}
</script>

<style scoped>
.site-footer {
    padding: 3rem 1.5rem 1.25rem;
    /* color: #e5e7eb; */
    /* background: #111827; */
    color: var(--text-light);
    background: var(--bg-dark);
}

.footer-container {
    display: grid;
    grid-template-columns: 2fr 1fr 1.5fr;
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;
}

.footer-brand h2,
.footer-nav h3,
.footer-contact h3 {
    margin: 0 0 0.75rem;
}

/* .footer-brand {
    display: flex;
    align-items: center;
    flex-direction: column;
} */

.footer-brand p {
    max-width: 280px;
    margin: 0 auto;
    color: #9ca3af;
}

.footer-nav,
.footer-contact {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
}

.footer-nav-links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.footer-nav a,
.footer-contact a {
    width: fit-content;
    color: #9ca3af;
    text-decoration: none;
    transition: color 0.2s ease;
    /* margin-left: 5.4rem; */
}

/* #github {
    margin: 0 !important;
} */

.footer-nav a:hover,
.footer-contact a:hover {
    color: #ffffff;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
}

.footer-bottom {
    max-width: 1100px;
    margin: 2rem auto 0;
    padding-top: 1rem;
    border-top: 1px solid #374151;
    color: #9ca3af;
    font-size: 0.875rem;
    text-align: center;
}

.footer-bottom p {
    margin: 0 auto;
}

@media (max-width: 700px) {
    .footer-container {
        grid-template-columns: 1fr;
    }
}
</style>