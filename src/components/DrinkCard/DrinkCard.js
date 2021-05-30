import { Card } from "./DrinkCard.styles";

function DrinkCard({ id, photo, title }) {
  return (
    <Card to={`/drink/${id}`}>
      <h3>{title}</h3>
      <img src={photo} alt="" />
    </Card>
  );
}

export default DrinkCard;
