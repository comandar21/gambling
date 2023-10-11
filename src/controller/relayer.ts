import Web3 from 'web3';

const Provider = 'LINEA_Provider';
const web3Linea = new Web3(Provider);
const pvtKey = 'YOUR_LINEA_PRIVATE_KEY';


const sendTxn = async (req: Request, res: Response) => {

    const lineaTransaction = {
        to: 'LINEA_RECEIVER_ADDRESS',
        value: '0x00',
        data: req.body.signTxn,
        gas: 'GAS_LIMIT',
        gasPrice: 'GAS_PRICE',
    };

    const signedTransaction = await web3Linea.eth.accounts.signTransaction(lineaTransaction, pvtKey);


    web3Linea.eth.sendSignedTransaction(signedTransaction.rawTransaction)
        .on('receipt', (receipt) => {
            console.log(receipt)
        })
        .on('error', (err) => {
            console.log(err)
        })
}

export default sendTxn;