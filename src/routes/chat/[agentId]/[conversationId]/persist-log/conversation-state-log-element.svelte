<script>
    import JSONTree from 'svelte-json-tree';

    /** @type {any} */
    export let data;
</script>

<div class="log-element state-log-item" id={`state-log-${data.message_id}`}>
    <div class="log-content">
        <JSONTree
            value={data?.states || {}}
            --json-tree-property-color="white"
            --json-tree-string-color="var(--bs-info)"
        />
    </div>
    {#if data.message_id}
    <div style="margin-top: 10px;">
        {`MessageId: ${data.message_id}`}
    </div>
    {/if} 
</div>