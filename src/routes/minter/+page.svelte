<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

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

	const RoundInfos = [
		{
			price: 0,
			maxMintNumber: 1,
			mintStartTime: new Date('Fri, 24 Mar 2023 16:00:00 GMT')
		},
		{
			price: 0.02,
			maxMintNumber: 5,
			mintStartTime: new Date('Fri, 24 Mar 2023 16:00:00 GMT')
		},
		{
			price: 0.03,
			maxMintNumber: 10,
			mintStartTime: new Date('Fri, 24 Mar 2023 16:00:00 GMT')
		}
	];

	let mintAmount = 1;
	let currenctTabName = TabNames.MINT;
	let currrentRound = RoundInfos[0];

	for (let i = 0; i < RoundInfos.length; i++) {
		if (RoundInfos[i].mintStartTime > new Date()) {
			currrentRound = RoundInfos[i];
			break;
		}
	}

	const onIncreaseBtnClicked = () => {
		if (mintAmount < currrentRound.maxMintNumber) mintAmount++;
	};

	const onDecreaseBtnClicked = () => {
		if (mintAmount > 1) mintAmount--;
	};

	const setCurrenctTabName = (tabName) => {
		currenctTabName = tabName;
	};
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
								Price: <span class="ml-3">Free</span>
							</p>
						</div>
					</div>
					<div class="flex flex-col gap-3">
						<p class="text-2xl text-[#EAECF0]">Max mint: 3</p>
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
						<button class="w-full py-3 text-4xl leading-9 bg-white outline-none text-[#344054]"
							>MINT</button
						>
					</div>
					<div>
						<p class="text-2xl text-[#EAECF0] flex w-full justify-between">
							Transaction summary: <span>{mintAmount * currrentRound.price} ETH</span>
						</p>

						<p class="text-2xl text-[#EAECF0] flex w-full justify-between">
							Total minted <span>0</span>
						</p>
					</div>
				</div>
				<div
					class="bg-[rgba(78,66,88,0.5)] p-4 flex flex-col gap-8 border-[rgba(255,255,255,0.15)] border-[1px]"
				>
					<div>
						<p class="text-[30px] leading-[38px] text-white">Round 2: Whitelist</p>
						<div class="mt-3">
							<p class="text-2xl text-[#EAECF0]">
								When: <span class="ml-3">TBA</span>
							</p>
							<p class="text-2xl text-[#EAECF0]">
								Price: <span class="ml-3">0.02 ETH</span>
							</p>
						</div>
					</div>
				</div>
				<div
					class="bg-[rgba(78,66,88,0.5)] p-4 flex flex-col gap-8 border-[rgba(255,255,255,0.15)] border-[1px]"
				>
					<div>
						<p class="text-[30px] leading-[38px] text-white">Round 3: Public</p>
						<div class="mt-3">
							<p class="text-2xl text-[#EAECF0]">
								When: <span class="ml-3">TBA</span>
							</p>
							<p class="text-2xl text-[#EAECF0]">
								Price: <span class="ml-3">0.03 ETH</span>
							</p>
						</div>
					</div>
				</div>
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
				class="flex-1 text-4xl leading-[44px] {currenctTabName === TabNames.MINT &&
					'bg-[rgba(78,66,88,0.5)]'}"
				on:click={() => setCurrenctTabName(TabNames.MINT)}>{TabNames.MINT}</button
			>
			<button
				class="flex-1 text-4xl leading-[44px]  {currenctTabName === TabNames.ROUNDS &&
					'bg-[rgba(78,66,88,0.5)]'}"
				on:click={() => setCurrenctTabName(TabNames.ROUNDS)}>{TabNames.ROUNDS}</button
			>
			<button
				class="flex-1 text-4xl leading-[44px]  {currenctTabName === TabNames.DETAILS &&
					'bg-[rgba(78,66,88,0.5)]'}"
				on:click={() => setCurrenctTabName(TabNames.DETAILS)}>{TabNames.DETAILS}</button
			>
		</div>
		{#if currenctTabName === TabNames.MINT}
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
							Price: <span class="ml-3">Free</span>
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-3">
					<p class="text-2xl text-[#EAECF0]">Max mint: 3</p>
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
					<button class="w-full py-3 text-4xl leading-9 bg-white outline-none text-[#344054]"
						>MINT</button
					>
				</div>
				<div>
					<p class="text-2xl text-[#EAECF0] flex w-full justify-between">
						Transaction summary: <span>{mintAmount * currrentRound.price}</span>
					</p>

					<p class="text-2xl text-[#EAECF0] flex w-full justify-between">
						Total minted <span>0</span>
					</p>
				</div>
			</div>
		{/if}
		{#if currenctTabName === TabNames.ROUNDS}
			<div class="flex flex-col gap-8">
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
								Price: <span class="ml-3">Free</span>
							</p>
						</div>
					</div>
				</div>
				<div
					class="bg-[rgba(78,66,88,0.5)] p-4 flex flex-col gap-8 border-[rgba(255,255,255,0.15)] border-[1px]"
				>
					<div>
						<p class="text-[30px] leading-[38px] text-white">Round 2: Whitelist</p>
						<div class="mt-3">
							<p class="text-2xl text-[#EAECF0]">
								When: <span class="ml-3">TBA</span>
							</p>
							<p class="text-2xl text-[#EAECF0]">
								Price: <span class="ml-3">0.03 ETH</span>
							</p>
						</div>
					</div>
				</div>
				<div
					class="bg-[rgba(78,66,88,0.5)] p-4 flex flex-col gap-8 border-[rgba(255,255,255,0.15)] border-[1px]"
				>
					<div>
						<p class="text-[30px] leading-[38px] text-white">Round 3: Public</p>
						<div class="mt-3">
							<p class="text-2xl text-[#EAECF0]">
								When: <span class="ml-3">TBA</span>
							</p>
							<p class="text-2xl text-[#EAECF0]">
								Price: <span class="ml-3">0.03 ETH</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		{/if}
		{#if currenctTabName === TabNames.DETAILS}
			<div class="flex flex-col gap-8">
				<p class="w-full text-2xl text-[#EAECF0]">
					The Punk Frontier: Satoshi Punks are here to shake things. Each Satoshi Punk is crafted
					with love and passion, pixel by pixel, to help you express yourself. So if you're a punk
					at heart, who is tired of the same old same old, then join our tribe. Let’s admire our
					JPEGs together and create cool stuff.
				</p>
				<p class="text-4xl leading-[60px] tracking-[-0.02em] text-white">Fraction Utility</p>
				<ul class="text-2xl text-[#EAECF0] list-decimal pl-4">
					<li>
						Fraction holders will own Punk #43, together. They will choose what do to with their
						asset.
					</li>
					<li>
						Fraction holders are considered as OG supporters of Satoshi Punks. 5 Lucky holders will
						be eligible to mint 1 Satoshi Punk each.
					</li>
					<li>
						As OG supporters, they will be whitelisted or give free mints to all future projects
						launched by Satoshi Punks.
					</li>
				</ul>
			</div>
		{/if}
	</div>

	<Footer />
</main>
