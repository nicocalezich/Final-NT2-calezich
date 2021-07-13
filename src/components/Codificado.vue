<template>
  <section class="Codificado">
      <input v-model="$store.state.input"/>
      <p>Cantidad: {{cantidad}}</p>
      <p>{{$store.state.input | codificar}} (codificado)</p>
      <p>{{$store.state.input | mayuscula}} (mayuscula)</p>
      <p>{{$store.state.input | minuscula}} (minuscula)</p>
      <p>{{$store.state.input | mayusculaminuscula(true)}} (intercalado-mayuscula)</p>
      <p>{{$store.state.input | mayusculaminuscula(false)}} (intercalado-minuscula)</p>
      <hr>
      <p>Respuestas: 1:b, 2:b, 3:c, 4:b, 5:b,c</p>

  </section>
</template>

<script lang="js">

export default {
  name: 'Codificado',
  props: [],
  mounted() {},
  components: {
  },

  data() {
    return {

    }
  },
  methods: {
  
  },
  computed: {
      cantidad(){
          return this.$store.state.input.length
      }
  }
}
</script>

<style scoped lang="css">


</style>

