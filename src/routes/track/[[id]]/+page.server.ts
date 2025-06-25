import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "../$types"
import type { Track } from "$lib/types"

const fetchTrackData = async (by: "id" | "url", value: string): Promise<Track | null> => {
  let response: Response

  if (by === "id" && value != "") {
    response = await fetch(`https://api.musicbridge.fm/v1/tracks/${value}`)
  } else if (by === "url" && value != "") {
    response = await fetch(`https://api.musicbridge.fm/v1/tracks?urls=${value}`)
  } else {
    return null
  }

  if (!response.ok) {
    return null // TODO: better error handling
  }

  const data = await response.json()
  const track = by === "url" ? data[0] : data;

  console.log(track)

  return {
    id: track.id,
    title: track.title,
    artists: track.artists,
    album: track.album.name,
    platforms: track.platforms,
    artwork: track.artwork,
  }
}

export const load: PageServerLoad = async ({ params, url }) => {
  const id = params.id
  const trackURL = url.searchParams.get("url")

  if (id && trackURL) {
    throw error(400, "provide either 'ids' or 'urls' not both")
  }

  let track: Track | null = null;

  if (id) {
    track = await fetchTrackData("id", id)
  } else if (trackURL) {
    track = await fetchTrackData("url", trackURL)
  } else {
    throw error(400, "provide an id or  url")
  }

  if (track) {
    return { track }
  } else {
    throw error(404, "track not found")
  }
}
