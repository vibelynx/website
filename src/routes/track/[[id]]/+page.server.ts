import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { GetTrack, GetTracksByURL } from "@vibelynx/vibelynx-js";

export const load: PageServerLoad = async ({ params, url }) => {
  const id = params.id
  const trackURL = url.searchParams.get("url")

  if (id && trackURL) {
    throw error(400, "provide either 'id' or 'url' not both")
  }

  if (id) {
    let { track, error: err } = await GetTrack(id)

    if (err) {
      throw error(404, "track not found")
    }

    return { track }
  }

  if (trackURL) {
    let { tracks, error: err } = await GetTracksByURL([trackURL])

    if (err || !tracks) {
      throw error(404, "track not found")
    }

    return { track: tracks[0] }
  }

  throw error(404, "track not found")
}
