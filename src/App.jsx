import Chart from "./Components/Chart/Chart";
import Header from "./Components/Header/Header";
import Pricing from "./Components/Pricing/Pricing";

function App() {
  return (
    <div className="App text-center">
      <Header/>
      <Pricing/>
      <Chart/>
    </div>
  );
}

export default App;
