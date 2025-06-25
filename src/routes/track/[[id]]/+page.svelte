<script lang="ts">
	import type { PageData } from "./$types"

	export let data: PageData
	const { track } = data
</script>

<svelte:head>
	<title>{`${track.title} - Vibe Lynx`}</title>
	<meta name="description" content={`Listen to ${track.title} on any platform with vibe lynx!`} />
	<meta property="og:title" content={track.title} />
	<meta property="og:description" content="TODO" />
	<meta property="og:image" content={track.artwork} />
	<meta property="og:url" content={`https://vibelynx.app/track/${track.id}`} />
	<meta property="og:type" content="music.song" />
</svelte:head>

<main>
	<div class="container mt-20 flex justify-center">
		<div class="w-fit pt-8">
			<div class="h-80 w-80">
				<img src={track.artwork} alt={`${track.title} artwork`} class="h-full w-full rounded-xl" />
			</div>

			<div class="mx-auto w-fit space-y-2 pt-4">
				<div class="mx-auto flex w-fit items-center space-x-2">
					<h2 class="text-2xl font-semibold">{track.title}</h2>
					<span class="h-4 w-4 rounded-sm bg-gray-300 text-center text-xs">E<span> </span></span>
				</div>

				<div class="flex items-center">
					{#each track.artists as artist}
						<a
							href={`/artist/${artist.id}`}
							class="mx-auto after:mr-1 after:content-[','] last:after:content-none"
							>{artist.name}</a
						>
					{/each}
				</div>
			</div>

			<div class="space-y-4 pt-8">
				<p>Listen on</p>
				{#each track.platforms as platform}
					<div>
						<a href={platform.url}>
							<div class="flex items-center space-x-4">
								<img class="h-8 w-8" src={`/${platform.key}.svg`} alt={`${platform.name} logo`} />
								<p class="font-medium">{platform.name}</p>
								<p></p>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>
