import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="tasbih">
      <h1>Tasbih Counter</h1>
      <h2 className="tasbih__counter">{count}</h2>
      <div className="tasbih__btns">
        <button
          className="btn"
          onClick={count > 65 && count < 100 && handleIncrement}
        >
          الله أكبر
        </button>

        <button
          className="btn"
          onClick={count > 32 && count < 66 && handleIncrement}
        >
          ٱلْحَمْدُ لِلَّٰهِ
        </button>
        <button className="btn" onClick={count < 33 && handleIncrement}>
          سبحان الله
        </button>
      </div>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
