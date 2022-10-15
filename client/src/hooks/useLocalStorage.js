import { useEffect, useState } from 'react'

const PREFIX = 'chat-app-' //to show the local storage of this app uniquly in the storage

export default function useLocalStorage(key, initialValue) {
  // get the value from local storage & put it in state 
  const prefixedKey = PREFIX + key
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey) //to get the data in json format
    if (jsonValue != null) return JSON.parse(jsonValue)
    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })
  
// get the value & save in local storage
  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
