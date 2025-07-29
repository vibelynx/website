<script lang="ts">
	import { Handle, Position, type NodeProps } from "@xyflow/svelte"

	let { id, data }: NodeProps = $props()
</script>

<div class={`${id} h-20 w-20`}>
	<img class="rounded-lg" src={`${data.icon}`} alt={`${data.key}`} />
</div>
<Handle type="source" position={Position.Right} />
