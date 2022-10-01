import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const url = new URL(`https://api.tinybird.co/v0/pipes/UNI_V3_POS.json`);

const TransfersToUNINFTPosChart = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization:
          "Bearer p.eyJ1IjogIjQwMDA1NGRhLTA5OGMtNDY2ZC1iNTk3LTcxNWJkYTA4YzRlOCIsICJpZCI6ICIxY2VhNjY3Yy0xMjU5LTQ2NzUtOWI2Zi0zM2JiYjA5MDk4OTYifQ.erzcOnjwnV5pj6WiGAsG3eIAvuVVzjribp1b3aeGU_c",
      },
    })
      .then((r) => r.json())
      .then(setData)
      .catch(console.log);
  }, []);

  if (!data) return <span>Loading...</span>;

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">
        Transferred usdc to Uniswap V3: Positions NFT (UNI-V3-POS)
      </h1>

      <BarChart
        width={500}
        height={400}
        data={data.data.map((entry: any) => ({
          ...entry,
          time: new Date(entry.timestamp * 1000).toLocaleTimeString(),
        }))}
      >
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default TransfersToUNINFTPosChart;
