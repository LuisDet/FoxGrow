<template>
  <the-wrapper>
    <base-card no-padding>
      <img src="../assets/maxresdefault.jpg" alt="" srcset="" />
    </base-card>
    <base-title>Sobre Nosotros</base-title>
    <section>
      <base-text
        title="Misión"
        description="Ofrecer cursos online con contenido de alto valor impartidos por expertos en distintas áreas de la vida a un precio asequible para cualquier nivel socio económico en los hispano hablantes."
      />
      <base-text
        title="Visión"
        description="Mejorar la toma decisión y estilo de vida en los hispano hablantes en las diferentes etapas que se encuentre. Así enfrentar los errores continuos que se pueden estar provocando en: edades, niveles socio económico, zonas geográficas y niveles de educación."
      />
      <base-text
        title="Valores"
        description="Responsabilidad social, Servicio, Compromiso."
      />
    </section>
    <base-card no-padding>
      <img src="../assets/maxresdefault.jpg" alt="" srcset="" />
    </base-card>
    <base-text
      title="Historia"
      description="La idea de Fox Grow nace en el 2020 con la pandemia del Covid-19 en Republica Dominicana. Donde se vivía un cambio de la tendencia fitness, debido a que los gimnasios estaban cerrando y las personas ven la oportunidad de crear nuevos hábitos saludables.
A primera instancia todo apuntaba a un proyecto solo relacionado a tema de salud (alimentación, ejercicio, hábitos, ect).Yo, Jesus Dorian Cuevas Ramírez, siempre había tenido un interés de ver porque las personas tenían una vida digna, de calidad, y no solo en temas financieros, si no en salud, relaciones y satisfacción personal.

Recuerdo cuando iba en básica en el colegio y observaba que los mayores en sus últimos años para concluir sus estudios se ponían en forma, por diversas razones que eran obvias. Cuando llegaban a la universidad y comenzaban a trabajar…su físico era afectado y con ellos su salud. Otras personas si podían seguir y mantenerlo hasta concluir sus estudios universitarios y otros simplemente lo retomaban después de acabar la universidad.
Los comportamiento y resultados que podían causar la toma de decisiones en la vida generaba un resultado a corto, mediano y largo plazo en un individuo.
"
    />
    <section name="contacto">
      <base-title centered>Contacto</base-title>
      <base-card> </base-card>
    </section>
  </the-wrapper>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("closeMenu");
  },
};
</script>

<style scoped>
img {
  width: 100%;
  display: block;
}
</style>