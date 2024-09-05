export function Input({ inputText, setInputText }) {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return <input type="text" value={inputText} onChange={handleChange} />;
}
