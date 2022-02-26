import React from "react";
import "./App.css";
import GridRow from "./component/GridRow";

class TikTackTock extends React.Component {
  constructor() {
    super();
    this.state = {
      initialState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      turn: "X"
    };
  }
  updateValue = (row, col) => {
    const Arr = this.state.initialState;
    Arr[row][col] = this.state.turn;
    this.setState({
      turn: this.state.turn === "X" ? "0" : "X",
      initialState: Arr
    });
  };
  render() {
    return (
      <>
        <h1>Tik Tack Tok </h1>
        <div className="container">
          {[0, 1, 2].map((item) => {
            return (
              <GridRow
                index={item}
                initialState={this.state.initialState}
                updateValue={this.updateValue}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default TikTackTock;
