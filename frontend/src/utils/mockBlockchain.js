// Simple mock blockchain ledger
let ledger = [];

export function addToLedger(action, data) {
  const block = {
    blockNumber: ledger.length + 1,
    timestamp: new Date().toISOString(),
    action,
    data,
    txHash: Math.random().toString(36).substring(2, 10)
  };
  ledger.push(block);
  return block;
}

export function getLedger() {
  return ledger;
}
