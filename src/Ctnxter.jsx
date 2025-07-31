// import themMode from

import useTheme from "./contexts/contxt";

function Ctnxter() {
  const { darktheme, themMode, setThemMode } = useTheme();
  const handleClick = () => {
    setThemMode((p) => setThemMode(p + 1));
  };
  return (
    <div>
      <p>{themMode}</p>
      <button onClick={() => handleClick()}>click</button>
    </div>
  );
}

export default Ctnxter;
