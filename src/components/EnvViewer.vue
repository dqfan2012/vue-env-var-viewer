<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
    envVars: {
        type: Object,
        required: true
    },
})

const formattedEnvVars = computed(() => {
    const formatted = {};
    for (const [key, value] of Object.entries(props.envVars)) {
        if (key.includes('PATH')) {
            formatted[key] = value.split(':').join('\n');
        } else {
            formatted[key] = value;
        }
    }
    return formatted;
});
</script>

<template>
    <div class="container">
        <h1 class="mt-5">Environment Variables</h1>

        <div class="table-container">
            <table class="table table-striped mt-3">
                <thead class="thead-dark">
                    <tr>
                        <th scoped="col">Variable</th>
                        <th scoped="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(value, key) in formattedEnvVars" :key="key">
                        <td>{{ key }}</td>
                        <td>
                            <pre>{{ value }}</pre>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
.table-container {
    max-width: 100%;
    overflow-x: auto;
}

pre {
    white-space: pre-wrap;
    word-wrap: break-word;
}
</style>