<script lang="ts">
	import { authClient } from "$lib/auth/client"
	import { Button, Input } from "$lib/components/ui"

	async function signIn(event: MouseEvent) {
		await authClient.signIn.social({
			provider: "spotify"
		})
	}
</script>

<main class="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
	<div class="w-full max-w-sm">
		<div class="flex flex-col gap-6">
			<form>
				<div class="flex flex-col gap-6">
					<div class="flex flex-col items-center gap-2">
						<a href="##" class="flex flex-col items-center gap-2 font-medium">
							<div class="flex size-8 items-center justify-center rounded-md"></div>
							<span class="sr-only">Acme Inc.</span>
						</a>
						<h1 class="text-xl font-bold">Welcome to Acme Inc.</h1>
						<div class="text-center text-sm">
							Don&apos;t have an account?{" "}
							<a href="##" class="underline underline-offset-4"> Sign up </a>
						</div>
					</div>
					<div class="flex flex-col gap-6">
						<div class="grid gap-3">
							<label for="email">Email</label>
							<Input id="email" type="email" placeholder="m@example.com" required />
						</div>
						<Button type="submit" class="w-full">Login</Button>
					</div>
					<div
						class="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"
					>
						<span class="bg-background text-muted-foreground relative z-10 px-2"> Or </span>
					</div>
					<div class="grid gap-4 sm:grid-cols-2">
						<Button variant="outline" type="button" class="w-full" onclick={signIn}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									d="M17.527 1.927a2.13 2.13 0 0 1 3.01 0l1.536 1.536a2.13 2.13 0 0 1 0 3.01l-9.6 9.6a2.13 2.13 0 0 1-3.01 0l-1.536-1.536a2.13 2.13 0 0 1 0-3.01l9.6-9.6z"
									fill="#1DB954"
								/>
							</svg>
							Continue with Spotify
						</Button>
						<Button variant="outline" type="button" class="w-full">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
								<path
									d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
									fill="currentColor"
								/>
							</svg>
							Continue with Google
						</Button>
					</div>
				</div>
			</form>
			<div
				class="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4"
			>
				By clicking continue, you agree to our <a href="##">Terms of Service</a>{" "}
				and <a href="##">Privacy Policy</a>.
			</div>
		</div>
	</div>
</main>
