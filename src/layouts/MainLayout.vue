<template>
  <q-layout view="lHh Lpr lFf">
    <q-icon size="2.5em" class="absolute q-mt-md q-ml-md" color="primary" name="roofing" />
    <q-page-container>
      <router-view class="q-pa-md"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>
