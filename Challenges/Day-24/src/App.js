import "./App.css";
import LinesChart from "./Graphics/LinesChart";
import BarsChart from "./Graphics/BarsChart";
import PiesChart from "./Graphics/PiesChart";

function App() {
  return (
    <div className="container">
      <h1 className="title">Graphics ChartJS</h1>
      <div>
        <p className="sub_title">Line chart</p>
        <div className="chart_container">
          <LinesChart />
        </div>
      </div>
      <div>
        <p className="sub_title">Bar chart</p>
        <div className="chart_container">
          <BarsChart />
        </div>
      </div>
      <div>
        <p className="sub_title">Pie chart</p>
        <div className="chart_container">
          <div className="chart_container_pies">
            <PiesChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
