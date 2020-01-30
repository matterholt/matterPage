export default function Footer() {
  return (
    <div className="footer">
      <p>this is the bottom on page</p>
      <style jsx>{`
        .footer {
          height: 75px;
          width: 100%;
          background: var(--light-accent);
        }
      `}</style>
    </div>
  );
}
