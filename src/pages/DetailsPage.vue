<template>
  <q-page>
    <div class="q-pt-xl">
      <div>
        <strong class="q-mt-md text-primary text-h6">Rule Details:</strong>
        <p class="text-grey-5">Explore detailed house rules.</p>
      </div>
      <div v-if="!isLoading">
        <div class="row justify-between q-mt-lg">
          <strong class="q-mr-md">Name:</strong> {{ ruleData.name }}
        </div>
        <q-separator class="q-mt-sm"/>
        <div class="row justify-between q-mt-lg">
          <strong class="q-mr-md">ID:</strong> {{ ruleData.id }}
        </div>
        <q-separator class="q-mt-sm"/>
        <div class="row justify-between q-mt-lg">
          <strong class="q-mr-md">Active:</strong>
          <q-icon size="1.5em" color="primary" name="check_circle" v-if="ruleData.active" />
          <q-icon size="1.5em" color="grey-5" name="cancel" v-else />
        </div>
        <q-separator class="q-mt-sm" />
        <q-btn  icon="edit" :to="`/edit/${$route.params.id}`" class="full-width q-mt-xl"
          color="primary" label="Edit" push no-caps />
        <q-btn @click="showAreYouSure = true" icon="delete" class="full-width q-mt-md"
          color="grey-6" label="Delete" push no-caps />
      </div>
      <div v-else>
        <q-skeleton class="q-mt-sm" height="30px" width="80%" />
        <q-skeleton class="q-mt-sm" height="30px" width="80%"/>
        <q-skeleton class="q-mt-sm" height="30px" width="40%"/>
      </div>
    </div>
    <q-dialog v-model="showAreYouSure">
      <q-card>
        <q-card-section>
          <AreYouSureComponente @onSubmmit="onClickToDelete" @onCancel="showAreYouSure = false"/>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getRuleData, deleteRule } from 'src/services/index.js'
import AreYouSureComponente from 'src/components/AreYouSureComponente.vue'

export default defineComponent({
  name: 'DetailsPage',
  components: {
    AreYouSureComponente
  },
  setup () {
    const ruleData = ref([])
    const isLoading = ref(false)
    const route = useRoute()
    const router = useRouter()
    const ruleId = route.params.id
    const showAreYouSure = ref(false)

    const handleGetData = async () => {
      isLoading.value = true
      const data = await getRuleData({ ruleId })
      ruleData.value = data
      isLoading.value = false
    }

    const onClickToDelete = async () => {
      try {
        isLoading.value = true
        showAreYouSure.value = false
        await deleteRule({ ruleId })
        router.push('/home')
        isLoading.value = false
      } catch (error) {
        console.error(error)
      }
    }

    onMounted(() => {
      handleGetData()
    })

    return {
      ruleData,
      isLoading,
      onClickToDelete,
      showAreYouSure
    }
  }
})
</script>
