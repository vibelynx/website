import type { RequestHandler } from "./$types"

export const GET: RequestHandler = async () => {
	const data = {
		applinks: {
			details: [
				{
					appID: "FLUX286T9V.dev.isaiah-hamilton.vibe-lynx",
					components: [
						{
							"/": "/track/*"
						}
					]
				}
			]
		}
	}

	return new Response(JSON.stringify(data), {
		headers: {
			"Content-Type": "application/json"
		}
	})
}
