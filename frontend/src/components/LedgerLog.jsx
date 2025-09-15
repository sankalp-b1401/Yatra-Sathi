import { getLedger } from "../utils/mockBlockchain";

export default function LedgerLog() {
  const ledger = getLedger();

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Blockchain Ledger (Demo)</h2>
      <div className="space-y-2">
        {ledger.map((block, idx) => (
          <div key={idx} className="border p-3 rounded">
            <p><b>Block:</b> {block.blockNumber}</p>
            <p><b>TxHash:</b> {block.txHash}</p>
            <p><b>Action:</b> {block.action}</p>
            <p><b>Time:</b> {block.timestamp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
