import React from 'react';

export default function QuestionCard(props){
  return (
    <main>
      <section className="main-section">
        <div className="card">
          <img className="pokemon-img" src="https://vignette.wikia.nocookie.net/pokemon/images/6/6b/175Togepi.png/revision/latest/scale-to-width-down/200?cb=20140329013336" alt="The Pokemon Togepi"/>
          <p>display text will go here</p>
        </div>
        <form className="card-form">
          <input type="text" className="user-guess" name="user_guess"/>
          <button type="submit" className="answer-sub-btn">Guess!</button>
        </form>
      </section>
    </main>
  );
}