import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSearchItem } from "../../redux/action/itemAction/actions";

const SearchItem = () => {
  const dispatch = useDispatch();

  const itemReducer = useSelector((state) => state.itemReducer);

  const { searchItem } = itemReducer;

  return (
    <input
      type="text"
      value={searchItem}
      onChange={(e) => dispatch(updateSearchItem(e.target.value))}
      placeholder="Search item..."
      className="shadow_sm"
    />
  );
};

export default SearchItem;
