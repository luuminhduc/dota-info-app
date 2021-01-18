import React from "react";
import { useSelector } from "react-redux";

const SingleItem = () => {
  const commonReducer = useSelector((state) => state.commonReducer);
  const { isLight } = commonReducer;

  const itemReducer = useSelector((state) => state.itemReducer);

  const { selectedItem, itemList } = itemReducer;

  const formatText = (text) => {
    let result = text.split("");
    for (let i = 0; i < result.length; i++) {
      if (result[i] === "_") {
        result.splice(i, 1, " ");
      }
    }
    return result.reduce((a, b) => (a += b));
  };

  const renderBasicInfo = () => {
    const { img, hint, dname, cost, components, attrib } = selectedItem;
    return (
      <div className="basicInfo shadow_md">
        <img src={`https://api.opendota.com${img}`} alt="" />
        <div className="basicInfo_text">
          <p className="item">
            <span>Name: </span>
            <strong>{dname}</strong>
          </p>
          <p className="item">
            <span>Cost: </span>
            <strong>{cost}</strong>
          </p>
          <p className="item">
            <span>Effect: </span>
            <strong>{hint}</strong>
          </p>
          <p className="item">
            <span>Components: </span>
            <strong>{components ? components.length : 0}</strong>
          </p>
          {attrib && attrib.length > 0
            ? attrib?.map((el, idx) => (
                <p key={idx}>
                  {el.header}
                  {typeof el.value !== "string"
                    ? el.value?.map((e, i) => <span key={i}>{e + ", "}</span>)
                    : el.value + " "}
                  {el.footer}
                </p>
              ))
            : ""}
        </div>
      </div>
    );
  };

  const renderComponents = () => {
    const { components } = selectedItem;
    const componentsArr = components?.map((el) =>
      itemList.find((e) => {
        return e.dname?.toLowerCase() === formatText(el).toLowerCase();
      })
    );
    return (
      <div className="components shadow_md container_lg">
        <h3>Builds</h3>
        <div className="components_imgs">
          {componentsArr.map((el, idx) =>
            el ? (
              <div className="link">
                <img src={`https://api.opendota.com${el.img}`} alt="" />
                <small>{el?.dname}</small>
                <small>{el?.cost}</small>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    );
  };

  return selectedItem && itemList.length > 0 ? (
    <div className={`singleItem page ${!isLight ? "dark" : ""}`}>
      <div className="container_lg">{renderBasicInfo()}</div>
      <div>{selectedItem.components ? renderComponents() : ""}</div>
    </div>
  ) : (
    <div className={`singleItem page ${!isLight ? "dark" : ""}`}>
      <div className="container_lg">
        <p>No item is found</p>
      </div>
    </div>
  );
};

export default SingleItem;
