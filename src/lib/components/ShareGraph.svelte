<script lang="ts">
	import { SvelteFlow } from "@xyflow/svelte"
	import "@xyflow/svelte/dist/style.css"
	import { MusicBridgeNode, SourceNode } from "./Flow"
	import TargetNode from "./Flow/TargetNode.svelte"

	const nodeTypes = {
		sourceNode: SourceNode,
		musicbridgeNode: MusicBridgeNode,
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
			id: "musicbridge-node",
			type: "musicbridgeNode",
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

	let edges = $state.raw([
		{
			id: "source-to-musicbridge-edge",
			source: "source-node",
			target: "musicbridge-node",
			animated: true
		},
		{
			id: "musicbridge-to-target-1-edge",
			source: "musicbridge-node",
			target: "target-node-1",
			animated: true
		},
		{
			id: "musicbridge-to-target-2-edge",
			source: "musicbridge-node",
			target: "target-node-2",
			animated: true
		},
		{
			id: "musicbridge-to-target-3-edge",
			source: "musicbridge-node",
			target: "target-node-3",
			animated: true
		},
		{
			id: "musicbridge-to-target-4-edge",
			source: "musicbridge-node",
			target: "target-node-4",
			animated: true
		}
	])
</script>

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
/>
