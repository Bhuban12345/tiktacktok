import React from "react";
import GridItem from "./GridItem";

class GridRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="grid-row">
          {[0, 1, 2].map((item) => {
            return (
              <GridItem
                colIndex={item}
                rowIndex={this.props.index}
                initialState={this.props.initialState}
                updateValue={this.props.updateValue}
              />
            );
          })}
        </div>
      </>
    );
  }
}
export default GridRow;
