<script lang="ts">
	import { PhonePreview, ShareDialog } from "$lib/components"
	import { Button } from "$lib/components/ui/button"
	import { Input } from "$lib/components/ui/input"
	import { Marquee } from "$lib/components/ui/marquee"
	import { Platforms } from "$lib"

	let url: string
	let error: string
	let track: any
	let isLoading: boolean = false

	async function handleSubmit() {
		if (!url) {
			error = "Please provide a music link"
			return
		}

		isLoading = true

		try {
			const response = await fetch(`https://api.vibelynx.app/v1/tracks?urls=${url}`)

			if (!response.ok) {
				const errorResult = await response.json()
				error = errorResult.message || "Failed to fetch track"
				isLoading = false
				return
			}

			track = await response.json()
		} catch (error) {
			error = "An unexpected error occurred"
		} finally {
			isLoading = false
			track = track[0]
		}
	}

	$: shareableLink = `https://vibelynx.app/track?url=${url}`
</script>

<main class="mt-32">
	<div class="flex items-center justify-between">
		<div class="max-w-md space-y-4">
			<div class="text-5xl font-bold">
				<h1>Share music across</h1>
				<h1>every platform</h1>
			</div>
			<p class="text-md text-gray-500">
				One link that opens in Spotify, Apple Music, YouTube Music, and more. Connect your music
				experience seamlessly.
			</p>
			<div class="flex items-center space-x-2">
				<form on:submit={handleSubmit} class="flex w-full max-w-sm items-center space-x-2">
					<Input
						bind:value={url}
						type="url"
						placeholder="enter a music link to share and preview"
					/>
					<Button type="submit" disabled={isLoading} class="z-40"
						>{isLoading ? "Loading" : "Preview"}</Button
					>
				</form>
				<div>
					<ShareDialog hidden={track} {shareableLink} {track} />
				</div>
			</div>
		</div>
		<PhonePreview>
			{#if track}
				<div class="w-fit p-16">
					<div class="h-56 w-56">
						<img
							src={track.artwork}
							alt={`${track.title} artwork`}
							class="h-full w-full rounded-xl"
						/>
					</div>

					<div class="mx-auto w-fit space-y-2 pt-4">
						<div class="mx-auto flex w-fit items-center space-x-2">
							<h2 class="text-2xl font-semibold">{track.title}</h2>
							<span class="h-4 w-4 rounded-xs bg-gray-300 text-center text-xs">E</span>
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
										<img
											class="h-8 w-8"
											src={`/${platform.key}.svg`}
											alt={`${platform.name} logo`}
										/>
										<p class="font-medium">{platform.name}</p>
										<p></p>
									</div>
								</a>
							</div>
						{/each}
					</div>
				</div>
			{:else}
				<div class="mx-auto w-fit pt-80">placeholder</div>
			{/if}
		</PhonePreview>
	</div>
	<Marquee>
		{#each Object.keys(Platforms) as key}
			<a href={Platforms[key].URL} class="flex items-center space-x-2">
				<img src={Platforms[key].Icon} alt={Platforms[key].Name} width={24} height={24} />
				<p>{Platforms[key].Name}</p>
			</a>
		{/each}
	</Marquee>
	<div class="h-[2000px]"></div>
</main>
