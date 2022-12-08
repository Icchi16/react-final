import React from "react";
import Head from "next/head";
import { Button } from "antd";

const App = () => {
  return (
    <div>
      <h1 className="text-1xl font-bold underline">Hello world!</h1>

      <Button size="large" type="primary">
        Button
      </Button>

      <Button size="large" type="primary" className="bg-primary border-primary">
        Button
      </Button>
    </div>
  );
};

export default App;
