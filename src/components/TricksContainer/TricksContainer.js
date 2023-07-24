import TrickCard from "../TrickCard/TrickCard"

const TricksContainer = (props) => {
  const trickCards = props.trickData.map(trick => <TrickCard key={trick.id} stance={trick.stance} name={trick.name} obstacle={trick.obstacle} tutorial={trick.tutorial} />)

  return (<section className="container">
    {trickCards}
  </section>)
}

export default TricksContainer