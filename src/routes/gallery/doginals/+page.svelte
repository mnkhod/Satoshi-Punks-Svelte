<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import GalleryNftCard from '$lib/components/GalleryNftCard.svelte';
	import MintCover from '$lib/assets/imgs/mintCover.png';
	import BackgroundImage from '$lib/assets/imgs/bg.png';
	import MintProfile from '$lib/assets/imgs/mintProfile.png';
	import NftJsonDataList from '$lib/constants/doginals.json';

	let filterInput = '';
	let typeCheckBox = true;
	let showMobileFilter = false;

	let filters = [
		{
			filterTitle: 'Body',
			filterCheckbox: false,
			filterItems: [
				{ name: 'Brown', state: false },
				{ name: 'Snow', state: false },
				{ name: 'Doge', state: false },
				{ name: 'Zombie', state: false },
				{ name: 'Dark', state: false },
				{ name: 'Pink', state: false },
				{ name: 'Fading', state: false }
			]
		},
		{
			filterTitle: 'Background',
			filterCheckbox: false,
			filterItems: [
				{ name: 'Aqua', state: false },
				{ name: 'Aqua Space', state: false },
				{ name: 'Hacker', state: false },
				{ name: 'Light Green', state: false },
				{ name: 'Pink', state: false },
				{ name: 'Pink Space', state: false },
				{ name: 'Pitch Black', state: false },
				{ name: 'Sandy Beach', state: false },
				{ name: 'Crystal', state: false },
				{ name: 'Dark Grey', state: false },
				{ name: 'Hacker HQ', state: false },
				{ name: 'Holy', state: false },
				{ name: 'Satoshi', state: false }
			]
		},
		{
			filterTitle: 'Suit',
			filterCheckbox: false,
			filterItems: [
				{ name: 'Black Tee', state: false },
				{ name: 'Fast Food Apron', state: false },
				{ name: 'Founder Hoodie', state: false },
				{ name: 'Hacker Hoodie', state: false },
				{ name: 'Jacket', state: false },
				{ name: 'Maxi Tee', state: false },
				{ name: 'Nudist', state: false },
				{ name: 'Space Suit Blue', state: false },
				{ name: 'Space Suit Pink', state: false },
				{ name: 'Royal Space Suit', state: false },
				{ name: 'Bat Suit', state: false },
				{ name: 'OrdSwap Tee', state: false },
				{ name: 'Doginal Tee', state: false }
			]
		},
		{
			filterTitle: 'Expression',
			filterCheckbox: false,
			filterItems: [
				{ name: 'Chill', state: false },
				{ name: 'Evil', state: false },
				{ name: 'Excited', state: false },
				{ name: 'Normal', state: false },
				{ name: 'Sad', state: false }
			]
		},
		{
			filterTitle: 'Headwear',
			filterCheckbox: false,
			filterItems: [
				{ name: 'None', state: false },
				{ name: 'Doge Snapback', state: false },
				{ name: 'Red Snapback', state: false },
				{ name: 'Shiny Glasses', state: false },
				{ name: 'Winter Hat', state: false },
				{ name: 'Flaming', state: false },
				{ name: 'Pink Optic Blaster', state: false },
				{ name: 'Blue Optic Blaster', state: false },
				{ name: 'Golden Optic Blaster', state: false },
				{ name: 'Aqua Optic Blaster', state: false },
				{ name: 'Bat Mask', state: false },
				{ name: 'Ordswap Snapback', state: false },
				{ name: 'Satoshi Snapback', state: false }
			]
		},
		{
			filterTitle: 'Specials',
			filterCheckbox: false,
			filterItems: [
				{ name: 'None', state: false },
				{ name: 'Batman Doginal', state: false },
				{ name: 'Golden Doginal', state: false },
				{ name: 'Ordswap DoginalPipe', state: false },
				{ name: 'Hacker Doginal', state: false },
				{ name: 'Satoshi Doginal', state: false }
			]
		}
	];

	let inputFilteredNftData = NftJsonDataList;

	$: if (filterInput != '') {
		inputFilteredNftData = NftJsonDataList.filter((i) => i.inscription_id == filterInput);
	} else {
		inputFilteredNftData = NftJsonDataList;
	}

	$: bodyFilteredNftData = filterNftData(inputFilteredNftData, 0, 'body', filters);
	$: bgFilteredNftData = filterNftData(bodyFilteredNftData, 1, 'background', filters);
	$: suitFilteredNftData = filterNftData(bgFilteredNftData, 2, 'suit', filters);
	$: expressionFilteredNftData = filterNftData(suitFilteredNftData, 3, 'expression', filters);
	$: hwFilteredNftData = filterNftData(expressionFilteredNftData, 4, 'head_wear', filters);
	$: wingsFilteredNftData = filterNftData(hwFilteredNftData, 5, 'specials', filters);

	function showMobileFilterHandler(state) {
		showMobileFilter = state;
	}

	function filterNftData(filterData, filterIndex, filterParameter, allFilters) {
		return filterData.filter((nft) => {
			let f = allFilters[filterIndex];
			let items = f.filterItems;
			let checkedItems = f.filterItems.filter((i) => i.state == true);

			if (checkedItems.length == 0) {
				return true;
			}

			let found = checkedItems.filter((i) => i.name == nft[filterParameter]);

			return found.length > 0;
		});
	}
