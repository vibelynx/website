<script lang="ts">
	import { cn } from "$lib/utils"

	export let speed: "slow" | "normal" | "fast" = "normal"
	export let direction: "left" | "right" = "left"
	export let pauseOnHover: boolean = false
	export let className: string = ""
	export let repeat: number = 2

	const speedClasses = {
		slow: "animate-marquee-slow",
		normal: "animate-marquee",
		fast: "animate-marquee-fast"
	}

	const directionClasses = {
		left: speedClasses[speed],
		right: `${speedClasses[speed]} [animation-direction:reverse]`
	}
</script>

<div
	class={cn(
		"relative flex overflow-hidden",
		pauseOnHover && "hover:[animation-play-state:paused]",
		className
	)}
>
	<div
		class={cn(
			"flex min-w-full shrink-0 items-center justify-around gap-4",
			directionClasses[direction],
			pauseOnHover && "hover:[animation-play-state:paused]"
		)}
	>
		{#each Array.from({ length: repeat }) as _}
			<div class="flex min-w-full items-center justify-around gap-4">
				<slot />
			</div>
		{/each}
	</div>
</div>
