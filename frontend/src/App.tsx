import TopTransfersChart from "./TopTransfersChart";
import TransfersByHourChart from "./TransfersByHourChart";
import TransfersToUNINFTPosChart from "./TransfersToUNINFTPosChart";

function App() {
  return (
    <div className="flex flex-col items-center w-full gap-5">
      <TopTransfersChart />
      <TransfersToUNINFTPosChart />
      <TransfersByHourChart />
    </div>
  );
}

export default App;