</script>

<main>
	<Navbar route="gallery" />
	<img
		src={'/banners/doginals_mobile.jpg'}
		class="top-0 left-0 z-0 w-full h-[224px] sm:hidden object-cover"
		alt="coverImage"
	/>
	<img
		src={'/banners/doginals_web.jpg'}
		class="top-0 left-0 z-0 w-full h-[30vw] hidden sm:block object-cover"
		alt="coverImage"
	/>
	<div class="w-full flex justify-center bg-[url('./lib/assets/imgs/bg.png')]">
		<div class="punk-container">
			<div class="flex gap-16">
				<!--
      <div class="w-full md:w-11/12 flex flex-col gap-4">
        <div class="flex flex-col items-center md:flex-row gap-7">
          <div>
            <img src={MintProfile} class="w-48 h-auto" alt="evmosPunkProfilePicture">
          </div>
          <div class="w-full flex flex-col gap-5 justify-center">
            <h1 class="text-7xl">Satoshi Punks</h1>
            <ul class="w-full md:w-4/12 flex text-4xl justify-center md:justify-start relative text-white gap-4">
              <li>
                <a href="https://twitter.com/SatoshiPunksNFT">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-auto h-5" viewBox="0 0 16 16"><path fill="currentColor" d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334c0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518a3.301 3.301 0 0 0 1.447-1.817a6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429a3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218a3.203 3.203 0 0 1-.865.115a3.23 3.23 0 0 1-.614-.057a3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg>
                </a>
              </li>
              <li>
                <a href="https://discord.gg/satoshipunks">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-auto h-5" viewBox="0 0 24 24"><path fill="currentColor" d="m22 24l-5.25-5l.63 2H4.5A2.5 2.5 0 0 1 2 18.5v-15A2.5 2.5 0 0 1 4.5 1h15A2.5 2.5 0 0 1 22 3.5V24M12 6.8c-2.68 0-4.56 1.15-4.56 1.15c1.03-.92 2.83-1.45 2.83-1.45l-.17-.17c-1.69.03-3.22 1.2-3.22 1.2c-1.72 3.59-1.61 6.69-1.61 6.69c1.4 1.81 3.48 1.68 3.48 1.68l.71-.9c-1.25-.27-2.04-1.38-2.04-1.38S9.3 14.9 12 14.9s4.58-1.28 4.58-1.28s-.79 1.11-2.04 1.38l.71.9s2.08.13 3.48-1.68c0 0 .11-3.1-1.61-6.69c0 0-1.53-1.17-3.22-1.2l-.17.17s1.8.53 2.83 1.45c0 0-1.88-1.15-4.56-1.15m-2.07 3.79c.65 0 1.18.57 1.17 1.27c0 .69-.52 1.27-1.17 1.27c-.64 0-1.16-.58-1.16-1.27c0-.7.51-1.27 1.16-1.27m4.17 0c.65 0 1.17.57 1.17 1.27c0 .69-.52 1.27-1.17 1.27c-.64 0-1.16-.58-1.16-1.27c0-.7.51-1.27 1.16-1.27Z"></path></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p class="text-2xl">The Punk Frontier: Satoshi Punks are bringing the world of “quality NFTs” to Bitcoin chain. After chasing 100s of project with too good to be true promises and constant meh deliveries, we felt that we had enough and decided to do it ourselves.</p>
        <p class="text-2xl my-6">Each Satoshi Punk is crafted with love and passion. Uniquely designed pixel by pixel to help your express yourself. Our unique brand of badassness is built on trust and transparency. We will never overpromise and always keep our holders’ best interest in mind.</p>
        <p class="text-2xl">So if you're a punk at heart, who is tired of the same old same old, then join our tribe. Let’s admire our JPEGs together and do some cool stuff.</p>
      </div>
    -->

				<div class="hidden w-full lg:max-w-[248px] md:block">
					<h1 class="text-6xl leading-[72px]">Filter</h1>
					<div class="mt-8 px-2">
						<input
							type="text"
							bind:value={filterInput}
							placeholder="Search by ID"
							class="text-white text-4xl leading-[44px] bg-transparent input w-full p-0 border-0 rounded-none border-b-[1px] border-[rgba(255,255,255,0.65)]"
						/>

						<div class="flex flex-col gap-4 mt-4">
							{#each filters as filterItem}
								<div class="collapse flex flex-col gap-2">
									<input
										type="checkbox"
										bind:checked={filterItem.filterCheckbox}
										class="min-h-[44px] absolute"
									/>
									<label class="w-full p-0 flex items-center justify-between">
										<p class="text-4xl leading-[44px]">{filterItem.filterTitle}</p>
										{#if filterItem.filterCheckbox}
											<svg
												class="h-5 w-auto fill-white"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												><path fill="currentColor" d="M19 12.998H5v-2h14z" /></svg
											>
										{:else}
											<svg
												class="h-5 w-auto fill-white"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												><path
													fill="currentColor"
													d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"
												/></svg
											>
										{/if}
									</label>
									{#if filterItem.filterCheckbox}
										<div class="collapse-content flex flex-col gap-0 p-0">
											{#each filterItem.filterItems as filterItem}
												<div class="flex items-center h-9 gap-2">
													<input
														type="checkbox"
														class="h-4 w-4 border-[1px] border-[#D0D5DD] bg-white"
														bind:checked={filterItem.state}
													/>
													<p class="text-xl leading-5">{filterItem.name}</p>
												</div>
											{/each}
										</div>
									{/if}
								</div>
							{/each}
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-8">
					<div class="flex w-full">
						<a
							href="/gallery"
							class="text-white w-1/2 lg:w-auto text-4xl lg:text-6xl leading-[44px] lg:leading-[72px] px-4"
							>Punks</a
						>
						<a
							href="/gallery/doginals"
							class="text-white w-1/2 lg:w-auto text-4xl lg:text-6xl leading-[44px] lg:leading-[72px] px-4 bg-[rgba(78,66,88,0.5)]"
							>Doginals</a
						>
					</div>
					<input
						type="text"
						bind:value={filterInput}
						placeholder="Search by ID"
						class="text-white text-4xl leading-[44px] bg-transparent input w-full p-0 border-0 rounded-none border-b-[1px] border-[rgba(255,255,255,0.65)] px-2 md:hidden"
					/>
					{#if showMobileFilter == false}
						<ul
							class="col-span-4 lg:col-span-3 auto-rows-min grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-around gap-x-4 gap-y-6 lg:gap-8"
						>
							{#if wingsFilteredNftData.length == 0}
								<div class="w-full text-center lg:text-left">
									<p class="text-lg lg:text-4xl">No NFT Found</p>
								</div>
							{:else}
								{#each wingsFilteredNftData as nft}
									<GalleryNftCard
										nftLink={nft.inscription_link}
										nftId={nft.image_id}
										nftNumber={nft.inscription_id}
										path="/nfts/"
										type="doginals"
									/>
								{/each}
							{/if}
						</ul>
					{/if}
				</div>
			</div>
		</div>

		{#if showMobileFilter == false}
			<div
				class="md:hidden z-10 fixed left-0 bottom-0 py-6 w-full flex justify-center items-center"
			>
				<button
					on:click={() => showMobileFilterHandler(true)}
					class="z-20 py-3 w-[208px] border-[1px] border-white text-white bg-[url('/bg.png')] rounded-full text-4xl leading-[44px]"
					>Filter</button
				>
			</div>
		{/if}

		{#if showMobileFilter == true}
			<div
				class="w-full bg-[url('./lib/assets/imgs/bg.png')] bg-repeat absolute min-h-[100vh] top-0 left-0 bg-white z-30"
			>
				<div class="p-6 text-white">
					<div class="flex justify-between items-center">
						<h1 class="text-5xl leading-[60px]">Filter</h1>
						<svg
							on:click={() => showMobileFilterHandler(false)}
							class="w-auto h-8"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
							/></svg
						>
					</div>
					<div class="flex flex-col gap-4 mt-4">
						{#each filters as filterItem}
							<div class="collapse flex flex-col gap-2">
								<input
									type="checkbox"
									bind:checked={filterItem.filterCheckbox}
									class="min-h-[44px] absolute"
								/>
								<label class="w-full p-0 flex items-center justify-between">
									<p class="text-4xl leading-[44px]">{filterItem.filterTitle}</p>
									{#if filterItem.filterCheckbox}
										<svg
											class="h-5 w-auto fill-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z" /></svg
										>
									{:else}
										<svg
											class="h-5 w-auto fill-white"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" /></svg
										>
									{/if}
								</label>
								{#if filterItem.filterCheckbox}
									<div class="collapse-content flex flex-col gap-0 p-0">
										{#each filterItem.filterItems as filterItem}
											<div class="flex items-center h-9 gap-2">
												<input
													type="checkbox"
													class="h-4 w-4 border-[1px] border-[#D0D5DD] bg-white"
													bind:checked={filterItem.state}
												/>
												<p class="text-xl leading-5">{filterItem.name}</p>
											</div>
										{/each}
									</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			</div>
		{/if}
	</div>

	<Footer />
</main>

<style>
</style>
