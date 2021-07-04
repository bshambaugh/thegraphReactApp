import SuperfluidSDK from "@superfluid-finance/js-sdk"
import { Web3Provider } from"@ethersproject/providers"

const sf = new SuperfluidSDK.Framework({
    ethers: new Web3Provider(window.ethereum)
});

export function connect() {

   delayES8()
   .catch((err) => console.error(err));

}

async function delayES8() {
    await sf.initialize();
  //return;


const walletAddress = await window.ethereum.request({
  method: 'eth_requestAccounts',
  params: [
    {
      eth_accounts: {}
    }
  ]
});

const carol = sf.user({
    address: walletAddress[0],
    token: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00'
});

const details = await carol.details();
alert(details);

return;
}
