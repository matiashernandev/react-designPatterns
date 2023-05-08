import { useState, useCallback } from 'react'

export default function useToggle (initialState = false) {
  const [value, setValue] = useState(initialState)

  const toggle = useCallback(() => {
    setValue((value) => !value)
  }, [])

  return [value, toggle]
}
