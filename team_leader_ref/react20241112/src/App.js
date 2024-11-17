import "./App.css";
import { Header } from "./components/Header";
import Menu from "./components/Menu";
import { useState } from "react";
import Checkbox from "./components/Checkbox";

function App() {
  const [foods, setFoods] = useState([
    { foodType: "한식", foodMenu: ["김밥", "라면"] },
  ]);
  const arr = ["kim", 25, "doctor", "seoul", "010-123-456"];
  const fruitItems = [
    "사과",
    "멜론",
    "바나나",
    "포도",
    "수박",
    "딸기",
    "복숭아",
  ];

  const [allCheck, setAllCheck] = useState(false);

  const [name, age, job, addr, phone] = arr;

  // const aa1 = arr;

  //useState hook
  const [show, setShow] = useState(true);

  const switchBtn = () => {
    setShow(!show);
  };

  return (
    <div className="app">
      <Checkbox
        fruitItems={fruitItems}
        allCheck={allCheck}
        setAllCheck={setAllCheck}
      />

      <Header></Header>
      <Menu></Menu>
    </div>
  );
}

export default App;
