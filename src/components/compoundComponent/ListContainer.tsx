import { ReactNode } from 'react'

interface IListContainer {
  children: ReactNode
}

export default function ListContainer ({ children }: IListContainer) {
  return <ul>{children}</ul>
}
