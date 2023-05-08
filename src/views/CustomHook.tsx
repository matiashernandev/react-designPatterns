import useToggle from '../components/customHook/useToggle'

export default function CustomHook () {
  const [isSwitchOn, toggleSwitch] = useToggle()
  const text = isSwitchOn ? '🌞 Apaga' : '🌛 Enciende'

  return (
    <button onClick={toggleSwitch}>
      {text}
    </button>
  )
}
