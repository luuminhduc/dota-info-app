import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchType } from "../../redux/action/heroAction/actions";

const FilterHero = () => {
  const dispatch = useDispatch();

  const heroReducer = useSelector((state) => state.heroReducer);
  const { type } = heroReducer;

  return (
    <select
      value={type}
      onChange={(e) => dispatch(switchType(e.target.value))}
      className="shadow_sm"
    >
      <option value="all">All</option>
      <option value="str">Strength</option>
      <option value="agi">Agility</option>
      <option value="int">Intelligence</option>
    </select>
  );
};

export default FilterHero;
