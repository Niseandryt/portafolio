<template>
    <footer class="site-footer">
        <div class="footer-container">
            <div class="footer-brand">
                <h2>Portafolio</h2>
                <p>Creando experiencias digitales modernas y funcionales.</p>
            </div>

            <nav class="footer-nav" aria-label="Navegación del pie de página">
                <h3>Enlaces</h3>
                <a href="#inicio">Inicio</a>
                <a href="#sobre-mi">Sobre mí</a>
                <a href="#proyectos">Proyectos</a>
                <a href="#contacto">Contacto</a>
            </nav>

            <div class="footer-contact">
                <h3>Conecta conmigo</h3>
                <a href="mailto:contacto@ejemplo.com">contacto@ejemplo.com</a>
                <div class="social-links">
                    <a href="#linkedin" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#github" aria-label="GitHub">GitHub</a>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; {{ new Date().getFullYear() }} Portafolio. Todos los derechos reservados.</p>
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
    color: #e5e7eb;
    background: #111827;
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

.footer-brand p {
    max-width: 280px;
    margin: 0;
    color: #9ca3af;
}

.footer-nav,
.footer-contact {
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
}

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
    margin: 0;
}

@media (max-width: 700px) {
    .footer-container {
        grid-template-columns: 1fr;
    }
}

</style>