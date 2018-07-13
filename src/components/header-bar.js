import React from 'react';
import {connect} from 'react-redux';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';
import './header-bar.css';
import Pokeball from './pokemonIcons/Pokeball';
import pokemonArr from './pokemonIcons/pokemonArr';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    let username;
    let buddyIcon = pokemonArr.map(item => {
      if (item.value === this.props.buddy){
        return item.icon;
      }
    });
    if (this.props.loggedIn) {
      logOutButton = (
        <button onClick={() => this.logOut()}>Log out</button>
      );
      username = <p>{this.props.user.username}</p>;
    }

    return (
      <header className="main-header">
        <div>
          <h1 className="logo">Guessmon</h1>
          <Pokeball />
        </div>
        {logOutButton}
        {username}
        {buddyIcon}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  user : state.auth.currentUser,
  buddy : state.buddy.pokemon
});

export default connect(mapStateToProps)(HeaderBar);
