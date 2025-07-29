<script lang="ts">
	import { SvelteFlow } from "@xyflow/svelte"
	import "@xyflow/svelte/dist/style.css"
	import { VibeLynxNode, SourceNode } from "./Flow"
	import TargetNode from "./Flow/TargetNode.svelte"

	const { track } = $props<{ track?: any }>()

	const nodeTypes = {
		sourceNode: SourceNode,
		VibeLynxNode: VibeLynxNode,
		targetNode: TargetNode
	}

	let nodes = $state.raw([
		{
			id: "source-node",
			type: "sourceNode",
			position: { x: -200, y: -15 },
			data: { key: track?.title, icon: track?.artwork }
		},
		{
			id: "vibelynx-node",
			type: "VibeLynxNode",
			position: { x: -25, y: 0 },
			data: { key: "appleMusic", icon: "/appleMusic.svg" }
		},
		{
			id: "appleMusic-node",
			type: "targetNode",
			position: { x: 150, y: 50 },
			data: { key: "appleMusic", icon: "/appleMusic.svg" }
		},
		{
			id: "spotify-node",
			type: "targetNode",
			position: { x: 150, y: -50 },
			data: { key: "spotify", icon: "/spotify.svg" }
		},
		{
			id: "youtube-node",
			type: "targetNode",
			position: { x: 200, y: -20 },
			data: { key: "youtube", icon: "/youtube.svg" }
		},
		{
			id: "soundCloud-node",
			type: "targetNode",
			position: { x: 200, y: 20 },
			data: { key: "soundCloud", icon: "/soundCloud.svg" }
		}
	])

	// TODO: make edge colors a gradiant between the two icon colors
	let edges = $state.raw([
		{
			id: "source-to-vibelynx-edge",
			source: "source-node",
			target: "vibelynx-node",
			animated: true,
			style: "stroke: #000000; stroke-width: 2;"
		},
		{
			id: "vibelynx-to-appleMusic-edge",
			source: "vibelynx-node",
			target: "appleMusic-node",
			animated: true,
			style: "stroke: #000000; stroke-width: 2;"
		},
		{
			id: "vibelynx-to-spotify-edge",
			source: "vibelynx-node",
			target: "spotify-node",
			animated: true,
			style: "stroke: #000000; stroke-width: 2;"
		},
		{
			id: "vibelynx-to-youtube-edge",
			source: "vibelynx-node",
			target: "youtube-node",
			animated: true,
			style: "stroke: #000000; stroke-width: 2;"
		},
		{
			id: "vibelynx-to-soundCloud-edge",
			source: "vibelynx-node",
			target: "soundCloud-node",
			animated: true,
			style: "stroke: #000000; stroke-width: 2;"
		}
	])
</script>

<div class="h-full w-full rounded-lg bg-neutral-50">
	<SvelteFlow
		bind:nodes
		bind:edges
		{nodeTypes}
		proOptions={{ hideAttribution: true }}
		panOnDrag={false}
		zoomOnPinch={false}
		zoomOnScroll={false}
		zoomOnDoubleClick={false}
		nodesDraggable={false}
		nodesConnectable={false}
		elementsSelectable={false}
		fitView
		class="h-full w-full"
	/>
</div>
