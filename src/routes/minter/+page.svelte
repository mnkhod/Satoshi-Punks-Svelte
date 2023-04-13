<script>
  import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
  import { chainCode } from '$lib/constants/chain.js';
  import { connectWallet } from '$lib/helper.js';

	import FreeMinterSection from '$lib/components/FreeMinterSection.svelte';
	import WhitelistMinterSection from '$lib/components/WhitelistMinterSection.svelte';
	import PublicMinterSection from '$lib/components/PublicMinterSection.svelte';

	import ProfileImg from '$lib/assets/imgs/profile.svg';
	import SmTwitterImg from '$lib/assets/imgs/sm-twitter.svg';
	import SmDiscordImg from '$lib/assets/imgs/sm-discord.svg';
	import SmWebsiteImg from '$lib/assets/imgs/sm-website.svg';
	import MinuseImg from '$lib/assets/imgs/minuse.svg';
	import PluseImg from '$lib/assets/imgs/pluse.svg';

	const TabNames = {
		MINT: 'Mint',
		ROUNDS: 'Rounds',
		DETAILS: 'Details'
	};

	let currentTab = TabNames.MINT;

	const setCurrentTab = (tabName) => {
		currentTab = tabName;
	};

  let metamaskConnection = false;

  function updateMetamaskConnection(state){
    metamaskConnection = state;
  }

  onMount(async () => {
    if (typeof window.ethereum !== 'undefined'){
      if(window.ethereum.selectedAddress != null){
        if(window.ethereum.chainId !== chainCode){
          connectWallet(updateMetamaskConnection)
        }else{
          metamaskConnection = true
        }
      }
    }
  })
</script>

<main>
	<Navbar route="minter" />
	<img
		src={'/banner.png'}
		class="top-0 left-0 z-0 w-full h-auto object-cover hidden md:block"
		alt="coverImage"
	/>
	<div class="hidden md:flex w-full justify-center bg-[url('./lib/assets/imgs/bg.png')] text-white">
		<div class="w-full max-w-[1440px] flex gap-8 lg:gap-16 px-[56px] lg:px-[112px] py-12 lg:py-24">
			<div class="flex flex-col gap-6">
				<div class="flex gap-6 items-center">
					<img src={ProfileImg} alt="" class="w-[124px] h-[124px]" />
					<div class="flex flex-col gap-2">
						<h2 class="text-4xl lg:text-6xl lg:leading-[72px] text-white tracking-[-1.1px]">
							Punk #43: Fractionalized
						</h2>
						<div class="flex gap-5">
							<img src={SmTwitterImg} alt="" class="w-5 h-5" />
							<img src={SmDiscordImg} alt="" class="w-5 h-5" />
							<img src={SmWebsiteImg} alt="" class="w-5 h-5" />
						</div>
					</div>
				</div>
				<p class="text-2xl text-[#EAECF0]">
					The Punk Frontier: Satoshi Punks are here to shake things. Each Satoshi Punk is crafted
					with love and passion, pixel by pixel, to help you express yourself. So if you're a punk
					at heart, who is tired of the same old same old, then join our tribe. Let’s admire our
					JPEGs together and create cool stuff.
				</p>
				<p class="text-4xl leading-[44px] text-white">Fraction Utility</p>
				<p class="text-2xl text-[#EAECF0]">
					1. Fraction holders will own Punk #43, together. They will choose what do to with their
					asset.<br /> <br /> 2. Fraction holders are considered as OG supporters of Satoshi Punks.
					5 Lucky holders will be eligible to mint 1 Satoshi Punk each.<br /><br /> 3. As OG supporters,
					they will be whitelisted or give free mints to all future projects launched by Satoshi Punks.
				</p>
			</div>
			<div class="flex flex-col gap-4 max-w-[343px] min-w-[278px] w-full">
        <FreeMinterSection metamaskConnection={metamaskConnection} updateMetamaskConnection={updateMetamaskConnection} />
        <WhitelistMinterSection metamaskConnection={metamaskConnection} updateMetamaskConnection={updateMetamaskConnection} />
        <PublicMinterSection metamaskConnection={metamaskConnection} updateMetamaskConnection={updateMetamaskConnection} />
			</div>
		</div>
	</div>

	<img
		src={'/nfts/punks/43.png'}
		class="top-0 left-0 z-0 w-full h-auto object-cover md:hidden"
		alt="coverImage"
	/>
	<div
		class="flex md:hidden bg-[url('./lib/assets/imgs/bg.png')] text-white flex-col py-8 px-4 w-full gap-4"
	>
		<p class="text-5xl leading-[60px] text-white tracking-[-0.02em]">Punk 43: Fractionalized</p>
		<div class="flex w-full">
			<button
				class="flex-1 text-4xl leading-[44px] {currentTab === TabNames.MINT &&
					'bg-[rgba(78,66,88,0.5)]'}"
				on:click={() => setCurrentTab(TabNames.MINT)}>{TabNames.MINT}</button
			>
			<button
				class="flex-1 text-4xl leading-[44px]  {currentTab === TabNames.ROUNDS &&
					'bg-[rgba(78,66,88,0.5)]'}"
				on:click={() => setCurrentTab(TabNames.ROUNDS)}>{TabNames.ROUNDS}</button
			>
			<button
				class="flex-1 text-4xl leading-[44px]  {currentTab === TabNames.DETAILS &&
					'bg-[rgba(78,66,88,0.5)]'}"
				on:click={() => setCurrentTab(TabNames.DETAILS)}>{TabNames.DETAILS}</button
			>
		</div>
		{#if currentTab === TabNames.MINT}
      <FreeMinterSection metamaskConnection={metamaskConnection} updateMetamaskConnection={updateMetamaskConnection} />
		{/if}
		{#if currentTab === TabNames.ROUNDS}
      <WhitelistMinterSection metamaskConnection={metamaskConnection} updateMetamaskConnection={updateMetamaskConnection} />
		{/if}
		{#if currentTab === TabNames.DETAILS}
      <PublicMinterSection metamaskConnection={metamaskConnection} updateMetamaskConnection={updateMetamaskConnection} />
		{/if}
	</div>

	<Footer />
</main>
