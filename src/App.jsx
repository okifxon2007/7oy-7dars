import React, { useState } from "react";
import useDebounce from "./utils/useDebounce";

const App = () => {
  const [src, setSrc] = useState('');
  const query = useDebounce(src, 300);

  function handleDebounceChange(e) {
    setSrc(e.target.value);
  }

  return (
    <div>
      <div>
        <h1>useDebounce</h1>
        <input
          type="text"
          value={src}
          onChange={handleDebounceChange}
          placeholder="Text"
        />
        <p>
          matn: {query}
        </p>
      </div>
    </div>
  );
};

export default App;
