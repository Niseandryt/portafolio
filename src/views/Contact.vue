<template>
    <section id="contact" class="contact">
        <h2>Contacto</h2>
        <p>Si quieres colaborar, aprender juntos o explorar proyectos, aquí me encuentras:</p>
        <a href="mailto:axelmoran78@gmail.com">Correo</a>
        <a href="https://www.linkedin.com/in/axel-mor%C3%A1n-597185251/">LinkedIn</a>
        <a href="https://github.com/Niseandryt">GitHub</a>
    </section>
</template>

<script>
export default {
    name: 'ContactView',
    components: {

    }
}
</script>

<style scoped>
.contact {
    text-align: center;
    /* color: var(--text-light); */
}

.contact a {
    display: inline-block;
    margin: 0.5rem;
    padding: 0.7rem 1.2rem;
    background: var(--color-blue);
    color: var(--text-light);
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.3s, transform 0.3s;
}

.contact a:hover {
    background: var(--accent);
    transform: scale(1.05);
}
</style>