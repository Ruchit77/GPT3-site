import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's build something amazing with GPT-3 OPENAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rerum
          iusto ullam, eveniet cum iure, quisquam numquam magnam esse est
          suscipit aut accusantium accusamus? Voluptatibus reiciendis culpa
          nesciunt mollitia commodi!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="your email address here" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            dolorem.
          </p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
