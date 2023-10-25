import React from 'react';

type State = {
  currentKey: string | null;
};

class Message extends React.Component {
  state: State = {
    currentKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ currentKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ currentKey: event.key });
    });
  }

  render() {
    const { currentKey } = this.state;

    return (
      <p className="App__message">
        {currentKey
          ? `The last pressed key is[${currentKey}]`
          : 'Nothing was pressed yet'}
      </p>
    );
  }
}

export default Message;