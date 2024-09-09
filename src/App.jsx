import { useState } from "react";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { SkillList } from "./components/SkillList";
import "./styles.css";
import { Activities } from "./components/Activities";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState(null);
  const [view, setView] = useState(false);
  const [searchedName, setSearchedName] = useState("");

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
      setSearchedName(name);
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
      <SkillList data={data} view={view} name={searchedName}></SkillList>
      <Activities data={data} view={view}></Activities>
    </div>
  );
}
