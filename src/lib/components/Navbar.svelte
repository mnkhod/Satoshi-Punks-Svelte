<script>
	import LogoImg from '../assets/imgs/logoWhite.png';
	import TwitterImg from '../assets/imgs/twitter.svg';
	import DiscordImg from '../assets/imgs/discord.svg';
	import NavbarImg from '../assets/imgs/navbar.svg';
	import CloseImg from '../assets/imgs/close.svg';

	export let route;

	let navbarVisible = false;

	const setNavbarVisible = () => {
		navbarVisible = !navbarVisible;
	};
</script>

<main>
	<div
		class="fixed top-0 w-full flex justify-center sm:h-20 backdrop-blur-md bg-[rgba(0,0,0,0.3)] z-10 "
	>
		<div class="w-full flex px-4 py-3 sm:py-0 md:px-10 lg:px-[112px] justify-between items-center">
			<a href="/" class="flex-none">
				<img src={LogoImg} class="sm:w-[160px] lg:w-[254px]" alt="" /></a
			>
			<button
				class="w-10 h-10 flex justify-center items-center sm:hidden"
				on:click={setNavbarVisible}
			>
				<img src={NavbarImg} alt="" class="w-6 h-6" />
			</button>
			<div
				class="sm:gap-4 md:gap-8 items-center sm:text-2xl md:text-[32px] leading-[44px] font-normal tracking-[-0.02px] text-white hidden sm:flex"
			>
				<a href={route == 'home' ? '#Manifesto' : '/#Manifesto'} class="px-2">Manifesto</a>
				<a href="/gallery">Gallery</a>
				<a href={route == 'home' ? '#Gang' : '/#Gang'}>Team</a>
				<a href="/minter">Mint</a>
				<a href="https://twitter.com/SatoshiPunksNFT"
					><img src={TwitterImg} class="w-6 h-6" alt="" /></a
				>
				<a href="https://discord.gg/satoshipunks" class="w-11 h-11 flex items-center justify-center"
					><img src={DiscordImg} class="w-6 h-6" alt="" /></a
				>
				<!-- <button
					class="bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] px-3 text-[#344054] text-2xl leading-[44px] tracking-[-0.02em] inline-block"
					>CONNECT WALLET</button
				> -->
			</div>
		</div>
	</div>
	<div
		class="fixed {navbarVisible === true
			? 'w-full'
			: 'w-0'} overflow-hidden right-0 min-h-screen bg-[url('./lib/assets/imgs/bg.png')] z-50 transition-all duration-500"
	>
		<div class="w-full flex justify-between items-center px-4 py-3">
			<a href="/" class="flex-none">
				<img src={LogoImg} class="sm:w-[160px] lg:w-[254px]" alt="" /></a
			>
			<button
				class="w-10 h-10 flex justify-center items-center sm:hidden"
				on:click={setNavbarVisible}
			>
				<img src={CloseImg} alt="" class="w-6 h-6" />
			</button>
		</div>
		<div class="w-full px-4 py-9 text-4xl flex flex-col leading-[44px]">
			<!-- <button
				class="bg-white shadow-[0px_1px_2px_rgba(16,24,40,0.05)] w-full text-[#344054] text-2xl leading-[44px] tracking-[-0.02em]"
				>CONNECT WALLET</button
			> -->
			<a
				href={route == 'home' ? '#Manifesto' : '/#Manifesto'}
				class="px-2 py-1 border-b-[1px] border-white">Manifesto</a
			>
			<a href="/gallery" class="px-2 py-1 border-b-[1px] border-white">Gallery</a>
			<a href={route == 'home' ? '#Gang' : '/#Gang'} class="px-2 py-1 border-b-[1px] border-white"
				>Team</a
			>
			<a href="/minter" class="px-2 py-1 border-b-[1px] border-white">Mint</a>
			<a
				href="https://twitter.com/SatoshiPunksNFT"
				class="px-2 py-1 border-b-[1px] border-white flex justify-between items-center"
				>Twitter <img src={TwitterImg} class="w-6 h-6" alt="" /></a
			>
			<a
				href="https://discord.gg/satoshipunks"
				class="px-2 py-1 border-b-[1px] border-white flex justify-between items-center"
				>Discord <img src={DiscordImg} class="w-6 h-6" alt="" /></a
			>
		</div>
	</div>
</main>
