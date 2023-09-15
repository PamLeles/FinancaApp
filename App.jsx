import React, { useState, useEffect } from "react";

import Home from "./src/pages/Home/index";
import Loading from "./src/pages/Loading";
import { View } from "moti";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return <View style={{ flex: 1 }}>{isLoading ? <Loading /> : <Home />}</View>;
}
export default App;
