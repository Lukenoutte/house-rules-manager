<template>
  <q-page>
    <FormRuleComponent :isLoading="isLoading" @onSubmmit="(data) => handleSave(data)"
      :defaultRule="ruleData" title="Edit Rule" subTitle="test"/>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import FormRuleComponent from 'src/components/FormRuleComponent.vue'
import { useRoute, useRouter } from 'vue-router'
import { getRuleData, updateRule } from 'src/services/index.js'

export default defineComponent({
  name: 'EditPage',
  setup () {
    const isLoading = ref(false)
    const ruleData = ref([])
    const route = useRoute()
    const router = useRouter()
    const ruleId = route.params.id

    const handleGetData = async () => {
      isLoading.value = true
      const data = await getRuleData({ ruleId })
      ruleData.value = data
      isLoading.value = false
    }

    const handleSave = async (ruleData) => {
      try {
        isLoading.value = true
        await updateRule({ ruleId, ruleData })
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
      handleSave
    }
  },
  components: {
    FormRuleComponent
  }
})
</script>
