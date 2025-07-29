<script lang="ts">
	import type { PageData } from "./$types"

	export let data: PageData
	const { artist: artist } = data
</script>

<svelte:head>
	<title>{`${artist.name} - Vibe Lynx`}</title>
	<meta name="description" content={`Listen to ${artist.name} on any platform with vibe lynx!`} />
	<meta property="og:title" content={artist.name} />
	<meta property="og:description" content="TODO" />
	<meta property="og:image" content={artist.artwork} />
	<meta property="og:url" content={`https://vibelynx.app/track/${artist.id}`} />
	<meta property="og:type" content="music.song" />
</svelte:head>

<main>
	<div class="container mt-20 flex justify-center">
		<div class="w-fit pt-8">
			<div class="h-80 w-80">
				<img src={artist.artwork} alt={`${artist.name} artwork`} class="h-full w-full rounded-xl" />
			</div>

			<div class="mx-auto w-fit space-y-2 pt-4">
				<div class="mx-auto flex w-fit items-center space-x-2">
					<h2 class="text-2xl font-semibold">{artist.name}</h2>
				</div>
			</div>

			<div class="space-y-4 pt-8">
				<p>Listen on</p>
				{#each artist.platforms as platform}
					<div>
						<a href={platform.url}>
							<div class="flex items-center space-x-4">
								<img class="h-8 w-8" src={`/${platform.key}.svg`} alt={`${platform.name} logo`} />
								<p class="font-medium">{platform.name}</p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>
