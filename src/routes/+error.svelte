<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import BackgroundImage from '$lib/assets/imgs/bg.png';

	// 17
</script>

<main>
	<Navbar route="error" />
	<div class="punk-container px-12 md:px-40">
		<img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg" />

		<div
			class="relative grid mt-32 justify-center items-center grid-cols-1 xl:grid-cols-2 gap-5 z-5"
		>
			<div class="text-white flex flex-col gap-4">
				<h5 class="text-xl md:text-4xl">Error...</h5>
				<h1 class="text-2xl md:text-7xl">Uhh,we can't find this page.</h1>
				<h1 class="text-2xl md:text-7xl">Here's a cool punk for you.</h1>
				<a
					href="/gallery"
					class="punk-btn text-lg md:text-2xl w-full md:w-4/12 flex justify-center items-center gap-2"
					>Take Me Home</a
				>
			</div>
			<div class="p-10 md:p-24">
				<img src="/nfts/punks/17.png" class="w-full h-auto" alt="nft" />
			</div>
		</div>
	</div>
	<Footer />
</main>
