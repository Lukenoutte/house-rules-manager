import { Notify } from 'quasar'

export const successNotification = (message = 'Success!') => {
  Notify.create({ type: 'positive', message, position: 'top-right', icon: 'check' })
}

export const errorNotification = (message = 'Error!') => {
  Notify.create({ type: 'negative', message, position: 'top-right', icon: 'close' })
}
