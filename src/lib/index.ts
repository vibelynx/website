type Platform = {
	Name: string
	URL: string
	Icon: string
}

export const Platforms: Record<string, Platform> = {
	spotify: {
		Name: "Spotify",
		URL: "https://open.spotify.com",
		Icon: "/spotify.svg"
	},
	appleMusic: {
		Name: "Apple Music",
		URL: "https://music.apple.com",
		Icon: "/appleMusic.svg"
	}
}
