import React from 'react';

function MessageComponent(props) {
  return (
    <div style={{ backgroundColor: props.color, padding: '10px', borderRadius: '8px' }}>
      <p>{props.message}</p>
      <button onClick={props.onClickHandler}>Click Me</button>
    </div>
  );
}

function App() {
  const showAlert = () => {
    alert("Button clicked in React!");
  };

  return (
    <div>
      <MessageComponent 
        color="lightgreen" 
        message="This is a React component with props and events." 
        onClickHandler={showAlert} 
      />
    </div>
  );
}

export default App;
