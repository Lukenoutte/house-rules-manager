<template>
  <q-page>
    <FormRuleComponent @onSubmmit="(data) => onClickSave(data)"
      title="Add Rule" subTitle="Create house rules easily." submitButtonLabel="Add"/>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import FormRuleComponent from 'src/components/FormRuleComponent.vue'
import { useRouter } from 'vue-router'
import { createRule } from 'src/services/index.js'

export default defineComponent({
  name: 'CreatePage',
  setup () {
    const isLoading = ref(false)
    const router = useRouter()
    const onClickSave = async (ruleData) => {
      isLoading.value = true
      await createRule({ ruleData })
      router.push('/home')
      isLoading.value = false
    }
    return {
      isLoading,
      onClickSave
    }
  },
  components: {
    FormRuleComponent
  }
})
</script>
