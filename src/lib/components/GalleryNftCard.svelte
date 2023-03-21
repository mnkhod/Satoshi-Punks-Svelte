<script>
	import data from '../constants/nfts.json';
	export let nftId, nftNumber, nftLink, path, type;
</script>

<main>
	<a href={nftLink}>
		<li class="">
			<div class="flex h-auto flex-col gap-4">
				<img src={path + type + '/' + nftId + '.png'} alt="Nft" class="w-full h-auto" />
				<div>
					<p class="text-4xl leading-[44px]">Punk #{nftId}</p>
					<p class="text-2xl leading-8 text-[#EAECF0]">No {nftNumber}</p>
				</div>
			</div>
		</li>
	</a>
</main>
