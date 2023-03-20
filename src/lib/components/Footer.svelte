<script>
	import LogoWhite from '$lib/assets/imgs/logoWhite.png';
	import TwitterImg from '../assets/imgs/twitter.svg';
	import DiscordImg from '../assets/imgs/discord.svg';
</script>

<main>
	<div class="w-full flex justify-center relative bg-[url('./lib/assets/imgs/bg.png')]">
		<div
			class="max-w-[1440px] w-full flex flex-col sm:flex-row justify-between sm:items-center gap-4 sm:gap-0 px-4 py-12 sm:px-10 lg:px-[112px] sm:py-12"
		>
			<img src={LogoWhite} class="w-[254px] h-8 hidden sm:block" alt="" />
			<div class="flex gap-6">
				<a href="https://twitter.com/SatoshiPunksNFT">
					<img src={TwitterImg} class="w-6 h-6" alt="" />
				</a>
				<a href="https://discord.gg/satoshipunks">
					<img src={DiscordImg} class="w-6 h-6" alt="" /></a
				>
			</div>
			<p class="text-xl leading-6 text-[#98A2B3] font-normal">
				© 2022 Satoshi Punks. All rights reserved.
			</p>
		</div>
	</div>
</main>
