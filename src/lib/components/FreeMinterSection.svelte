<script>
	import MinuseImg from '$lib/assets/imgs/minuse.svg';
	import PluseImg from '$lib/assets/imgs/pluse.svg';
	import ContractABI from '$lib/abi/contracts/FractionalizedFreeMint.sol/FractionalizedFreeMint.json';
  import { ethers } from "ethers";

  const roundInfo = {
			price: "Free",
			maxMint: 1,
			mintStartTime: new Date('Fri, 24 Mar 2023 16:00:00 GMT')
  }

  const contractAddress = "0xb0b022BE9FbE33e725b4fbD71CaF95641e50d42F"
	let mintAmount = 1;
  let userBalance = 0;
  let provider = null;
  let signer = null;
  let minter = null;
  let minterSigned = null;

  $: if (metamaskConnection == true) {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()

    minter = new ethers.Contract(contractAddress,ContractABI, provider);
    minterSigned = minter.connect(signer);

    setUserTokenBalance()
  }

	const onIncreaseBtnClicked = () => {
    if (mintAmount < roundInfo.maxMint) mintAmount++;
	};

	const onDecreaseBtnClicked = () => {
    if (mintAmount > roundInfo.maxMint) mintAmount--;
	};

  async function setUserTokenBalance(){
    if(provider == null || minter == null || signer == null || minterSigned == null){ return; }

    let whiteListData = await minter.whiteList(window.ethereum.selectedAddress)
    userBalance = whiteListData[1]
  }

  async function handleMint(){
    try{
      const tx = await minterSigned.mint()
      await tx.wait();

      alert("Mint Successfull")
      setUserTokenBalance()
    }catch(e){
      if(e.code != null && e.reason != null){
        let error = e.reason.split(':')[1].trim()
        alert(error)
      }else{
        console.log(e)
      }
    }
  }

  async function connectWallet(){
    if (typeof window.ethereum !== 'undefined') {
      try{
        await ethereum.request({ method: 'eth_requestAccounts' });
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
        updateMetamaskConnection(true)
      }catch(e){
        console.log(e)
      }
    }else{
      alert("Metamask Wallet Not Connected")
    }
  }

  export let metamaskConnection,updateMetamaskConnection;
</script>

<main>
  <div
    class="bg-[rgba(78,66,88,0.5)] p-4 flex flex-col gap-8 border-[rgba(255,255,255,0.15)] border-[1px]"
    >
    <div>
      <p class="text-[30px] leading-[38px] text-white">Round 1: Holders and OGs</p>
      <div class="mt-3">
        <p class="text-2xl text-[#EAECF0]">
          When: <span class="ml-3">TBA</span>
        </p>
        <p class="text-2xl text-[#EAECF0]">
          Price: <span class="ml-3">{roundInfo.price}</span>
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <p class="text-2xl text-[#EAECF0]">Max mint: {roundInfo.maxMint}</p>
      <div
        class="flex w-full justify-between items-center p-3 border-[1px] border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.1)]"
        >
        <button class="w-6 h-6 text-2xl" on:click={onDecreaseBtnClicked}
          ><img class="w-6 h-6" src={MinuseImg} alt="" /></button
        >
        <p class="text-4xl leading-9">{mintAmount}</p>
        <button class="w-6 h-6 text-2xl" on:click={onIncreaseBtnClicked}
          ><img class="w-6 h-6" src={PluseImg} alt="" /></button
        >
      </div>
      {#if metamaskConnection}
        {#if userBalance < roundInfo.maxMint}
          <button class="w-full py-3 text-4xl leading-9 bg-white outline-none uppercase text-[#344054]"
            on:click={handleMint}
          >Mint</button>
        {:else}
          <button class="w-full py-3 text-4xl leading-9 bg-white outline-none uppercase text-[#344054]">Already Minted</button>
        {/if}
      {:else}
        <button class="w-full py-3 text-4xl leading-9 bg-white outline-none uppercase text-[#344054]"
          on:click={connectWallet}
        >Connect Metamask</button>
      {/if}
    </div>
    <div>
      {#if metamaskConnection}
        <p class="text-2xl text-[#EAECF0] flex w-full justify-between">Total minted <span>{userBalance}</span></p>
      {/if}
    </div>
  </div>

</main>
