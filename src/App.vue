<template>
  <div id="app">
    <FormTeste />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

import FormTeste from './components/FormTest';

export default {
  name: 'App',
  components: {
    FormTeste
  }
}
</script>

<style>

</style>
