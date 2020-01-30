export default function Header(props) {
  return (
    <div className="header">
      <h1 className="title">Matterholt</h1>
      <h2 className="subtitle">{props.subtitle}</h2>
    </div>
  );
}
