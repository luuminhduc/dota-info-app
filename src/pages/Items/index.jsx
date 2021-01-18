import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "../../components/ItemList";
import SearchItem from "../../components/SearchItem";
import SortItem from "../../components/SortItem";
import { fetchAllItems } from "../../redux/action/itemAction/actions";

const Items = () => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLight } = commonReducer;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllItems());
  }, [dispatch]);
  return (
    <div className={`items page ${!isLight ? "dark" : ""}`}>
      <div className="container_lg">
        <div className="page_actions">
          <SearchItem />
          <SortItem />
        </div>
        <ItemList />
      </div>
    </div>
  );
};

export default Items;
