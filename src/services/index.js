import { api } from 'boot/axios'
import { Notify } from 'quasar'

export const getRulesList = async ({ currentPage }) => {
  try {
    const { data: { data } } = await api.get(`admin/house_rules?page=${currentPage}`)
    return data
  } catch (error) {
    console.error(error)
    Notify.create({ type: 'negative', message: 'Error!', position: 'top-right', icon: 'close' })
  }
}

export const createRule = async ({ ruleData }) => {
  try {
    await api.post('admin/house_rules/', { house_rules: ruleData })
    Notify.create({ type: 'positive', message: 'Success!', position: 'top-right', icon: 'check' })
  } catch (error) {
    console.error(error)
    Notify.create({ type: 'negative', message: 'Error!', position: 'top-right', icon: 'close' })
  }
}

export const getRuleData = async ({ ruleId }) => {
  try {
    const { data: { data } } = await api.get(`admin/house_rules/${ruleId}`)
    return data
  } catch (error) {
    console.error(error)
    Notify.create({ type: 'negative', message: 'Error!', position: 'top-right', icon: 'close' })
  }
}

export const deleteRule = async ({ ruleId }) => {
  try {
    await api.delete(`admin/house_rules/${ruleId}`)
    Notify.create({ type: 'positive', message: 'Success!', position: 'top-right', icon: 'check' })
  } catch (error) {
    console.error(error)
    Notify.create({ type: 'negative', message: 'Error!', position: 'top-right', icon: 'close' })
  }
}

export const updateRule = async ({ ruleData, ruleId }) => {
  try {
    await api.put(`admin/house_rules/${ruleId}`, { house_rules: ruleData })
    Notify.create({ type: 'positive', message: 'Success!', position: 'top-right', icon: 'check' })
  } catch (error) {
    Notify.create({ type: 'negative', message: 'Error!', position: 'top-right', icon: 'close' })
    console.error(error)
  }
}
