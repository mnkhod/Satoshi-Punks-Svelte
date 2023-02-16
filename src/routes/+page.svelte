<script>
  import CoverImage from '$lib/assets/imgs/cover.png'
  import FeatureHappyIcon from '$lib/assets/imgs/featureHappyIcon.png'
  import FeatureTimeIcon from '$lib/assets/imgs/featureTimeIcon.png'
  import FeatureDiamondIcon from '$lib/assets/imgs/featureDiamondIcon.png'
  import FeatureNft from '$lib/assets/imgs/featureNft.gif'

  import Nft1 from '$lib/assets/imgs/nft1.png'
  import Nft2 from '$lib/assets/imgs/nft2.png'
  import Nft3 from '$lib/assets/imgs/nft3.png'
  import Nft4 from '$lib/assets/imgs/nft4.png'
  import Nft5 from '$lib/assets/imgs/nft5.png'
  import Nft6 from '$lib/assets/imgs/nft6.png'
  import Nft7 from '$lib/assets/imgs/nft7.png'
  import Nft8 from '$lib/assets/imgs/nft8.png'

  import LightingIcon from '$lib/assets/imgs/featureLightingIcon.png'
  import SpeedIcon from '$lib/assets/imgs/featureSpeedIcon.png'
  import SnowIcon from '$lib/assets/imgs/featureSnowIcon.png'
  import CheckIcon from '$lib/assets/imgs/checkIcon.png'

  import BackgroundImage from '$lib/assets/imgs/bg.png'

  import Navbar from '$lib/components/Navbar.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

<main>
  <Navbar route="home" />
  <div class="relative flex items-center justify-center h-[110vh]">
    <img src={CoverImage} class="absolute top-0 left-0 z-0 w-full h-full object-right md:object-center object-cover" alt="coverImage" />
    <div class="z-10 relative flex flex-col items-center">
      <h1 class="text-white text-5xl md:text-7xl">JUST HODL A PUNK.</h1>
      <h1 class="text-white text-4xl md:text-7xl">WHAT MORE DO U NEED?</h1>
    </div>
  </div>

  <div class="punk-container" id="Manifesto">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container">
      <h1 class="text-5xl md:text-6xl">Manifesto</h1>
      <p class="text-4xl"></p>
      <div class="flex flex-col items-center xl:flex-row justify-between">
        <div class="md:w-5/12">
          <img src={FeatureNft} class="h-full w-full" alt="">
        </div>
        <div class="md:w-7/12 flex items-center">
          <pre class="text-lg whitespace-pre-line text-center xl:text-left mt-5 xl:mt-0 xl:whitespace-pre xl:text-xl 2xl:text-3xl">
            GM! Degens of the crypto realm!
            The Bitcoin NFTs are about to shake things up.

            Are you prepared for what’s coming?
            Are you inscribing anything on Ordinals?
            Are you ready to ride this next big wave?

            If not... Well, that might just cost you another generational wealth.But you are not late!
            For Satoshi Punks are here to welcome you.
            To us, NFTs are not just a new way of owning and trading digital assets.
            But a way of expressing oneself.
            If you believe in authenticity...
            Care about originality...
            And a Punk at heart then join our tribe!

            Let’s admire our JPEGs together and do some cool stuff.
          </pre>
        </div>
      </div>

    </div>
  </div>

  <div class="punk-container" id="Gallery">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container">
      <div class="flex flex-col md:flex-row gap-5 md:gap-0 justify-between">
        <h1 class="text-4xl md:text-6xl">Gallery - crafted with love</h1>
        <a href="/gallery" class="punk-btn text-xl w-full md:w-3/12 flex justify-center items-center gap-2">
          View All
        </a>
      </div>

      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 justify-center flex-wrap">
        <li class="p-4 flex flex-col items-center">
          <img src="/nfts/2.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #2</h3>
        </li>

        <li class="p-4 flex flex-col items-center">
          <img src="/nfts/30.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #30</h3>
        </li>

        <li class="p-4 flex flex-col items-center">
          <img src="/nfts/32.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #32</h3>
        </li>

        <li class="p-4 flex flex-col items-center">
          <img src="/nfts/83.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #83</h3>
        </li>

        <li class="p-4 flex flex-col items-center">
          <img src="/nfts/36.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #36</h3>
        </li>

        <li class="p-4 flex flex-col items-center">
          <img src="/nfts/17.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #17</h3>
        </li>

        <li class="p-4 flex flex-col items-center">
          <img src="/nfts/38.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #38</h3>
        </li>

        <li class="p-4 flex flex-col items-center">
          <img src="/nfts/18.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-4xl mt-4">Punk #18</h3>
        </li>
      </ul>
    </div>  
  </div>

  <div class="punk-container" id="Gang">
    <img src={BackgroundImage} class="absolute top-0 left-0 w-full h-full z-0" alt="bg">

    <div class="punk-inner-container gap-7">
      <h1 class="text-4xl md:text-8xl">Meet the gang</h1>
      <p class="md:w-12/12 text-lg md:text-4xl">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work. Yeah, we copied it. </p>

      <ul class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 flex-col md:flex-row mt-16 gap-20">
        <li class="flex items-start flex-col">
          <img src="/nfts/45.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Lord Satoshi</h3>
          <p class="text-2xl">Does 99% of the work</p>
        </li>
        <li class="flex items-start flex-col">
          <img src="/nfts/41.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Saina</h3>
          <p class="text-2xl">Only awake cuz of coffee</p>
        </li>
        <li class="flex items-start flex-col">
          <img src="/nfts/8.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Satoshi Punk</h3>
          <p class="text-2xl">Never sells his illiquid bag</p>
        </li>
        <li class="flex items-start flex-col">
          <img src="/nfts/53.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Mnk</h3>
          <p class="text-2xl">Shows up at the end</p>
        </li>
        <li class="flex items-start flex-col">
          <img src="/nfts/75.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Chteka</h3>
          <p class="text-2xl">Online 24/7</p>
        </li>
        <li class="flex items-start flex-col">
          <img src="/nfts/47.png" class="w-80 h-auto" alt="nftImage">
          <h3 class="text-5xl mt-4">Sieve</h3>
          <p class="text-2xl">Thinks he’s in a sim</p>
        </li>
      </ul>
    </div>
  </div>

  <Footer />

</main>
