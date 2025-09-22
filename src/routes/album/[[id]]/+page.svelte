<script lang="ts">
	import type { PageData } from "./$types"

	export let data: PageData
	const { album } = data
</script>

<svelte:head>
	<title>{`${album.title} - Vibe Lynx`}</title>
	<meta name="description" content={`Listen to ${album.title} on any platform with vibe lynx!`} />
	<meta property="og:title" content={album.title} />
	<meta property="og:description" content="TODO" />
	<meta property="og:image" content={album.artwork} />
	<meta property="og:url" content={`https://vibelynx.app/track/${album.id}`} />
	<meta property="og:type" content="music.song" />
</svelte:head>

<main>
	<div class="container mt-20 flex justify-center">
		<div class="w-fit pt-8">
			<div class="h-80 w-80">
				<img src={album.artwork} alt={`${album.title} artwork`} class="h-full w-full rounded-xl" />
			</div>

			<div class="mx-auto w-fit space-y-2 pt-4">
				<div class="mx-auto flex w-fit items-center space-x-2">
					<h2 class="text-2xl font-semibold">{album.title}</h2>
					<span class="h-4 w-4 rounded-sm bg-gray-300 text-center text-xs">E<span> </span></span>
				</div>

				<div class="flex items-center">
					{#each album.artists as artist}
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
				{#each album.platforms as platform}
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

			<div class="space-y-4 pt-8">
				{#each album.tracks as track}
					<div>
						<div class="">
							<p class="font-medium">{track.title}</p>
							<div class="flex items-center space-x-2 text-xs">
								{#each track.artists as artist}
									<p>{artist.name}</p>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</main>
