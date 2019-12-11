import React from "react";

export const MyContext = React.createContext();

class MyProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: () => {
        localStorage.clear();
      },
      user: this.props.user.id
    };
  }
  componentDidMount() {
    this.setState({ user: this.props.user });
  }
  render() {
    return (
      <MyContext.Provider value={this.state} user={this.props.user}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default MyProvider;
