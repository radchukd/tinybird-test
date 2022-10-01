import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const url = new URL(`https://api.tinybird.co/v0/pipes/TOP_TRANSFERS.json`);

const TopTransfersChart = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization:
          "Bearer p.eyJ1IjogIjQwMDA1NGRhLTA5OGMtNDY2ZC1iNTk3LTcxNWJkYTA4YzRlOCIsICJpZCI6ICI5ZWU3NGY0YS0wM2ZmLTQwYzYtOWZkYy02M2NjN2MwZGYyYTEifQ.23-g_BdSOgguoe3XGQh7Cidc-x1gGYESPLm0LvT0uAs",
      },
    })
      .then((r) => r.json())
      .then(setData)
      .catch(console.log);
  }, []);

  if (!data) return <span>Loading...</span>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Top transferred to addresses</h1>

      <BarChart width={500} height={400} data={data.data}>
        <XAxis dataKey="to" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default TopTransfersChart;
