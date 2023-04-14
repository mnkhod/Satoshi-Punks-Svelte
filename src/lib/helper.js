import { production } from "./constants/chain"

async function connectWallet(updateMetamask){
  if (typeof window.ethereum !== 'undefined') {
    try{
      await ethereum.request({ method: 'eth_requestAccounts' });

      if(production){
        await connectToMainNet()
      }else{
        // await connectToGanache()
        await connectToFuji()
      }

      updateMetamask(true)
    }catch(e){
      console.log(e)
      updateMetamask(false)
    }
  }else{
    alert("Metamask Wallet Not Connected")
  }
}

async function connectToMainNet(){
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x' + (1).toString(16) }],
    });
  } catch(e){
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x' + (1).toString(16),
          chainName: 'Ethereum',
          nativeCurrency: {
            name: "Ethereum",
            symbol: 'ETH',
            decimals: 18,
          },
          rpcUrls: ['https://mainnet.infura.io/v3/'],
          blockExplorerUrls: ['https://etherscan.io'],
        },
      ],
    });

  }
}

async function connectToFuji(){
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x' + (43113).toString(16) }],
    });
  } catch(e){
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: '0x' + (43113).toString(16),
          chainName: 'Avalanche Fuji Testnet',
          nativeCurrency: {
            name: "Avalanche",
            symbol: 'AVAX',
            decimals: 18,
          },
          rpcUrls: ['https://rpc.ankr.com/avalanche_fuji'],
          blockExplorerUrls: ['https://testnet.snowtrace.io/'],
        },
      ],
    });

  }
}

async function connectToGanache(){
  await ethereum.request({
    method: 'wallet_addEthereumChain',
    params: [
      {
        chainId: '0x' + (1337).toString(16),
        chainName: 'Ganache',
        nativeCurrency: {
          name: "Ethereum",
          symbol: 'ETH',
          decimals: 18,
        },
        rpcUrls: ['http://127.0.0.1:7545'],
        blockExplorerUrls: ['http://127.0.0.1:7545'],
      },
    ],
  });
}

export {
  connectWallet
}
