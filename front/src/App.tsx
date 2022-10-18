import { useState } from "react";
import axios from "axios";

type Type = {
  Hello: string;
};

function App() {
  const [data, setData] = useState<Type>();
  const url = "http://127.0.0.1:8000";

  const GetData = () => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div>
      {data ? (
        <div>{data.Hello}</div>
      ) : (
        <button onClick={GetData}>データを取得</button>
      )}
    </div>
  );
}

export default App;
