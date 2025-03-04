import { boot } from 'quasar/wrappers';
import axios from 'axios';

// Configuración de Axios (opcional)
const api = axios.create({
  baseURL: 'https://api.example.com', // Cambia esto por tu URL base
});

export default boot(({ app }) => {
  // Hacer Axios disponible globalmente en la aplicación
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { axios, api };
