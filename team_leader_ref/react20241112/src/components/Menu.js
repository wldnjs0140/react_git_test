const Menu = () => {
  return (
    <div>
      <div className="menuBtn">
        <button>한식</button>
        <button>중식</button>
        <button>일식</button>
      </div>
      <div className="menuDiv">
        <h3>한식</h3>
        <ul>
          <li>김밥</li>
          <li>라면</li>
          <li>부침개</li>
        </ul>
      </div>
      <div className="menuDiv">
        <h3>일식</h3>
        <ul>
          <li>돈카츠</li>
          <li>우동</li>
          <li>초밥</li>
        </ul>
      </div>
      <div className="menuDiv">
        <h3>중식</h3>
        <ul>
          <li>짜장</li>
          <li>짬뽕</li>
          <li>탕수육</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
