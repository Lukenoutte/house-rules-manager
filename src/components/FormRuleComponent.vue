<template>
  <div class="q-pt-xl">
    <strong class="q-mt-md text-primary text-h6">{{ title }}</strong>
    <p class="text-grey-5">{{ subTitle }}</p>
    <div v-if="!isLoading">
      <div>
        <q-input bottom-slots outlined v-model="ruleName"
        bg-color="white" dense rounded standout placeholder="Name"/>
        <q-toggle
          v-model="isActive"
          :label="`Active`"
          checked-icon="check_circle"
          unchecked-icon="cancel"
          color="primary"
        />
      </div>
      <q-btn @click="$emit('onSubmmit', { name: ruleName, active: isActive ? 1 : 0 })"
        icon="save" to="/home" class="full-width q-mt-xl" color="primary"
        :disable="!ruleName"
        :label="submitButtonLabel" push no-caps />
    </div>
    <div v-else>
      <q-skeleton class="q-mt-sm" height="30px" width="100%" />
      <q-skeleton class="q-mt-lg" height="30px" width="20%"/>
    </div>
  </div>
</template>

<script>
import { watch, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'EditPage',
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    submitButtonLabel: {
      type: String,
      default: 'Save'
    },
    isLoading: {
      type: Boolean
    },
    defaultRule: {
      type: Object
    }
  },
  setup (props) {
    const ruleName = ref('')
    const isActive = ref(false)
    watch(() => props.defaultRule, (value) => {
      ruleName.value = value.name
      isActive.value = !!value.active
    })
    return {
      isActive,
      ruleName
    }
  }
})
</script>
