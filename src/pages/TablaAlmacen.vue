
<template>
  <q-page class="q-pa-md">
    <q-table
      title="Obras del Autor"
      :rows="rows"
      :columns="columns"
      row-key="key"
      :loading="loading"
    />
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const rows = ref([]);
    const loading = ref(true);
    const columns = [
      { name: 'author', label: 'Autor', field: 'author', align: 'left', sortable: true },
      { name: 'title', label: 'Título', field: 'title', align: 'left', sortable: true },
      { name: 'subjects', label: 'Temas', field: 'subjects', align: 'left', sortable: true },
    ];

    const fetchData = async () => {
      try {
        const response = await axios.get('https://openlibrary.org/authors/OL1394244A/works.json?limit=5');
        rows.value = response.data.entries.map(entry => ({
          key: entry.key,
          author: entry.authors[0].author.key,
          title: entry.title,
          subjects: entry.subjects ? entry.subjects.join(', ') : 'Sin temas',
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      rows,
      columns,
      loading,
    };
  },
};
</script>

<style scoped>
/* Estilos personalizados si los necesitas */
</style>
