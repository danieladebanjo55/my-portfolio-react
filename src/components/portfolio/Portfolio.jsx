import { useState } from "react";
import "./Portfolio.scss";
import PortfolioList from "./portfolioList/PortfolioList";

const list = [
  {
    id: "web",
    title: "Web App",
  },
  {
    id: "mobile",
    title: "Mobile App",
  },
  {
    id: "web3",
    title: "Web3 App",
  },
  {
    id: "smart",
    title: "Smart Contract",
  },
];
export default function Portfolio() {
  const [selected, setSelected] = useState("web");

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2564256/screenshots/13948894/media/e63a8ab8374cb5c9042fe62397130dff.png"
            alt="item__image"
          />
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2564256/screenshots/13948894/media/e63a8ab8374cb5c9042fe62397130dff.png"
            alt="item__image"
          />
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2564256/screenshots/13948894/media/e63a8ab8374cb5c9042fe62397130dff.png"
            alt="item__image"
          />
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2564256/screenshots/13948894/media/e63a8ab8374cb5c9042fe62397130dff.png"
            alt="item__image"
          />
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2564256/screenshots/13948894/media/e63a8ab8374cb5c9042fe62397130dff.png"
            alt="item__image"
          />
          <h3>Travel App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.dribbble.com/users/2564256/screenshots/13948894/media/e63a8ab8374cb5c9042fe62397130dff.png"
            alt="item__image"
          />
          <h3>Travel App</h3>
        </div>
      </div>
    </div>
  );
}
