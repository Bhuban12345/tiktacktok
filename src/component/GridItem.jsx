import React from "react";

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div
          className="grid-item"
          onClick={() => {
            this.props.updateValue(this.props.rowIndex, this.props.colIndex);
          }}
        >
          {this.props.initialState[this.props.rowIndex][this.props.colIndex]}
        </div>
      </>
    );
  }
}
export default GridItem;
