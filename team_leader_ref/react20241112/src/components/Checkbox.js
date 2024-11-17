import { useState } from "react";

function Checkbox(props) {
  const { fruitItems, allCheck, setAllCheck } = props;
  const [checkItem, setCheckItem] = useState([]);

  const handleAll = () => {
    if (allCheck) {
      setCheckItem([]);
    } else {
      setCheckItem(fruitItems);
    }

    setAllCheck(!allCheck);
  };

  const handleItem = () => {};
  return (
    <div>
      <div>
        <label>
          <input type="checkbox" checked={allCheck} onChange={handleAll} />
          전체
        </label>
      </div>
      <div>
        {fruitItems.map((item, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={checkItem.includes(item)}
              onChange={handleItem}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Checkbox;
