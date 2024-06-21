import "./card.css";

const Card = ({ children = "", width = "400px" }) => {
  return (
    <div className="card-style" style={{ width }}>
      {children}
    </div>
  );
};

export default Card;
