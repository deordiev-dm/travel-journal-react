import pinIcon from "../assets/pin-icon.svg";

function Card(props) {
  return (
    <article className="card">
      <div className="card__image" style={{ "--imageUrl": `url(${props.imageUrl})` }}></div>
      <div className="card__info info-card">
        <div className="info-card__top">
          <img className="info-card__pin-icon" src={pinIcon} alt="" />
          <span className="info-card__country" style={{ "--icon-path": `url(${pinIcon})` }}>
            {props.location}
          </span>
          <a className="info-card__maps-link" target="__blank" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="info-card__title">{props.title}</h2>
        <p className="info-card__dates">
          {props.startDate} - {props.endDate}
        </p>
        <p className="info-card__description">{props.description}</p>
      </div>
    </article>
  );
}

export default Card;
