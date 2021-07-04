import SuperfluidSDK from "@superfluid-finance/js-sdk"
import { Web3Provider } from"@ethersproject/providers"
const fDAIx = "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00"

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
  }

  return (
    <div>
      <button onClick={() => getDetails()}>Get Details</button>
    </div>
  )
}

export default Venus;
