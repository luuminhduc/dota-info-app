import React from "react";
import { useDispatch } from "react-redux";
import { updateSearchTerm } from "../../redux/action/heroAction/actions";

const SearchHero = () => {
  const dispatch = useDispatch();
  return (
    <input
      onChange={(e) => dispatch(updateSearchTerm(e.target.value))}
      className="shadow_sm"
      type="text"
      placeholder="Searh hero by name"
    />
  );
};

export default SearchHero;
