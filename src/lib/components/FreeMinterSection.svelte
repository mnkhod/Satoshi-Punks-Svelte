<script>
	import MinuseImg from '$lib/assets/imgs/minuse.svg';
	import PluseImg from '$lib/assets/imgs/pluse.svg';
	import CloseImg from '$lib/assets/imgs/close.svg';
	import Loader from '$lib/components/Loader.svelte';

	import MetamaskImg from '$lib/assets/imgs/metamask.svg';
	import OkxImg from '$lib/assets/imgs/okx.png';
	import BitcoinImg from '$lib/assets/imgs/bitcoin.png';
	import EthereumImg from '$lib/assets/imgs/ethereum.png';

	import ContractABI from '$lib/abi/contracts/FractionalizedFreeMint.sol/FractionalizedFreeMint.json';
	import { ethers } from 'ethers';
	import { freeMinter as contractAddress } from '$lib/constants/contracts.js';
	import { chainCode } from '$lib/constants/chain.js';
	import { connectWallet, connectOkxWallet } from '$lib/helper.js';
	import Swal from 'sweetalert2';

	const roundInfo = {
		price: 'Free',
		maxMint: 1,
		mintStartTime: new Date('Fri, 24 Mar 2023 16:00:00 GMT')
	};

	let moduleDetail = {
		ethereumSelected: true,
		bitcoinSelected: false
	};

	let isModuleOpen = false;

	function openModule() {
		isModuleOpen = true;
	}

	function closeModule() {
		isModuleOpen = false;
	}

	function handleEthereumButtonClicked() {
		moduleDetail.ethereumSelected = true;
		moduleDetail.bitcoinSelected = false;
	}

	function handleBitcoinButtonClicked() {
		moduleDetail.ethereumSelected = false;
		moduleDetail.bitcoinSelected = true;
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
		provider = new ethers.providers.Web3Provider(window.ethereum);
		signer = provider.getSigner();

		minter = new ethers.Contract(contractAddress, ContractABI, provider);
		minterSigned = minter.connect(signer);

		setMinterPausedState();
		setUserTokenBalance();
	}

	const onIncreaseBtnClicked = () => {
		if (mintAmount < roundInfo.maxMint) mintAmount++;
	};

	const onDecreaseBtnClicked = () => {
		if (mintAmount > roundInfo.maxMint) mintAmount--;
	};

	async function setUserTokenBalance() {
		if (provider == null || minter == null || signer == null || minterSigned == null) {
			return;
		}

		let whiteListData = await minter.whiteList(window.ethereum.selectedAddress);
		userBalance = whiteListData[1];
	}

	async function setMinterPausedState() {
		if (provider == null || minter == null || signer == null || minterSigned == null) {
			return;
		}

		let isPaused = await minter.paused();
		isMintedPaused = isPaused;
	}

	async function handleMint() {
		if (mintBtnLoading) return;

		mintBtnLoading = true;

		try {
			const tx = await minterSigned.mint();
			await tx.wait();

			Swal.fire({ text: 'Mint Successful', icon: 'success' });
			mintBtnLoading = false;
			setUserTokenBalance();
		} catch (e) {
			mintBtnLoading = false;

			if (e.data != null && e.data.message != null) {
				let error = e.data.message.split('revert')[1].trim();
				Swal.fire({ text: error, icon: 'error' });
			} else if (e.reason != null) {
				let error = e.reason.split(':')[1].trim();
				Swal.fire({ text: error, icon: 'error' });
			} else {
				console.log(e);
			}
		}
	}

	export let metamaskConnection,
		updateMetamaskConnection,
		okxWalletConnection,
		updateOkxWalletConnection;
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
					<button
						class="flex items-center justify-center w-full py-3 text-4xl leading-9 bg-white outline-none uppercase text-[#344054]"
						>Finished</button
					>
				{:else if userBalance < roundInfo.maxMint}
					<button
						class="flex items-center justify-center w-full py-3 text-4xl leading-9 bg-white outline-none uppercase text-[#344054]"
						on:click={handleMint}
					>
						{#if mintBtnLoading}
							<Loader className="w-7 h-auto" />
						{:else}
							Mint
						{/if}
					</button>
				{:else}
					<button
						class="w-full py-3 text-4xl leading-9 bg-white outline-none uppercase text-[#344054]"
						>Already Minted</button
					>
				{/if}
			{:else if okxWalletConnection}
				{#if isMintedPaused}
					<button
						class="flex items-center justify-center w-full py-3 text-4xl leading-9 bg-white outline-none uppercase text-[#344054]"
						>Finished</button
					>
				{/if}
				<div class="flex justify-center mt-4">
					<button
						class="w-full py-3 text-4xl leading-9 bg-white outline-none uppercase text-[#344054]"
						on:click={openModule}>Connect Wallet</button
					>
				</div>

				{#if isModuleOpen}
					<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
						<div
							class="bg-[url('./lib/assets/imgs/bg.png')] p-8 rounded-2xl shadow-lg border-white border-opacity-50 border w-[600px] h-[600px]"
						>
							<div class="flex flex-col">
								<!-- Content of your module component goes here -->
								<div
									class="relative w-full h-6
							"
								>
									<button class="absolute w-6 h-6 text-2xl top-0 right-0 " on:click={closeModule}
										><img class="w-6 h-6" src={CloseImg} alt="" /></button
									>
								</div>
								<h1 class="text-6xl font-bold mb-4">Connect a wallet to continue</h1>
								<p class="mb-4 text-2xl">
									Choose how you want to connect. If you don't have a wallet, you can select a
									provider and create one.
								</p>
							</div>

							<div class="flex justify-around mb-4 pt-4">
								<button
									class="bg-black {moduleDetail.bitcoinSelected
										? 'bg-opacity-50'
										: 'bg-opacity-25'} border hover:bg-opacity-50 text-2xl text-white font-bold py-2 px-4 rounded-full"
									on:click={handleBitcoinButtonClicked}
								>
									<div
										class="
								flex items-center justify-center
								"
									>
										<img class="w-6 h-6 mr-2" src={BitcoinImg} alt="bitcoin" />Bitcoin
									</div>
								</button>
								<button
									class="bg-black {moduleDetail.ethereumSelected
										? 'bg-opacity-50'
										: 'bg-opacity-25'} border hover:bg-opacity-50 text-2xl text-white font-semibold py-2 px-4 rounded-full"
									on:click={handleEthereumButtonClicked}
								>
									<div
										class="
								flex items-center justify-center
								"
									>
										<img class="w-6 h-6 mr-2" src={EthereumImg} alt="ethereum" />Ethereum
									</div>
								</button>
							</div>

							<div class="flex flex-col pt-7 space-y-10">
								{#if moduleDetail.ethereumSelected}
									<button
										class="bg-red-500 hover:bg-red-700 text-white font-base py-2 px-4 rounded"
										on:click={() => {
											connectWallet(updateMetamaskConnection);
										}}
									>
										<div
											class="
								flex items-center justify-center
								"
										>
											<img class="w-12 h-12 mr-3" src={OkxImg} alt="okxwallet" />
											<p class="text-4xl">OKX Wallet</p>
										</div>
									</button>
									<button
										class="bg-green-500 hover:bg-green-700 text-white font-base py-2 px-4 rounded mb-2"
										on:click={() => {
											connectWallet(updateMetamaskConnection);
										}}
										><div
											class="
										flex items-center justify-center
								"
										>
											<img class="w-12 h-12 mr-3" src={MetamaskImg} alt="metamask" />
											<p class="text-4xl">Metamask</p>
										</div>
									</button>
								{:else if moduleDetail.bitcoinSelected}
									<button
										class="bg-red-500 hover:bg-red-700 text-white font-base py-2 px-4 rounded"
										on:click={connectOkxWallet(updateOkxWalletConnection)}
									>
										<div
											class="
							flex items-center justify-center
							"
										>
											<img class="w-12 h-12 mr-3" src={OkxImg} alt="okxwallet" />
											<p class="text-4xl">OKX Wallet</p>
										</div>
									</button>
								{/if}
							</div>
						</div>
					</div>
				{/if}
			{/if}
		</div>
		<div>
			{#if metamaskConnection}
				<p class="text-2xl text-[#EAECF0] flex w-full justify-between">
					Total minted <span>{userBalance}</span>
				</p>
			{/if}
		</div>
	</div>
</main>
