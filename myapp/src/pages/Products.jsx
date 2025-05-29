import { useParams } from "react-router-dom";
export default function Products() {
  const { id } = useParams();
  return (
    <div>
      <h1>Products landing page for id: {id}</h1>
    </div>
  );
}
