import { useState, useCallback, MouseEvent } from 'react'

// Definimos el tipo de la tupla de retorno de la función useToggle
type ToggleReturnType = [boolean, (event: MouseEvent<HTMLButtonElement>) => void]

export default function useToggle (initialState = false): ToggleReturnType {
  // Utilizamos el hook useState para guardar el estado del valor booleano
  const [value, setValue] = useState(initialState)

  // Utilizamos useCallback para que la función toggle no se cree en cada renderizado
  // y se mantenga siempre la misma referencia. De esta forma, se evita que los componentes
  // que usen este hook se rendericen innecesariamente.
  const toggle = useCallback(() => {
    setValue(value => !value)
  }, [])

  // Creamos una nueva función que maneje el evento de click del botón. Esta función
  // debe aceptar un evento de tipo MouseEvent<HTMLButtonElement> y no devolver nada (void).
  const toggleHandler = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault() // Prevenimos el comportamiento por defecto del evento click
    toggle() // Invocamos la función toggle para cambiar el valor del estado
  }, [toggle])

  // Devolvemos una tupla con el valor booleano y la función toggleHandler que maneja el evento click
  return [value, toggleHandler]
}
