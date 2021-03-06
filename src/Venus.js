import SuperfluidSDK from "@superfluid-finance/js-sdk"
import { Web3Provider } from"@ethersproject/providers"
// Goerli:
const fDAIx = "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00"
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
        token: fDAIx
      })
      const details = await carol.details()

      console.log(details)

      await carol.flow({
       recipient: '0xA8f3447922d786045CB582B0C825723B744a54df',
       flowRate: '385802469135802'
      });

      console.log(details)

      await carol.flow({
       recipient: '0xA8f3447922d786045CB582B0C825723B744a54df',
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
