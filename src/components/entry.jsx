// left off at 4:16:37

export default function Entry(props) {
  return (
    <container>
      <img
        alt={props.entry.countryName}
        className="entry-image"
        src={props.entry.imgSrc}
      />
      <article>
        <p className="period-of-stay">
          <b>{props.entry.periodOfStay}</b>
        </p>
        <h2>{props.entry.countryName}</h2>
        <a href={props.entry.googleMapsLink}>View on Google Maps</a>
        <p>{props.entry.entryDescription}</p>
      </article>
    </container>
  );
}
