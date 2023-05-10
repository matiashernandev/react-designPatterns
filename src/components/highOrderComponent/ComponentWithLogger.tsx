import { useEffect } from 'react'

// HOC para imprimir un mensaje con console.log
function withLogger<T extends object> (WrappedComponent: React.ComponentType<T>): React.FC<T> {
  return (props: T): JSX.Element => {
    useEffect(() => {
      console.log('El componente se ha renderizado')
    }, [])

    return <WrappedComponent {...props} />
  }
}

// Componente original
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface MyComponentProps {
  // Propiedades del componente original
}

const MyComponent: React.FC<MyComponentProps> = (): JSX.Element => {
  return <div>Contenido del componente</div>
}

// Envuelve el componente original con el HOC de logging
const ComponentWithLogger = withLogger(MyComponent)

export default ComponentWithLogger
