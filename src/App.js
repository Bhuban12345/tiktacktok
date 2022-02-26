import React from "react";
import TikTackTock from "./TikTackTok";

class App extends React.Component {
  render() {
    const CountArr = [1, 2, 3, 4, 5, 6, 7];
    return (
      <>
        <TikTackTock />
        <h1>Count</h1>
        <ul>
          {CountArr.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </>
    );
  }
}
export default App;
