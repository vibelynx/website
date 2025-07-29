<script lang="ts">
	import { SvelteFlow } from "@xyflow/svelte"
	import "@xyflow/svelte/dist/style.css"
	import { VibeLynxNode, SourceNode } from "./Flow"
	import TargetNode from "./Flow/TargetNode.svelte"

	const nodeTypes = {
		sourceNode: SourceNode,
		VibeLynxNode: VibeLynxNode,
		targetNode: TargetNode
	}

	let nodes = $state.raw([
		{
			id: "source-node",
			type: "sourceNode",
			position: { x: -200, y: 0 },
			data: { key: "appleMusic", icon: "/appleMusic.svg" }
		},
		{
			id: "vibelynx-node",
			type: "VibeLynxNode",
			position: { x: 0, y: -4 },
			data: { key: "appleMusic", icon: "/appleMusic.svg" }
		},
		{
			id: "target-node-1",
			type: "targetNode",
			position: { x: 150, y: 50 },
			data: { key: "appleMusic", icon: "/appleMusic.svg" }
		},
		{
			id: "target-node-2",
			type: "targetNode",
			position: { x: 150, y: -50 },
			data: { key: "appleMusic", icon: "/appleMusic.svg" }
		},
		{
			id: "target-node-3",
			type: "targetNode",
			position: { x: 200, y: -20 },
			data: { key: "appleMusic", icon: "/appleMusic.svg" }
		},
		{
			id: "target-node-4",
			type: "targetNode",
			position: { x: 200, y: 20 },
			data: { key: "appleMusic", icon: "/appleMusic.svg" }
		}
	])

	// TODO: make edge colors a gradiant between the two icon colors
	let edges = $state.raw([
		{
			id: "source-to-vibelynx-edge",
			source: "source-node",
			target: "vibelynx-node",
			animated: true,
			style: "stroke: #3b82f6; stroke-width: 2;"
		},
		{
			id: "vibelynx-to-target-1-edge",
			source: "vibelynx-node",
			target: "target-node-1",
			animated: true,
			style: "stroke: #10b981; stroke-width: 2;"
		},
		{
			id: "vibelynx-to-target-2-edge",
			source: "vibelynx-node",
			target: "target-node-2",
			animated: true,
			style: "stroke: #10b981; stroke-width: 2;"
		},
		{
			id: "vibelynx-to-target-3-edge",
			source: "vibelynx-node",
			target: "target-node-3",
			animated: true,
			style: "stroke: #10b981; stroke-width: 2;"
		},
		{
			id: "vibelynx-to-target-4-edge",
			source: "vibelynx-node",
			target: "target-node-4",
			animated: true,
			style: "stroke: #10b981; stroke-width: 2;"
		}
	])
</script>

<div class="h-full w-full bg-neutral-50 rounded-lg">
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
