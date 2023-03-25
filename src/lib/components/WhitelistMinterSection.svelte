<script>
	import MinuseImg from '$lib/assets/imgs/minuse.svg';
	import PluseImg from '$lib/assets/imgs/pluse.svg';

  const roundInfo = {
			price: 0.02,
			maxMintNumber: 5,
			mintStartTime: new Date('Fri, 24 Mar 2023 16:00:00 GMT')
  }

	let mintAmount = 1;

	const onIncreaseBtnClicked = () => {
		if (mintAmount < 1) mintAmount++;
	};

	const onDecreaseBtnClicked = () => {
		if (mintAmount > 1) mintAmount--;
	};

  export let metamaskConnection,updateMetamaskConnection;
</script>

<main>
  <div
    class="bg-[rgba(78,66,88,0.5)] p-4 flex flex-col gap-8 border-[rgba(255,255,255,0.15)] border-[1px]"
    >
    <div>
      <p class="text-[30px] leading-[38px] text-white">Round 2: Whitelist</p>
      <div class="mt-3">
        <p class="text-2xl text-[#EAECF0]">
          When: <span class="ml-3">TBA</span>
        </p>
        <p class="text-2xl text-[#EAECF0]">
          Price: <span class="ml-3">0.02 ETH</span>
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <p class="text-2xl text-[#EAECF0]">Max mint: 3</p>
      <div
        class="flex w-full justify-between items-center p-3 border-[1px] border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.1)]"
        >
        <button class="w-6 h-6 text-2xl" on:click={onDecreaseBtnClicked}
          ><img class="w-6 h-6" src={MinuseImg} alt="" /></button
        >
        <p class="text-4xl leading-9">{mintAmount}</p>
        <button class="w-6 h-6 text-2xl" on:click={onIncreaseBtnClicked}
          ><img class="w-6 h-6" src={PluseImg} alt="" /></button
        >
      </div>
      <button class="w-full py-3 text-4xl leading-9 bg-white outline-none text-[#344054]"
      >MINT</button
      >
    </div>
    <div>
      <p class="text-2xl text-[#EAECF0] flex w-full justify-between">
        Transaction summary: <span>{mintAmount * roundInfo.price} ETH</span>
      </p>

      <p class="text-2xl text-[#EAECF0] flex w-full justify-between">
        Total minted <span>0</span>
      </p>
    </div>
  </div>

</main>
