export default function ItemCard(props) {
  const { title, purpose, link } = props.itemsList;
  return (
    <li key={props.key} className="content__container">
      <h3 className="content_title">{title}</h3>
      <p> {purpose}</p>
      <p>
        <strong>Link:</strong> {link}
      </p>
    </li>
  );
}
