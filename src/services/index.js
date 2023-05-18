import { api } from 'boot/axios'

export const getRulesList = async () => {
  try {
    const { data: { data } } = await api.get('admin/house_rules')
    return data.entities
  } catch (error) {
    console.error(error)
  }
}

export const createRule = async ({ ruleData }) => {
  try {
    await api.post('admin/house_rules/', { house_rules: ruleData })
  } catch (error) {
    console.error(error)
  }
}

export const getRuleData = async ({ ruleId }) => {
  try {
    const { data: { data } } = await api.get(`admin/house_rules/${ruleId}`)
    return data
  } catch (error) {
    console.error(error)
  }
}

export const deleteRule = async ({ ruleId }) => {
  try {
    await api.delete(`admin/house_rules/${ruleId}`)
  } catch (error) {
    console.error(error)
  }
}

export const updateRule = async ({ ruleData, ruleId }) => {
  try {
    await api.put(`admin/house_rules/${ruleId}`, { house_rules: ruleData })
  } catch (error) {
    console.error(error)
  }
}
