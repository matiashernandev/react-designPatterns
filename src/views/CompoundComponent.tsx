import { useEffect, useState } from 'react'
import CharacterCard, { ICharacter } from '../components/compoundComponent/CharacterCard'
import ListContainer from '../components/compoundComponent/ListContainer'

export default function CompoundComponent () {
  const [characters, setCharacters] = useState<ICharacter[]>([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
      })
  }, [])

  /* useEffect(() => {
    const getCharacter = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character')
      const data = await res.json()
      console.log(data)
    }
    getCharacter()
  }, [])
 */
  return (
    <>

      {
      characters.length &&
        <ListContainer>
          {
          characters.map((ch) => <CharacterCard character={ch} key={ch.id} />)
          }
        </ListContainer>
      }

    </>
  )
}
