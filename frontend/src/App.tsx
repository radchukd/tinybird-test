import TransfersByHourChart from "./TransfersByHourChart";
import TransfersToUNINFTPosChart from "./TransfersToUNINFTPosChart";

function App() {
  return (
    <div className=" flex flex-col items-center w-full">
      <TransfersToUNINFTPosChart />
      <TransfersByHourChart />
    </div>
  );
}

export default App;
