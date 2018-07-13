import React from 'react';
import {connect} from 'react-redux';
import pokemonArr from './pokemonIcons/pokemonArr';

import { pickBuddy, closeBuddis } from '../actions/buddy';

export function BuddySelect(props){

  const listItems = pokemonArr.map((item, index) => {
    return (
      <li key={index}>
        <button
          onClick={()=> {
            props.dispatch(pickBuddy(item.value));
            props.dispatch(closeBuddis());
          }
          }
        >
          {item.icon}
        </button>
      </li>);
  });

  return (
    <ul>
      {listItems}
    </ul>
  );
  
}

export default connect()(BuddySelect);