import { api } from 'boot/axios'
import { successNotification, errorNotification } from 'src/utils/notification'

export const getRulesList = async ({ currentPage }) => {
  try {
    const { data: { data } } = await api.get(`admin/house_rules?page=${currentPage}`)
    return data
  } catch (error) {
    errorNotification()
  }
}

export const createRule = async ({ ruleData }) => {
  try {
    await api.post('admin/house_rules/', { house_rules: ruleData })
    successNotification()
  } catch (error) {
    errorNotification()
  }
}

export const getRuleData = async ({ ruleId }) => {
  try {
    const { data: { data } } = await api.get(`admin/house_rules/${ruleId}`)
    return data
  } catch (error) {
    errorNotification()
  }
}

export const deleteRule = async ({ ruleId }) => {
  try {
    await api.delete(`admin/house_rules/${ruleId}`)
    successNotification()
  } catch (error) {
    errorNotification()
  }
}

export const updateRule = async ({ ruleData, ruleId }) => {
  try {
    await api.put(`admin/house_rules/${ruleId}`, { house_rules: ruleData })
    successNotification()
  } catch (error) {
    errorNotification()
  }
}
