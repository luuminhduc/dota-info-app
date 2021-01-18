import React from "react";
import { useSelector } from "react-redux";
import HeroItem from "../HeroItem";

const HeroList = () => {
  const heroReducer = useSelector((state) => state.heroReducer);
  const { heroList, type, searchTerm } = heroReducer;

  const renderHeroList = () => {
    let arr = heroList;
    switch (type) {
      case "all":
        arr = heroList;
        break;
      case "str":
        arr = heroList.filter((el) => el.primary_attr === "str");
        break;
      case "agi":
        arr = heroList.filter((el) => el.primary_attr === "agi");
        break;
      case "int":
        arr = heroList.filter((el) => el.primary_attr === "int");
        break;
      default:
        return;
    }

    return arr
      ?.filter(
        (el) =>
          el.localized_name.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1
      )
      .map((el, idx) => <HeroItem hero={el} key={idx} />);
  };

  return <div className="heroList grid_4">{renderHeroList()}</div>;
};

export default HeroList;
