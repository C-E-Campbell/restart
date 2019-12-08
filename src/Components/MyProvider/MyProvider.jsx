import React from "react";

export const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    log: () => {
      localStorage.clear();
    },
    loggingIn: true
  };

  render() {
    return (
      <MyContext.Provider value={this.state.log}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
