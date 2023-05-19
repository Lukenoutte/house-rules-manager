<template>
  <q-page>
    <div class="q-pt-xl">
      <div class="row justify-between">
        <div>
          <strong class="q-mt-md text-primary text-h6">House Rules:</strong>
          <p class="text-grey-5">All house rules at your fingertips, in one convenient app.</p>
        </div>
        <q-btn label="Add Rule" class="full-width" rounded icon="add" :to="`/create`"
          color="primary" push no-caps />
      </div>
    </div>
    <div class="q-mt-lg" v-if="!isLoading">
      <div v-for="rule in rulesList" :key="rule.id" @click="$router.push(`/details/${rule.id}`)"
           class="q-mt-sm bg-grey-2 q-pa-sm rounded-borders cursor-pointer row justify-between">
        <span>{{ rule.name }}</span>
        <div>
          <q-icon size="2em" color="primary" name="check_circle" v-if="rule.active" />
          <q-icon size="2em" color="grey-5" name="cancel" v-else />
        </div>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-pagination
          v-model="paginationCurrentPage"
          :max="paginationTotalPages"
          :max-pages="6"
          direction-links
          color="primary"
          active-design="push"
        />
      </div>
    </div>
    <div class="q-mt-lg" v-else>
      <q-skeleton class="q-mt-sm" type="QToolbar" />
      <q-skeleton class="q-mt-sm" type="QToolbar" />
      <q-skeleton class="q-mt-sm" type="QToolbar" />
      <q-skeleton class="q-mt-sm" type="QToolbar" />
      <q-skeleton class="q-mt-sm" type="QToolbar" />
      <q-skeleton class="q-mt-sm" type="QToolbar" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from 'vue'
import { getRulesList } from 'src/services/index.js'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const rulesList = ref([])
    const isLoading = ref(false)
    const paginationTotalPages = ref(0)
    const paginationCurrentPage = ref(1)

    const handleGetRules = async () => {
      isLoading.value = true
      const data = await getRulesList({ currentPage: paginationCurrentPage.value })
      if (!data) return
      rulesList.value = data.entities
      paginationTotalPages.value = data.pagination.total_pages
      paginationCurrentPage.value = data.pagination.current_page
      isLoading.value = false
    }
    watch(paginationCurrentPage, () => {
      handleGetRules()
    })
    onMounted(() => {
      isLoading.value = true
      setTimeout(() => { handleGetRules() }, 300)
    })

    return {
      rulesList,
      isLoading,
      paginationTotalPages,
      paginationCurrentPage
    }
  }
})
</script>
