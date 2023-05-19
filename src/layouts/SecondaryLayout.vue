<template>
  <q-layout view="lHh Lpr lFf">
    <q-icon @click="$router.go(-1)" size="2em"
     class="absolute q-mt-md q-ml-md cursor-pointer z-top"
     color="primary" name="arrow_back_ios_new" />
    <q-page-container class="row justify-center">
      <router-view class="q-pa-md page-size"/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SecondaryLayout'
})
</script>
