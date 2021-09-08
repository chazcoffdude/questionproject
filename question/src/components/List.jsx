import React from "react";
const List = ({ answrs, revealer }) => {
  return answrs.map((questbox) => {                 //question
    const { id, question, answer, image } = questbox;
    return (
      <article key={id} className="list">
        <img src={image} alt="sorry, pal" />
        <div style={{ position: "relative" }}>
          
          <p>{question}</p>
          <button
            style={{
              width: "6.5rem",
              position: "absolute",
              right: 0,
              bottom: "25%",
            }}
            onClick={() => {
              revealer(id);
            }}> Show</button>
            <p className="answer">{answer}</p>
        </div>
      </article>
    );
  });
};

export default List;
