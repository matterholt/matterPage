export default function ItemCard(props) {
  const { title, content, link } = props.itemsList;
  return (
    <li key={props.key} className="content__container">
      <h3 className="content_title">{title}</h3>
      <p> {content}</p>
      <p>
        <strong>Link:</strong> {link}
      </p>
    </li>
  );
}
