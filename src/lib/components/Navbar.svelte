<script>
  import LogoWhite from '../assets/imgs/logoWhite.png'

  export let route;
</script>

<main>
  <div class="absolute top-0 left-0 w-full flex flex-row px-0 md:px-40 items-center h-28">
    <div class="absolute opacity-50 bg-black top-0 left-0 w-full h-full z-10"></div>


    <a href="/" class="cursor-pointer flex items-center gap-2 justify-center md:justify-start grow relative z-20 text-white">
      <img src={LogoWhite} class="w-auto h-12" alt="logoWhite">
      <h1 class="text-4xl leading-none">Satoshi Punks</h1>
    </a>

    <ul class="hidden md:flex text-4xl items-center relative z-20 text-white gap-8">
      <li>
        <a href={route == "home" ? "#Manifesto" : "/#Manifesto"}>Manifesto</a>
      </li>
      <li>
        <a href="/gallery">Gallery</a>
      </li>
      <li>
        <a href={route == "home" ? "#Gang" : "/#Gang"}>Gang</a>
      </li>
      <li>
        <a href="https://discord.gg/satoshipunks">Buy a Punk</a>
      </li>
      <li>
       
      </li>
    </ul>
  </div>
</main>
