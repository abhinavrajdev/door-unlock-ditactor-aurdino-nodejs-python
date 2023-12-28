import { useEffect, useState } from "react";
import axios from "axios"

var res= ""


function App() {

const [stats, set_stats]= useState("ii")

const interval = setInterval(() => {
  // axios.get("http://127.0.0.1:5000/stats").then((response) => {
    axios.get("https://sense.abhraj.com/stats").then((response) => {
    res= response.data.stats
    set_stats(res)
  });
}, 100);

  return (
    <div className="h-screen w-screen py-4 px-2">
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-black tracking-wide">Door Security IOT</h1>
        {stats}
      </div>
    </div>
  );
}

export default App;
