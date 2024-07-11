<script setup>
import EnvViewer from './components/EnvViewer.vue'
let envVars = import.meta.env.OS_ENV
const sortedEnvVars = Object.keys(envVars).sort().reduce(
  (obj, key) => {
    obj[key] = envVars[key];
    return obj;
  },
  {}
);
</script>

<template>
  <EnvViewer :envVars="sortedEnvVars" />
</template>
