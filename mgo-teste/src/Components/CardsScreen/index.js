import React, { useState } from "react";
import Card from "../CollapsibleCard";
import useRequestData from "../../Hooks/useRequestData";

const CardsScreen = () => {
  const [names] = useRequestData([], "https://cataas.com/api/tags");

  const renderCards = names.map((name) => {
    return <Card name={name} key={name} />;
  });

  return <>{renderCards}</>;
};

export default CardsScreen;
