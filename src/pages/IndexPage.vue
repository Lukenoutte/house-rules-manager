<template>
  <q-page>
    <div class="q-pt-xl">
      <div class="row justify-between">
        <div>
          <strong class="q-mt-md text-primary text-h6">Rules:</strong>
          <p class="text-grey-5">Here you can see all the rules.</p>
        </div>
        <div>
          <q-btn rounded icon="add" :to="`/create`" color="primary" push no-caps />
        </div>
      </div>
    </div>
    <div class="q-mt-lg" v-if="!isLoading">
      <div v-for="rule in rulesList" :key="rule.id" @click="$router.push(`/details/${rule.id}`)"
           class="q-mt-sm bg-grey-2 q-pa-md rounded-borders cursor-pointer row justify-between">
        <span>{{ rule.name }}</span>
        <div>
          <q-icon size="2em" color="primary" name="check_circle" v-if="rule.active" />
          <q-icon size="2em" color="grey-5" name="cancel" v-else />
        </div>
      </div>
    </div>
    <div class="q-mt-lg" v-else>
      <q-skeleton class="q-mt-sm" type="QToolbar" />
      <q-skeleton class="q-mt-sm" type="QToolbar" />
      <q-skeleton class="q-mt-sm" type="QToolbar" />
      <q-skeleton class="q-mt-sm" type="QToolbar" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { getRulesList } from 'src/services/index.js'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const rulesList = ref([])
    const isLoading = ref(false)
    const handleGetRules = async () => {
      isLoading.value = true
      const data = await getRulesList()
      rulesList.value = data
      isLoading.value = false
    }

    onMounted(() => {
      handleGetRules()
    })

    return {
      rulesList,
      isLoading
    }
  }
})
</script>
