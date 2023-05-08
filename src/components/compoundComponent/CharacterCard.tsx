export interface ICharacter {
  id: number
  name: string
  image: string
  species: string
  gender: string
}

interface IProps {
  character: ICharacter
}

export default function CharacterCard ({ character }: IProps) {
  return (

    <li>
      <div>
        <img src={character.image} alt='profile-character' />
        <h2>{character.name}</h2>
        <div>
          <p>{character.species}</p>
          <p>{character.gender}</p>
        </div>
      </div>
    </li>

  )
}
