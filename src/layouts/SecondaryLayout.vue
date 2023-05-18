<template>
  <q-layout view="lHh Lpr lFf">
    <q-icon size="2em" class="absolute q-mt-md q-ml-md" color="primary" name="arrow_back_ios_new" />
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
