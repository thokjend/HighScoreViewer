export function Input({ inputText, setInputText }) {
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <input
      className="input-field"
      type="text"
      value={inputText}
      onChange={handleChange}
    />
  );
}
