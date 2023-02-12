import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const arr = Array(50)
    .fill()
    .map((_, i) => i);

  if (count > 50) {
    setCount(0);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const randomColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

  return (
    <div className="parent">
      {arr.map((item, idx) => (
        <div
          key={idx}
          className={`child ${idx} `}
          style={{
            backgroundColor: `${count === item ? `${randomColor}` : ""}`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;
