<template>
  <q-page class="flex flex-center">
    <div>
      <div class="q-mb-md">
        <strong class="text-primary text-h5">Welcome</strong>
      </div>
      <q-input bottom-slots outlined
      bg-color="white" dense rounded standout placeholder="Username" v-model="username"/>
      <q-input bottom-slots outlined type="password" v-if="hidePassword"
      bg-color="white" dense rounded standout placeholder="Password" v-model="password">
        <template v-slot:append>
          <q-btn @click="hidePassword = !hidePassword" round dense flat icon="remove_red_eye" color="primary" />
        </template>
      </q-input>
      <q-input bottom-slots outlined type="text" v-else
      bg-color="white" dense rounded standout placeholder="Password" v-model="password">
        <template v-slot:append>
          <q-btn @click="hidePassword = !hidePassword" round dense flat icon="visibility_off" color="primary" />
        </template>
      </q-input>
      <div class="flex justify-between q-mb-md">
        <router-link to="/" class="link-forgot-pass text-primary">Forgot Password?</router-link>
      </div>
      <q-btn to="/home" class="full-width" color="primary" label="Sign in" push no-caps />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'LoginPage',

  components: {},

  setup () {
    const hidePassword = ref(true)
    const username = ref('')
    const password = ref('')

    return {
      hidePassword,
      username,
      password
    }
  }
})
</script>

<style scoped>
  .link-forgot-pass{
    text-decoration: none;
    font-weight: bold;
  }
</style>
