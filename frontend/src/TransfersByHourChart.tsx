import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const url = new URL(`https://api.tinybird.co/v0/pipes/TRANSFERS_BY_HOUR.json`);

const TransfersByHourChart = () => {
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization:
          "Bearer p.eyJ1IjogIjQwMDA1NGRhLTA5OGMtNDY2ZC1iNTk3LTcxNWJkYTA4YzRlOCIsICJpZCI6ICI2MjMwMmE4Ni1hNTNkLTRiYTctYmRjNS01ODFlYWJiNWU0NWIifQ.ykMHLCgbY1aLJg36TxazKHVssOG64Tmi5OBbpYBPcFU",
      },
    })
      .then((r) => r.json())
      .then(setData)
      .catch(console.log);
  }, []);

  if (!data) return <span>Loading...</span>;

  return (
    <>
      <h1 className="text-3xl font-bold mt-10 mb-6">
        Transferred usdc volume per hour (01.10.2022)
      </h1>

      <BarChart width={500} height={400} data={data.data}>
        <XAxis dataKey="hour" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </>
  );
};

export default TransfersByHourChart;
