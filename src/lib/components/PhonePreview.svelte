<script lang="ts">
	import { CellularbarsIcon, BatteryIcon, WifiIcon } from "$lib/icons"

	export let width: number = 350
	export let height: number = 700

	const now = new Date()
	let hour = now.getHours()
	let minute: number | string = now.getMinutes()

	if (hour > 12) {
		hour = hour - 12
	}

	if (minute < 10) {
		minute = `0${minute}`
	}

	$: time = `${hour}:${minute}`
</script>

<div class="relative" style="width: {width}px; height: {height}px;">
	<div class="absolute top-[2.5%] left-[6.5%] z-10 flex h-[664px] w-[305px] justify-center">
		<slot />
	</div>
	<div class="absolute top-[4.2%] left-[18%]">
		<div class="text-lg font-medium tracking-wider">{time}</div>
	</div>
	<div class="absolute top-[4.5%] right-[12%]">
		<div class="flex items-center space-x-2">
			<CellularbarsIcon size={20} />
			<WifiIcon size={16} />
			<BatteryIcon size={24} />
		</div>
	</div>
	<img
		src="/iphone-16-pro.png"
		alt="iPhone 16 Pro"
		class="h-full w-full object-contain drop-shadow-2xl"
	/>
</div>
