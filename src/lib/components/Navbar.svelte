<script>
  import LogoImg from '../assets/imgs/logoWhite.png'
  import TwitterImg from '../assets/imgs/twitter.svg'
  import DiscordImg from '../assets/imgs/discord.svg'

  export let route;
</script>

<main>
  <div class="absolute top-0 w-full flex justify-center h-20 backdrop-blur-md bg-[rgba(0,0,0,0.3)] z-10">
    <div class="w-full max-w-[1440px] flex px-[112px] justify-between items-center">
        <a href="/" class="flex-none"> <img src={LogoImg} class="w-[254px] h-8" alt=""></a>
        <div class="flex gap-8 items-center text-[32px] leading-[44px] font-normal tracking-[-0.02px] text-white">
          <a href={route == "home" ? "#Manifesto" : "/#Manifesto"} class="px-2">Manifesto</a>
          <a href="/gallery">Gallery</a>
          <a href={route == "home" ? "#Gang" : "/#Gang"}>Team</a>
          <a href={"/buy"}>Buy</a>
          <a href="https://tiwtter.com"><img src={TwitterImg} class="w-6 h-6" alt=""></a>
          <a href="https://discord.gg/satoshipunks" class="w-11 h-11 flex items-center justify-center"><img src={DiscordImg} class="w-6 h-6" alt=""></a>
        </div>
    </div>
  </div>
</main>
