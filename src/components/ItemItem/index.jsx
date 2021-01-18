import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectItem } from "../../redux/action/itemAction/actions";

const ItemItem = ({ item }) => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLight } = commonReducer;
  const dispatch = useDispatch();
  return item ? (
    <div className={`shadow_sm item ${!isLight ? "dark" : ""}`}>
      <img src={`https://api.opendota.com${item.img}`} alt="" />
      <p>{item.dname}</p>
      <p>{item.cost}</p>
      <NavLink
        to={`/items/${item.dname}`}
        onClick={() => dispatch(selectItem(item))}
        className="link btn_md btn_blue shadow_sm"
      >
        Detail
      </NavLink>
    </div>
  ) : (
    ""
  );
};

export default ItemItem;
