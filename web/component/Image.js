export default function TestImage() {
  return (
    <div className="testImage">
      <style jsx>{`
        .testImage {
          width: 50px;
          height: 50px;
          background-color: white;
          align-self: end;
          margin: 10px;
          justify-self: center;
          border-radius: 50%;
          grid-column: 3;
          grid-row: 1;
        }
      `}</style>
    </div>
  );
}
