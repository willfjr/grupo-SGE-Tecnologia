import { useState } from "react";
import { Accordion } from "./styled";

const Card = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Accordion>
      <button onClick={() => setIsOpen(!isOpen)}>{props.name}</button>
      {isOpen && <div> ID: {props.dataList}</div>}
    </Accordion>
  );
};
export default Card;
