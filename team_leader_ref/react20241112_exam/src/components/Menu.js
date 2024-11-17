import { useState } from "react";

const Menu = (props) => {
  const { foods } = props;
  const [searchType, setSearchType] = useState("전체");

  function Foodmenu({ menu }) {
    return <li>{menu}</li>;
  }

  const handlSearch = (type) => {
    console.log(type);
    setSearchType(type);
  };
  return (
    <div>
      <div className="menuBtn">
        <button onClick={() => handlSearch("전체")}>전체</button>
        {foods.map((type, idx) => (
          <button key={idx} onClick={() => handlSearch(`${type.foodType}`)}>
            {type.foodType}
          </button>
        ))}
      </div>

      {foods
        .filter((food) => searchType === "전체" || food.foodType === searchType)
        .map((food, idx) => (
          <div key={idx} className="menuDiv">
            <h3>{food.foodType}</h3>
            <ul>
              {food.foodMenu.map((menu, idx) => (
                // <li key={menu + idx}>{menu}</li>
                <Foodmenu key={menu + idx} menu={menu} />
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Menu;
