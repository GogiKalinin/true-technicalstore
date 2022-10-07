import { useState } from "react";
import "./App.sass";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import PreFooter from "./Components/PreFooter/PreFooter";
import Footer from "./Components/Footer/Footer";
import BannerSlider from "./Components/BannerSlider/BannerSlider";
import BasketModal from "./Components/BasketModal/BasketModal";
import NewProducts from "./Components/NewProducts/NewProducts";
import Quote from "./Components/Quote/Quote";

const App = () => {
  // const array = [
  //   { name: "serduck", gender: "boy" },
  //   { name: "dimochka", gender: "gay" },
  //   { name: "dianOchka", gender: "lesbian" },
  //   { name: "zhenia", gender: "boy" },
  // ];
  // array.filter((element) => console.log("element", element));

  const [showBasketModal, setShowBasketModal] = useState(false);
  const [basketData, setBasketData] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  console.log("basketData", basketData);
  const [countItems, setCountItems] = useState([]);
  // {
  //  id: someProductId,
  //  count: count product with this id,
  // }
  const getCounerNumber = (new_prod) => {
    const id = new_prod.id;
    let oldCountItems = [...countItems];
    // Перевіряємо чи масив пустий
    if (oldCountItems.length === 0) {
      //Якщо так, то додаємо туди об'єкт з полями id(клікнутого елемента) та стандартним значенням count 1
      oldCountItems.push({ id, count: 1 });
      //Тут ми оновлюємо глобальний countItems додаючи до нього наш новозмінений масив
      setCountItems(oldCountItems);
      //інакше (якщо масив не порожній)
    } else {
      //Тут ми перевіряємо чи наш елемент є в таблиці
      for (let i = 0; i < oldCountItems.length; i++) {
        //Якщо є, то доаємо count на один
        if (oldCountItems[i].id === id) {
          oldCountItems[i].count = oldCountItems[i].count + 1;
        }
      }
      //Тут ми також перевіряємо чи є наш елемент у таблиці
      const elementsWithClickedId = oldCountItems.filter(
        (element) => element.id === id
      );
      //Якщо немає
      if (elementsWithClickedId.length === 0) {
        //Додаємо цей елемент
        oldCountItems.push({ id, count: 1 });
      }
      // console.log("elementsWithClickedId", elementsWithClickedId);
      //Тут ми оновлюємо глобальний countItems додаючи до нього наш новозмінений масив
      setCountItems(oldCountItems);
    }
  };
  // console.log("count items", countItems);
  // console.log("basketData", basketData);
  const addNewToBusket = (new_prod) => {
    const old_busket_data = [...basketData];
    const prodFilter = old_busket_data.filter(
      (prodCheck) => prodCheck.id === new_prod.id
    );
    if (prodFilter.length === 0) {
      old_busket_data.push(new_prod);
      setBasketData(old_busket_data);
    }
    // console.log("old_busket_data", old_busket_data);
    getCounerNumber(new_prod);
    // console.log("old_busket_data", old_busket_data);
    // console.log("addNewToBusket", new_prod);
  };
  return (
    <div className="App">
      <Header
        setShowBasketModal={setShowBasketModal}
        showBasketModal={showBasketModal}
        setShowSearchBar={setShowSearchBar}
        showSearchBar={showSearchBar}
      />
      <div className="Main">
        <BannerSlider />
        <NewProducts />
        <Product basketData={basketData} setBasketData={addNewToBusket} />
        <Quote />
        <PreFooter />
      </div>
      <Footer />
      {showBasketModal ? (
        <BasketModal
          countItems={countItems}
          basketData={basketData}
          setBasketData={setBasketData}
        />
      ) : null}
    </div>
  );
};

export default App;

// src={require("./Userpic.png")}
// onClick={() => changeStarState(item.id)}
//.slice(0,10)
//.filter
//.replace
//.split
