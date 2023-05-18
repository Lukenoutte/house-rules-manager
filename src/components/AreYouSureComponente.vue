<template>
  <q-form @submit.prevent="$emit('onSubmmit')" :style="!$q.screen.lt.sm ? 'min-width: 300px;' : 'min-width: 200px;'">

    <div class="column justify-center items-center q-my-md text-primary">
      <q-card flat class="q-pa-md">
        <q-icon  class="q-mr-md" size="2.5em" name="quiz" />
        <strong class="text-h7"> {{ message }} </strong>
      </q-card>
    </div>

    <div class="flex justify-between q-mt-md">
      <q-btn
        flat
        color="grey-8"
        :label="btnCancelLabel"
        @click="$emit('onCancel')"
      />
      <q-btn
        type="submit"
        color="primary"
        :label="btnSubmitLabel"
      />
    </div>
  </q-form>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AreYouSureComponent',
  props: {
    btnSubmitLabel: {
      type: String,
      default: 'Yes'
    },
    btnCancelLabel: {
      type: String,
      default: 'Cancel'
    },
    message: {
      type: String,
      default: 'Are you sure?'
    }
  }
})
</script>
