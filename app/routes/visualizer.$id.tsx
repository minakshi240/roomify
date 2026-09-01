import { useParams } from "react-router";

const VisualizerId = () => {
  const { id } = useParams();

  return (
      <div>Visualizer for project {id}</div>
  )
}

export default VisualizerId