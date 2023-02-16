<script>
  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import GalleryNftCard from '$lib/components/GalleryNftCard.svelte'
  import MintCover from '$lib/assets/imgs/mintCover.png'
  import BackgroundImage from '$lib/assets/imgs/bg.png'
  import MintProfile from '$lib/assets/imgs/mintProfile.png'
  import NftJsonDataList from "$lib/constants/nfts.json";

  import Nft1 from '$lib/assets/imgs/nft1.png'
  import Nft2 from '$lib/assets/imgs/nft2.png'
  import Nft3 from '$lib/assets/imgs/nft3.png'
  import Nft4 from '$lib/assets/imgs/nft4.png'

  let filterInput = "";

</script>

<main>
  <Navbar route="gallery" />
  <div class="relative h-[40vh]">
    <img src={"/banner.png"} class="absolute top-0 left-0 z-0 w-full h-full object-cover" alt="coverImage" />
  </div>

  <div class="punk-container">
    <div class="bg-[url('/bg.png')] absolute top-0 bg-repeat bg-auto h-full w-full bg-center left-0 w-full z-0" alt="bg"></div>

    <div class="punk-inner-container flex flex-col">
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
        <p class="text-2xl">The Punk Frontier: Evmos Punks are bringing the world of “quality NFTs” to Evmos Blockchain. With over-the-top promises and constant meh deliveries in hopes of WAGMI, we are diving headfirst into the NFT world. We had enough and decided to do it ourselves. Let’s admire our JPEGs together and do cool stuff.</p>
      </div>

      <input type="text" bind:value={filterInput} placeholder="Search by id" class="text-white m-0 px-3 py-5 text-4xl bg-[#5D5068] input w-full md:w-3/12 border-2" />

      <ul class="flex justify-around flex-wrap gap-32">
        {#if filterInput != ""}
          {#each NftJsonDataList.filter((i) => i.punk_id == filterInput) as nft}
            <GalleryNftCard 
              nftLink={nft.inscription_link}
              nftId={nft.punk_id} nftNumber={nft.inscription_id} />
          {/each}
        {:else}
          {#each NftJsonDataList as nft}
            <GalleryNftCard 
              nftLink={nft.inscription_link}
              nftId={nft.punk_id} nftNumber={nft.inscription_id} />
          {/each}
        {/if}
      </ul>
      
    </div>
  </div>

  <Footer />

</main>

<style>
</style>


