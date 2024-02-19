<template>
  <div class="containerOpcion">
    <ul>
      <li><router-link to="/">INICIO</router-link></li>
      <li><router-link to="/quienes-somos">QUIENES SOMOS</router-link></li>
      <li><router-link to="/documentos">DOCUMENTOS</router-link></li>
      <li><router-link to="/informacion">INFORMACION</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  // Puedes agregar lógica aquí si es necesario
};
</script>

<style scoped>
.containerOpcion li {
  display: inline-block;
  margin: 20px;
  font: bold 18px verdana;
  color: rgb(255, 255, 255);
}
</style>
