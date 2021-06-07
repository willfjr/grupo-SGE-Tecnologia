import React, { useEffect, useState } from "react";
import Card from "../CollapsibleCard";
import useRequestData from "../../Hooks/useRequestData";

const CardsScreen = () => {
  const [datas] = useRequestData([], "https://cataas.com/api/cats");
  const [tags] = useRequestData([], "https://cataas.com/api/tags");

  // const dataList = "oi";
  const list = datas.map((d) => {
    var dataList = [];
    dataList.push(d.tags, d.id);
    return dataList;
  });
  if (datas !== undefined) {
    const dataList = (tag) => {
      var result;
      list.forEach((data) => {
        for (let i = 0; i <= data[0].length; i++) {
          if (tag === data[0][i]) {
            result = data[1];
          }
        }
      });
      return result;
    };

    const renderCards = tags.map((tag) => {
      return <Card name={tag} key={tag} dataList={dataList(tag)} />;
    });

    return <>{renderCards}</>;
  }
};

export default CardsScreen;
