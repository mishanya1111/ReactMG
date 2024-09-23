import logo from "./logo.svg";
import "./first.css";
import { useState } from "react";
import cardsData from "./data";
import CardList from "./CardsComponent/CardList";

function App() {
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState(cardsData);

  const changeActiveHandler = (id) => {
    setData((cards) =>
      cards.map((card) => {
        if (card.id === id) {
          const prev = { ...card };
          prev.isActive = !card.isActive;
          return prev;
        }
        return card;
      }),
    );
  };

  const deleteHandler = () => {
    //COdeConvention?
    setData((card) => card.filter((el) => !el.isActive));
  };

  function changeCheckboxApp() {
    setChecked(!checked);
  }

  return (
    <div>
      <header className="AppHeader">
        <img src={logo} className="AppLogo" alt="logo" />
        <h1>Some very informative title</h1>
        <div className="checkboxView">
          <label htmlFor="checboxView">View only</label>
          <input
            type="checkbox"
            onChange={changeCheckboxApp}
            id="checboxView"
            className="checkboxView"
          />
        </div>
        <button
          onClick={deleteHandler}
          className="deleteButton"
          style={{ marginLeft: 10 }}
        >
          Delete selected cards
        </button>
      </header>
      <div className="cardContainer">
        <CardList
          onChecked={checked}
          items={data}
          checkBoxChange={changeActiveHandler}
        />
      </div>
    </div>
  );
}

export default App;
