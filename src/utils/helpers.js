import { Notifications, Permissions } from "expo";
import { AsyncStorage } from "react-native";
import { getRandomColor } from './colors';

const NOTIFICATION_KEY = "Udacity:Notificationskey";

function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const getPlural = (word, num) => {
  return num === 1 ? word : `${word}s`
}

export const createNewDeckObject = (name) => ({
  id: generateUID(),
  title: name,
  bgcolor: getRandomColor(),
  cards: []
})

export const createNotification = () => ({
  title: "Practice your flashcards",
  body: "Practice makes perfect, or at least gets you through!",
  android: {
    sound: false,
    vibrate: true,
    priority: "high",
    sticky: false
  },
  ios: {
    sound: false
  }
})

export const clearLocalNotification = () => {
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  )
}

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync()
            let nexttime = new Date()
            nexttime.setDate(nexttime.getDate() + 1)
            nexttime.setHours(12)
            nexttime.setMinutes(30)

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: nexttime,
              repeat: "day"
            })
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
}