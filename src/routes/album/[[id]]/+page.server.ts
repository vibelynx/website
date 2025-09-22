import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { GetAlbum } from "@vibelynx/vibelynx-js";

export const load: PageServerLoad = async ({ params, url }) => {
  const id = params.id
  const albumURL = url.searchParams.get("url")

  if (id && albumURL) {
    throw error(400, "provide either 'id' or 'url' not both")
  }

  if (id) {
    let { album, error: err } = await GetAlbum(id)

    if (err) {
      throw error(404, "album not found")
    }

    return { album }
  }

  // if (albumURL) {
  //   let { albums, error: err } = await GetAlbumsByURL(["albumURL"])
  //
  //   if (err || !albums) {
  //     throw error(404, "album not found")
  //   }
  //
  //   return { album: albums[0] }
  // }

  throw error(404, "album not found")
}
