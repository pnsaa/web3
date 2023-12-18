// React component (e.g., App.js)

import React, { useState } from 'react';
import { Connection, PublicKey, Keypair, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';

const App = () => {
  const [data, setData] = useState('Hello Solana');

  const sendDataToSolana = async () => {
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
    const programId = new PublicKey('ZbYdaBBWSn2d5xwDCWBLoMHfcD9a2aMUvbeciibzQgb');

    // Create a Keypair for the user's wallet
    const fromWallet = Keypair.generate();

    // Create a Transaction to send data to the Solana program
    const transaction = new Transaction().add({
      keys: [
        { pubkey: fromWallet.publicKey, isSigner: true, isWritable: true },
        // Add other account keys as needed
      ],
      programId,
      data: Buffer.from(data),
    });

    // Sign and send the transaction
    await sendAndConfirmTransaction(connection, transaction, [fromWallet]);

    console.log('Data sent to Solana');
  };

  return (
    <div>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={sendDataToSolana}>Send Data to Solana</button>
    </div>
  );
};

export default App;
