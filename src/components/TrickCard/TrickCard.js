const TrickCard = ({ stance, name, obstacle, tutorial }) => {

  return (
    <div className="card">
      <div className="trick-name">
        <p>{stance} </p>
        <p>{name}</p>
      </div>
      <p>Obstacle: {obstacle} </p>
      <p>Link to Tutorial:</p>
      <p>{tutorial}</p>
    </div>
  )
}

 export default TrickCard