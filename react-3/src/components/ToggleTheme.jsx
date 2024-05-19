import "../App.css";
import { useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(true);
  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div className={theme ? "light-theme" : "dark-theme"}>
      <button className=" app" onClick={changeTheme}>
        change theme
      </button>
      <p>{theme ? "light theme" : "dark theme"}</p>
    </div>
  );
}
