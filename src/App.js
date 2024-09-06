import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
class User extends React.Component {
  render() {
    return (
      <div className="users">
        <img className="icon" src="images/user.png" />
        <div className="right">
          <div className="top">
            <h3>Player {this.props.id}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta
              expedita voluptatum molestiae praesentium suscipit cumque,
              eligendi saepe iusto quaerat exercitationem obcaecati ullam
              provident asperiores ut autem natus quos neque dolore.
            </p>
          </div>
          <div className="bot">
            <h3>Achievements</h3>
            <FontAwesomeIcon icon={faMedal} className="medalGold" />
            <FontAwesomeIcon icon={faMedal} className="medalSilver" />
            <FontAwesomeIcon icon={faMedal} className="medalBronze" />
          </div>
        </div>
      </div>
    );
  }
}
class App extends React.Component {
  render() {
    return (
      <div className="item">
        <h2 className="title">Wuthering Waves</h2>
        <User id="1"></User>
        <User id="2"></User>
        <User id="3"></User>
      </div>
    );
  }
}
export default App;
// Necessities
// Class has to be the one extended with React.Component
// There must be a render method
// There has to be a return of an element
// NEVER FORGET TO END WITH export default App;
