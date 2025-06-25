<script lang="ts">
	import { Button, buttonVariants } from "$lib/components/ui/button"
	import * as Dialog from "$lib/components/ui/dialog"
	import { ShareIcon, CopyIcon } from "@lucide/svelte"
	import ShareGraph from "./ShareGraph.svelte"

	const { shareableLink, hidden } = $props<{ shareableLink: string; hidden: boolean }>()
</script>

<Dialog.Root>
	<Dialog.Trigger
		class={`transform transition-all duration-300 ease-in-out ${!hidden ? "-translate-x-13 opacity-0" : "translate-x-0 opacity-100"} ${buttonVariants({ variant: "outline" })}`}
	>
		<ShareIcon />
	</Dialog.Trigger>
	<Dialog.Content>
		<div class="mx-auto max-w-md space-y-8">
			<Dialog.Header>
				<div class="h-40 w-full">
					<ShareGraph />
				</div>
				<Dialog.Title class="text-center text-4xl">Share with Friends</Dialog.Title>
				<Dialog.Description class="text-center"
					>Music sounds better with friends.</Dialog.Description
				>
			</Dialog.Header>
			<div class="space-y-2">
				<div>Share link</div>
				<div class="flex items-center justify-between space-x-2 rounded-lg bg-neutral-200 p-2">
					<div class="scrollbar-none overflow-x-scroll text-nowrap">{shareableLink}</div>
					<Button variant="ghost"><CopyIcon /></Button>
				</div>
			</div>
		</div>
	</Dialog.Content>
</Dialog.Root>
