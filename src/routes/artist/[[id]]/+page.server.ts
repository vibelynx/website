import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"
import type { Artist } from "$lib/types"

const fetchArtistData = async (by: "id" | "url", value: string): Promise<Artist | null> => {
	let response: Response

	if (by === "id" && value != "") {
		response = await fetch(`https://api.vibelynx.app/v1/artists/${value}`)
	} else if (by === "url" && value != "") {
		response = await fetch(`https://api.vibelynx.app/v1/artists?urls=${value}`)
	} else {
		return null
	}

	if (!response.ok) {
		return null // TODO: better error handling
	}

	const data = await response.json()
	const artist = by === "url" ? data[0] : data

	return {
		id: artist.id,
		name: artist.name,
		platforms: artist.platforms,
		artwork: artist.artwork
	}
}

export const load: PageServerLoad = async ({ params, url }) => {
	// @ts-ignore
	const id = params.id
	const artistURL = url.searchParams.get("url")

	if (id && artistURL) {
		throw error(400, "provide either 'ids' or 'urls' not both")
	}

	let artist: Artist | null = null

	if (id) {
		artist = await fetchArtistData("id", id)
	} else if (artistURL) {
		artist = await fetchArtistData("url", artistURL)
	} else {
		throw error(400, "provide an id or  url")
	}

	if (artist) {
		return { artist: artist }
	} else {
		throw error(404, "artst not found")
	}
}
