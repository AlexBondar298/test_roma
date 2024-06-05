import { useState } from "react";
import cardsItem from "../../../../public/assets/JSON/people.json";
import classes from "./WorkingGet.module.scss";
import Cart from "./Cart/Cart";

// Нужен ли здесь интерфейс ????

const WorkingGet = () => {
  //***************************************** */
  const cards = [
    {
      image: "card_1.jpg",
      alt: "foto",
      title: "Salvador Stewart Flynn Thomas Salva Salve...",
      position: "Leading specialist of the department of cent...",
      email: "frontend_develop@gmail.com",
      phone: "+38 (098) 278 44 24",
    },
    {
      image: "card_2.jpg",
      alt: "foto",
      title: "Takamaru Ayako Jurrien",
      position: "Lead Independent Director",
      email: "Takamuru@gmail.com",
      phone: "+38 (098) 278 90 24",
    },
    {
      image: "card_3.jpg",
      alt: "foto",
      title: "Ilya",
      position: "Co-Founder and CEO",
      email: "Ilya_founder@gmail.com",
      phone: "+38 (098) 235 44 24",
    },
    {
      image: "card_4.jpg",
      alt: "foto",
      title: "Alexandre",
      position: "Lead Independent Director",
      email: "Alexandr_develop@gmail.com",
      phone: "+38 (098) 198 44 24",
    },
    {
      image: "card_5.jpg",
      alt: "foto",
      title: "Winny",
      position: "Former Senior Director",
      email: "Winny_develop@gmail.com",
      phone: "+38 (098) 278 22 88",
    },
    {
      image: "card_6.jpg",
      alt: "foto",
      title: "Simon",
      position: "President of Commerce",
      email: "Simon@gmail.com",
      phone: "+38 (098) 278 44 00",
    },
  ];
  //***************************************** */

  //  const [cards, setCards] = useState(cardsItem)
  return (
    <section className={classes.workingGet}>
      <div className={`container`}>
        <div className={classes.workingGet__inner}>
          <h2 className={`title`}>Working with GET request</h2>
          <ul className={classes.workingGet__list}>
            {cards.map((elem, index) => (
              <Cart key={index} {...elem} />
            ))}
          </ul>
          <div className={classes.workingGet__btn}>
            <button className={`button`}>Show more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingGet;

// Module build failed (from ./node_modules/babel-loader/lib/index.js):
// SyntaxError: D:\HILeL\figma\progect-12_0306_24_test_typeScript\test_task\src\components\Main\WorkingGet\WorkingGet.tsx: Missing semicolon. (30:3)

//   28 |
//   29 |
// > 30 | You can either move it inside src/, or add a symlink to it from project's node_modules/.
// npm install --save-dev react-app-alias
