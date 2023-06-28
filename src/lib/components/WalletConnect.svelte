<script>
	import MetamaskImg from '$lib/assets/imgs/metamask.svg';
	import OkxImg from '$lib/assets/imgs/okx.png';
	import BitcoinImg from '$lib/assets/imgs/bitcoin.png';
	import EthereumImg from '$lib/assets/imgs/ethereum.png';

	import CloseImg from '$lib/assets/imgs/close.svg';

	let isModuleOpen = false;

	function closeModule() {
		isModuleOpen = false;
	}
</script>

<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
	<div
		class="bg-[url('./lib/assets/imgs/bg.png')] p-8 rounded-2xl shadow-lg border-white border-opacity-50 border w-[600px] h-[600px]"
	>
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
			Choose how you want to connect. If you don't have a wallet, you can select a provider and
			create one.
		</p>

		<div class="flex justify-around mb-4">
			<button
				class="bg-black bg-opacity-25 border hover:bg-opacity-50 text-2xl text-white font-bold py-2 px-4 rounded-full"
			>
				<div
					class="
			flex items-center justify-center
			"
				>
					<img class="w-6 h-6 " src={BitcoinImg} alt="bitcoin" />Bitcoin
				</div>
			</button>
			<button
				class="bg-black bg-opacity-25 border hover:bg-opacity-50 text-2xl text-white font-semibold py-2 px-4 rounded-full"
			>
				<div
					class="
			flex items-center justify-center
			"
				>
					<img class="w-6 h-6" src={EthereumImg} alt="ethereum" />Ethereum
				</div>
			</button>
		</div>

		<div class="flex flex-col items-center" />
		<button
			class="bg-green-500 hover:bg-green-700 text-white font-base py-2 px-4 rounded mb-2"
			type="submit"
			><div
				class="
					flex items-center justify-center
			"
			>
				<img class="w-6 h-6" src={MetamaskImg} alt="metamask" />
				Metamask
			</div>
		</button>
		<button class="bg-red-500 hover:bg-red-700 text-white font-base py-2 px-4 rounded">
			<div
				class="
			flex items-center justify-center
			"
			>
				<img class="w-6 h-6" src={OkxImg} alt="okxwallet" />
				OKX Wallet
			</div>
		</button>
	</div>
</div>
