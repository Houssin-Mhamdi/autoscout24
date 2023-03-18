import "./styles.css";
import { useState } from "react";
export default function App() {
  const volvo = ["volvo1", "volvo2", "volvo3", "volvo4", "volvo5"];
  const bmw = ["bmw1", "bmw2", "bmw3", "bmw4", "bmw5"];
  const marsades = [
    "marsades1",
    "marsades2",
    "marsades3",
    "marsades4",
    "marsades5"
  ];
  const opel = ["opel1", "opel2", "opel3", "opel4", "opel5"];
  const isusue = ["isusue1", "isusue2", "isusue3", "isusue4", "isusue5"];
  const pegut = ["pegut1", "pegut2", "pegut3", "pegut4", "pegut5"];
  const motors = ["motors1", "motors2", "motors3", "motors4", "motors5"];

  const options = [
    { value: "", text: "" },
    { value: "volvo", text: "volvo" },
    { value: "marsades", text: "marsades" },
    { value: "opel", text: "opel" },
    { value: "isusue", text: "isusue" },
    { value: "pegut", text: "pegut" },
    { value: "motors", text: "motors" }
  ];
  const [selected, setSelected] = useState(options[0].value);
  const [selected2, setSelected2] = useState();
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    if (event.target.value === "volvo") {
      setSelected2(volvo);
    }
    if (event.target.value === "bmw") {
      setSelected2(bmw);
    }
    if (event.target.value === "marsades") {
      setSelected2(marsades);
    }
    if (event.target.value === "opel") {
      setSelected2(opel);
    }
    if (event.target.value === "isusue") {
      setSelected2(isusue);
    }
    if (event.target.value === "pegut") {
      setSelected2(pegut);
    }
    if (event.target.value === "motors") {
      setSelected2(motors);
    }

    //setSelected(event.target.value);
  };

  const handleChange2 = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <div>
        <select value={selected.text} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>

      <select id="cars" name="cars" value={value} onChange={handleChange2}>
        {selected2?.map((volvos, index) => {
          return (
            <option key={index} value={volvos}>
              {volvos}
            </option>
          );
        })}
      </select>
    </div>
  );
}
