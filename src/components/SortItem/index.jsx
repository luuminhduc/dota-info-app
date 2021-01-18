import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortItem } from "../../redux/action/itemAction/actions";

const SortItem = () => {
  const itemReducer = useSelector((state) => state.itemReducer);
  const { sortTerm } = itemReducer;

  const dispatch = useDispatch();

  return (
    <select
      value={sortTerm}
      onChange={(e) => dispatch(sortItem(e.target.value))}
    >
      <option value="decrease">Decreasing cost</option>
      <option value="increase">Increasing cost</option>
      <option value="default">Default</option>
    </select>
  );
};

export default SortItem;
