import React from "react";
import Head from "next/head";
import { Button } from "antd";

const App = () => {
  return (
    <div className="container mx-auto">
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

function get_radiobrowser_base_urls() {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    // If you need https, please use the fixed server fr1.api.radio-browser.info for this request only
    request.open("GET", "http://all.api.radio-browser.info/json/servers", true);
    request.onload = function () {
      if (request.status >= 200 && request.status < 300) {
        var items = JSON.parse(request.responseText).map(
          (x) => "https://" + x.name
        );
        resolve(items);
      } else {
        reject(request.statusText);
      }
    };
    request.send();
  });
}

console.log(get_radiobrowser_base_urls());
