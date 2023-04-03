<script>
	import MinuseImg from '$lib/assets/imgs/minuse.svg';
	import PluseImg from '$lib/assets/imgs/pluse.svg';
	import Loader from '$lib/components/Loader.svelte';
	import ContractABI from '$lib/abi/contracts/FractionalizedFreeMint.sol/FractionalizedFreeMint.json';
  import { ethers } from "ethers";
  import { freeMinter as contractAddress } from '$lib/constants/contracts.js';
  import Swal from 'sweetalert2'

  const roundInfo = {
			price: "Free",
			maxMint: 1,
			mintStartTime: new Date('Fri, 24 Mar 2023 16:00:00 GMT')
  }

	let mintAmount = 1;
  let userBalance = 0;
  let provider = null;
  let signer = null;
  let minter = null;
  let minterSigned = null;
  let mintBtnLoading = false;
  let isMintedPaused = false;

  $: if (metamaskConnection == true) {
    provider = new ethers.providers.Web3Provider(window.ethereum)
    signer = provider.getSigner()

    minter = new ethers.Contract(contractAddress,ContractABI, provider);
    minterSigned = minter.connect(signer);

    setMinterPausedState()
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

  async function setMinterPausedState(){
    if(provider == null || minter == null || signer == null || minterSigned == null){ return; }

    let isPaused = await minter.paused()
    isMintedPaused = isPaused
  }

  async function handleMint(){
    if(mintBtnLoading) return;

    mintBtnLoading = true

    try{
      const tx = await minterSigned.mint()
      await tx.wait();

      Swal.fire({ text: "Mint Successful", icon: "success" })
      mintBtnLoading = false
      setUserTokenBalance()
    }catch(e){
      mintBtnLoading = false

      if(e.data != null && e.data.message != null){
        let error = e.data.message.split('revert')[1].trim()
        Swal.fire({ text: error, icon: "error" })
      }else if(e.reason != null){
        let error = e.reason.split(':')[1].trim()
        Swal.fire({ text: error, icon: "error" })
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
        {#if isMintedPaused}
          <button class="flex items-center justify-center w-full py-3 text-4xl leading-9 bg-white outline-none uppercase text-[#344054]">Not Started</button>
        {:else if userBalance < roundInfo.maxMint}
          <button class="flex items-center justify-center w-full py-3 text-4xl leading-9 bg-white outline-none uppercase text-[#344054]"
            on:click={handleMint}
          >
            {#if mintBtnLoading}
              <Loader className="w-7 h-auto" />
            {:else}
              Mint
            {/if}
          </button>
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
