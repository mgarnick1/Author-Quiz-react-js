import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

export const Card = (props) => {
  return (
    <div style={{ margin: '1em' }}>
      <img src={props.avatar_url} />
      <div style={{ display: "inline-block", marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>{props.login}</div>
      </div>
    </div>
  );
};

let data = [
  { login: "mojombo", avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4" },
  { login: "defunkt", avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4" },
  { login: "pjhyett", avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4" },
];

export const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
   );
}

export class Form extends Component {
    render() {
      return (
      <form>
        <input type="text" placeholder="Github username" />
        <button type="submit">Add Card</button>
      </form>
      );
	}
}


export class List extends Component {
  render() {
    return (
      <div>
        <Form />
        <CardList />
      </div>
    );
  }

}



 ReactDOM.render(<List />, document.getElementById('root'));