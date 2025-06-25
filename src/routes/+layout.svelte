<script lang="ts">
	import "../app.css"
	import * as Tooltip from "$lib/components/ui/tooltip/index.js"

	let scrollPosition = $state(0)
	let isScrolled = $derived(scrollPosition > 10)

	let { children } = $props()
</script>

<svelte:window bind:scrollY={scrollPosition} />

<div class="relative container mx-auto">
	<nav
		class={`fixed top-0 left-1/2 z-20 container mt-6 w-full -translate-x-1/2 transform bg-white transition-all duration-300 ease-in-out ${
			isScrolled ? "max-w-2xl rounded-full shadow-lg backdrop-blur-md" : ""
		}`}
	>
		<div class="flex items-center justify-between px-6 py-3">
			<div>
				<a href="/" class="flex items-center space-x-2">
					<img src="/appleMusic.svg" alt="Vibe Lynx Logo" width={30} height={30} />
					<span>Vibe Lynx</span>
				</a>
			</div>
			<div>
				<ul class="hidden items-center gap-8 md:flex">
					<li>
						<a href="##">Pricing</a>
					</li>
					<li>
						<a href="##">About</a>
					</li>
					<li>
						<a href="##">Press</a>
					</li>
					<li>
						<a href="##">Support</a>
					</li>
				</ul>
			</div>
			<div>
				<Tooltip.Provider delayDuration={150}>
					<Tooltip.Root>
						<Tooltip.Trigger>
							<a href="##" class="">Get the app</a>
						</Tooltip.Trigger>
						<Tooltip.Content side="bottom" sideOffset={isScrolled ? 20 : 10}>
							<div>Coming Soon...</div>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			</div>
		</div>
	</nav>
	{@render children()}
</div>
