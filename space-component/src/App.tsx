import Space from "./Space";
import "./App.css";

export default function App() {
  return (
    <div>
      <Space direction="horizontal" align="end">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </Space>
    </div>
  );
}
