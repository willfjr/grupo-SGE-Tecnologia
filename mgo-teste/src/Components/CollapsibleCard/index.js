import useRequestData from "../../Hooks/useRequestData";
import { useState } from "react";

const Card = () => {
  const [cats] = useRequestData([], "https://cataas.com/api/tags");

  const [isOpen, setIsOpen] = useState(false);

  const titles = cats.map((tags, index, array) => {
    return tags;
  });
  return (
    <>
      <div className="card">
        <button onClick={() => setIsOpen(!isOpen)}>+</button>
        {isOpen && <div>Content</div>}
      </div>
    </>
  );
};

export default Card;
