<script>
	import CoverImage from '$lib/assets/imgs/cover.png';
	import FeatureHappyIcon from '$lib/assets/imgs/featureHappyIcon.png';
	import FeatureTimeIcon from '$lib/assets/imgs/featureTimeIcon.png';
	import FeatureDiamondIcon from '$lib/assets/imgs/featureDiamondIcon.png';
	import FeatureNft from '$lib/assets/imgs/featureNft.gif';

	import Nft1 from '$lib/assets/imgs/nft1.png';
	import Nft2 from '$lib/assets/imgs/nft2.png';
	import Nft3 from '$lib/assets/imgs/nft3.png';
	import Nft4 from '$lib/assets/imgs/nft4.png';
	import Nft5 from '$lib/assets/imgs/nft5.png';
	import Nft6 from '$lib/assets/imgs/nft6.png';
	import Nft7 from '$lib/assets/imgs/nft7.png';
	import Nft8 from '$lib/assets/imgs/nft8.png';

	import LightingIcon from '$lib/assets/imgs/featureLightingIcon.png';
	import SpeedIcon from '$lib/assets/imgs/featureSpeedIcon.png';
	import SnowIcon from '$lib/assets/imgs/featureSnowIcon.png';
	import CheckIcon from '$lib/assets/imgs/checkIcon.png';

	import BackgroundImage from '$lib/assets/imgs/bg.png';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<main>
	<Navbar route="home" />
	<div class="relative flex items-center justify-center h-[110vh]">
		<img
			src={CoverImage}
			class="absolute top-0 left-0 z-0 w-full h-full object-right md:object-center object-cover"
			alt="coverImage"
		/>
		<div class="relative flex flex-col items-center max-w-[294px] sm:max-w-none">
			<h1 class="text-white text-5xl md:text-[72px] leading-[48px] sm:leading-[90px] text-center">
				JUST HODL A PUNK. <br /> WHAT MORE DO U NEED?
			</h1>
		</div>
	</div>

	<div class="w-full flex justify-center relative bg-[url('./lib/assets/imgs/bg.png')]">
		<div class="punk-container" id="Manifesto">
			<div class="punk-inner-container">
				<h1 class="text-5xl sm:text-6xl leading-[60px] sm:leading-[72px] font-normal">Manifesto</h1>
				<h1 class="text-2xl sm:text-4xl leading-8 sm:leading-[44px] font-normal">
					GM! Degens of the crypto realm! <br /> The Bitcoin NFTs are about to shake things up.<br
					/><br />Are you prepared for what’s coming? <br />Are you inscribing anything on Ordinals?
					<br />Are you ready to ride this next big wave? <br /><br />If not... Well, that might
					just cost you another generational wealth. But you are not late! <br />For Satoshi Punks
					are here to welcome you. To us, NFTs are not just a new way of owning and trading digital
					assets.<br />But a way of expressing oneself. If you believe in authenticity... <br />Care
					about originality...<br />And a Punk at heart then join our tribe! <br /><br />Let’s
					admire our JPEGs together and do some cool stuff.
				</h1>
			</div>
		</div>
	</div>

	<div class="w-full flex justify-center relative bg-[url('./lib/assets/imgs/bg.png')]">
		<div class="punk-container" id="Gallery">
			<div class="punk-inner-container">
				<div class="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
					<h1 class="text-4xl md:text-6xl leading-[60px] sm:leading-[72px] flex font-normal">
						Gallery <span class="hidden lg:block">- crafted with love </span>
					</h1>
					<a href="/gallery" class="punk-btn hidden sm:flex"> View All </a>
				</div>

				<div
					class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-16"
				>
					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/2.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Punk #2</p>
							<p class="text-2xl leading-8 font-normal">Inscription 36806</p>
						</div>
					</li>

					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/30.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Punk #30</p>
							<p class="text-2xl leading-8 font-normal">Inscription 63940</p>
						</div>
					</li>

					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/32.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Punk #32</p>
							<p class="text-2xl leading-8 font-normal">Inscription 63919</p>
						</div>
					</li>

					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/83.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Punk #83</p>
							<p class="text-2xl leading-8 font-normal">Inscription 73597</p>
						</div>
					</li>

					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/36.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Punk #36</p>
							<p class="text-2xl leading-8 font-normal">Inscription 64782</p>
						</div>
					</li>

					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/17.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Punk #17</p>
							<p class="text-2xl leading-8 font-normal">Inscription 57178</p>
						</div>
					</li>

					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/38.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Punk #38</p>
							<p class="text-2xl leading-8 font-normal">Inscription 71727</p>
						</div>
					</li>

					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/18.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Punk #18</p>
							<p class="text-2xl leading-8 font-normal">Inscription 57058</p>
						</div>
					</li>
				</div>
				<a href="/gallery" class="punk-btn flex sm:hidden"> View All </a>
			</div>
		</div>
	</div>

	<div class="w-full flex justify-center relative bg-[url('./lib/assets/imgs/bg.png')]">
		<div class="punk-container" id="Gang">
			<div class="punk-inner-container">
				<div class="flex flex-col gap-4">
					<h1 class="text-4xl sm:text-6xl leading-[60px] sm:leading-[72px] font-normal">
						Meet the gang
					</h1>
					<p class="text-2xl md:text-4xl text-[#EAECF0] leading-8 sm:leading-[44px] font-normal">
						Our philosophy is simple — hire a team of diverse, passionate people and foster a
						culture that empowers you to do your best work. Yeah, we copied it.
					</p>
				</div>

				<div
					class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-16"
				>
					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/45.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Lord Satoshi</p>
							<p class="text-2xl leading-8 font-normal">Does 99% of the work</p>
						</div>
					</li>
					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/41.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Saina</p>
							<p class="text-2xl leading-8 font-normal">Only awake cuz of coffee</p>
						</div>
					</li>
					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/8.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Satoshi Punk</p>
							<p class="text-2xl leading-8 font-normal">Never sells his illiquid bag</p>
						</div>
					</li>
					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/53.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Mnk</p>
							<p class="text-2xl leading-8 font-normal">Shows up at the end</p>
						</div>
					</li>
					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/75.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Chteka</p>
							<p class="text-2xl leading-8 font-normal">Online 24/7</p>
						</div>
					</li>
					<li class="flex flex-col gap-4">
						<img src="/nfts/punks/47.png" class="w-full" alt="nftImage" />
						<div>
							<p class="text-4xl leading-[44px] font-normal">Sieve</p>
							<p class="text-2xl leading-8 font-normal">Thinks he’s in a sim</p>
						</div>
					</li>
				</div>
			</div>
		</div>
	</div>

	<Footer />
</main>
