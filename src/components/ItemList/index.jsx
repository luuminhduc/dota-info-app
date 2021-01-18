import React from "react";
import { useSelector } from "react-redux";
import ItemItem from "../ItemItem";

const ItemList = () => {
  const itemReducer = useSelector((state) => state.itemReducer);
  const { searchItem, itemList, sortTerm } = itemReducer;

  const renderItems = () => {
    let arr;
    const actionArr = [...itemList];
    if (sortTerm === "default") {
      console.log("sHAY");
    }
    switch (sortTerm) {
      case "increase":
        arr = actionArr.sort((a, b) => a.cost - b.cost);
        break;
      case "decrease":
        arr = actionArr.sort((a, b) => b.cost - a.cost);
        break;
      default:
        arr = itemList;
        break;
    }

    return arr
      ?.filter((el) => {
        return el.dname?.toUpperCase().indexOf(searchItem.toUpperCase()) > -1;
      })
      .map((item, idx) => <ItemItem key={idx} item={item} />);
  };

  return <div className="ItemList grid_4">{renderItems()}</div>;
};

export default ItemList;
