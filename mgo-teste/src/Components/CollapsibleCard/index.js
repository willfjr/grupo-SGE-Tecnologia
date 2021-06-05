import { useState } from "react";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card">
      {props.tag}
      <button onClick={() => setIsOpen(!isOpen)}>{props.name}</button>
      {isOpen && <div>Content</div>}
    </div>
  );
};

export default Card;
