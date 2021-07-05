import SuperfluidSDK from "@superfluid-finance/js-sdk"
import { Web3Provider } from"@ethersproject/providers"
// Goerli:
const ETHx = "0x5943F705aBb6834Cad767e6E4bB258Bc48D9C947"
// Rinkeby:
//const fDAIx = "0x15F0Ca26781C3852f8166eD2ebce5D18265cceb7"

const Venus = () => {

  const getDetails = async () => {
     alert('I am connected');
      // initialize Superfluid Framework
      const sf = new SuperfluidSDK.Framework({
          ethers: new Web3Provider(window.ethereum)
      })
      await sf.initialize()

      // request wallet address
      const walletAddress = await window.ethereum.request({
        method: 'eth_requestAccounts',
        params: [
          {
            eth_accounts: {}
          }
        ]
      })

      // get user and details
      const carol = sf.user({
        address: walletAddress[0],
        token: ETHx
      })
      const details = await carol.details()

      console.log(details)

      await carol.flow({
       recipient: '0x8ced5ad0d8da4ec211c17355ed3dbfec4cf0e5b9',
       flowRate: '38'
      });

      console.log(details)

      await carol.flow({
       recipient: '0x8ced5ad0d8da4ec211c17355ed3dbfec4cf0e5b9',
       flowRate: '0'
      });

      console.log(details)
  }

  return (
    <div>
      <button onClick={() => getDetails()}>Get Details</button>
    </div>
  )
}

export default Venus;
