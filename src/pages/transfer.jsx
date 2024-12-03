import './transfer.css';

function transfer() {
  const handleLloydsTransfer = () => {
    console.log("Transfer to another Lloyds user clicked");
   
  };

  const handleExternalBankTransfer = () => {
    console.log("Transfer to external bank clicked");
  
  };

  return (
    <div className='TransferButton'>
      <button onClick={handleLloydsTransfer}>Transfer to another Lloyds User</button>
      <button onClick={handleExternalBankTransfer}>Transfer to external bank</button>
    </div>
  );
}

export default transfer;
