<template>
    <section id="projects" class="projects">
        <h2>Proyectos</h2>
        <div class="grid">
            <div class="card project">
                <h3>Portal Educativo</h3>
                <p>Aplicación web de portal educativo para institución educativa utilizando Laravel, con roles con
                    permisos, inicio de sesión, entre otros. Con una interfaz intuitiva y optimizada.</p>
            </div>
            <div class="card project">
                <h3>Sistema de Inventario</h3>
                <p>Aplicación de escritorio con .NET y SQL Server y reportería con Crystal Report y roles con permisos
                    para un manejo preciso de una tienda de conveniencia.</p>
            </div>
            <div class="card project">
                <h3>Diseño de página web para cafetería</h3>
                <p>Diseño visual con Bootstrap, paleta de colores global, y atractivo para representar correctamente la
                    temática de la cafetería.</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectsView',
    components: {

    }
}
</script>

<style scoped>
.projects .project {
    border-left: 5px solid var(--accent-strong);
}
</style>