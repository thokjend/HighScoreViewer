import { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import "./styles.css";
import { SkillList } from "./components/SkillList";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState(null);
  const [view, setView] = useState(false);

  const fetchData = async (name) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/hiscore?player=${name}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
      setView(true);
      console.log(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="container">
      <div className="sub-container">
        <Header />
        <Input inputText={inputText} setInputText={setInputText} />
        <Button onClick={() => fetchData(inputText)} />
      </div>
      <SkillList data={data} view={view}></SkillList>

      {/* <h2>Activities</h2>
          <ul>
            {data.activities.map((activity) => (
              <li key={activity.id}>
                <strong>{activity.name}</strong>: Rank {activity.rank}, Score{" "}
                {activity.score}
              </li>
            ))}
          </ul> */}
    </div>
  );
}
