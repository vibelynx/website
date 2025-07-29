<script lang="ts">
	import { Handle, Position, type NodeProps } from "@xyflow/svelte"

	let { id, data }: NodeProps = $props()
</script>

<Handle type="target" position={Position.Left} />
<div class={`${id} h-12 w-12`}>
	<img src={`${data.icon}`} alt={`${data.key}`} />
</div>
<Handle type="source" position={Position.Right} />
