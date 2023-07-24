import { useState } from "react"

const TrickForm = ({ addTrick }) => {
  const [stance, setStance] = useState(" ")
  const [name, setName] = useState(" ")
  const [obstacle, setObstacle] = useState(" ")
  const [tutorial, setTutorial] = useState(" ")

  const submitFormData = (event) => {
    event.preventDefault()
    const newTrick = {
      id: Date.now(),
      stance,
      name,
      obstacle,
      tutorial
    }
    addTrick(newTrick)
    clearInput()
  }

  const clearInput = () => {
    setStance(" ")
    setName(" ")
    setObstacle(" ")
    setTutorial(" ")
  }

  return (
    <form>
      <select className="stance-select" value={stance} onChange={event => setStance(event.target.value)} >
        <option>Choose Your Stance</option>
        <option>Regular</option>
        <option>Switch</option>
      </select>
      <input name="trick" placeholder="Name of Trick" type="text" value={name} onChange={event => setName(event.target.value)} />
      <select className="obstacle-select" value={obstacle} onChange={event => setObstacle(event.target.value)} >
        <option>Choose Your Obstacle</option>
        <option>Flatground</option>
        <option>Ledge</option>
        <option>Rails</option>
        <option>Stairs</option>
        <option>Pool</option>
      </select>
      <input name="tutorial" placeholder="Link to Tutorial" type="text" value={tutorial} onChange={event => setTutorial(event.target.value)} />
      <input type="submit" onClick={event => submitFormData(event)} ></input>
    </form>
  )
}

export default TrickForm