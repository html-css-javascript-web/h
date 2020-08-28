'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);

const square = React.createElement('div', {
  style: {
    width: '100px',
    height: '100px',
    backgroundColor: 'red',
    margin: '10px',
  }
})

const container = React.createElement(
  // The first argument specifies the element's type
  'div',

  // The second argument specifies the element's attributes, or "props"
  { style: { border: '5px solid blue' } },

  // The remaining arguments list the element's children
  square,
  square
)

ReactDOM.render(container, document.getElementById('app'))
