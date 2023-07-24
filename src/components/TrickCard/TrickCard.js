const TrickCard = ({ stance, name, obstacle, tutorial }) => {

  return (
    <div>
      <div>
      <p>{stance}</p>
      <p>{name} </p>
      </div>
      <p>Obstacle: {obstacle} </p>
      <p>Link to Tutorial:</p>
      <p>{tutorial}</p>
    </div>
  )
}

 export default TrickCard