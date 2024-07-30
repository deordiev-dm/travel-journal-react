import "./Card.css";
import Card from "./Card";
import cardsData from "../js/data.js";

function MainContent() {
  const cards = cardsData.map((cardData) => <Card key={cardData.id} {...cardData} />);
  return (
    <main className="main">
      <div className="main__container">{cards}</div>
    </main>
  );
}

export default MainContent;
