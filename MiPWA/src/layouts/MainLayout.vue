<template>
    <q-layout view="lHh Lpr lff">
      <q-header elevated class="bg-cyan-8">
        <q-toolbar>
          <q-toolbar-title>REGISTRO VEHICULAR</q-toolbar-title>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
<!--------------------------------------------------------------------------------->
<div>
    <!-- Botón de instalación PWA -->
    <q-btn v-if="showInstallButton" @click="installPWA" label="Instalar App" color="positive" />
  </div>
<!--------------------------------------------------------------------------------->
        </q-toolbar>
      </q-header>
<!------------------------------------------------------------------------------------------------------------->
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
<!------------------------------------------------------------------------------------------------------------->
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
<!------------------------------------------------------------------------------------------------------------->
            <q-item active clickable v-ripple to="/MiPWA/src/pages/MiPrimero.vue">
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>
              <q-item-section>
                Mi Datos en QR
              </q-item-section>
            </q-item>
<!------------------------------------------------------------------------------------------------------------->
            <q-item clickable v-ripple to="/MiPWA/src/pages/MiSegundo.vue">
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>
              <q-item-section>
                Mi NFC
              </q-item-section>
            </q-item>
<!------------------------------------------------------------------------------------------------------------->
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>
              <q-item-section>
                OTROS.....
              </q-item-section>
            </q-item>
          </q-list><!------------------------------------------------------------------------------------------>
        </q-scroll-area><!------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------->
      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">REGISTRO VEHICULAR</div>
            <div>EMILIO GARCIA</div>
          </div>
        </q-img>
      </q-drawer>
<!------------------------------------------------------------------------------------------------------------->
      <q-page-container>
        <router-view>

        </router-view>
      </q-page-container>
    </q-layout>
</template> <!--------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------->
<!------------------------------------------------------------------------------------------------------------->

<script>

export default {

  data() {

    return {
      showInstallButton: false, // Controla la visibilidad del botón
      deferredPrompt: null, // Guardamos el objeto del evento beforeinstallprompt
    };
  },
  mounted() {
    // Escucha el evento beforeinstallprompt
    window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt);
  },

  methods: {
    handleBeforeInstallPrompt(event) {
      // Prevenir que se muestre el diálogo de instalación automáticamente
      event.preventDefault();
      this.deferredPrompt = event; // Guardamos el evento para usarlo más tarde
      this.showInstallButton = true; // Mostramos el botón de instalación
    },
    installPWA() {
      // Si el usuario hace clic en el botón, mostramos el prompt para instalar la PWA
      if (this.deferredPrompt) {
        this.deferredPrompt.prompt(); // Mostrar el diálogo de instalación
        this.deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('El usuario ha aceptado la instalación de la PWA');
          } else {
            console.log('El usuario ha rechazado la instalación de la PWA');
          }
          this.deferredPrompt = null; // Limpiar el evento
          this.showInstallButton = false; // Ocultar el botón después de intentar la instalación
        });
      }
    }
  }
};

</script>
