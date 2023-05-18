<template>
  <q-layout view="lHh Lpr lFf">
    <q-icon  @click="$router.push('/')" size="2.5em" class="absolute z-top q-mt-md q-ml-md cursor-pointer"
      color="primary" name="roofing" />
    <q-page-container class="row justify-center">
      <router-view class="q-pa-md page-size"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>
