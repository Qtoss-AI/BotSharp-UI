<script>
	import { Col, Row } from '@sveltestrap/sveltestrap';
	import Breadcrumb from '$lib/common/Breadcrumb.svelte';
	import HeadTitle from '$lib/common/HeadTitle.svelte';
  	import { getAgents } from '$lib/services/agent-service.js';
  	import { onMount } from 'svelte';
	import PlainPagination from '$lib/common/PlainPagination.svelte';
	import { _ } from 'svelte-i18n'

  	const firstPage = 1;
	const pageSize = 12;

	/** @type {import('$commonTypes').PagedItems<import('$agentTypes').AgentModel>} */
  	let agents = { items: [], count: 0 };

	/** @type {import('$agentTypes').AgentFilter} */
	const initFilter = {
		pager: { page: firstPage, size: pageSize, count: 0 },
    	types: ["evaluating"]
	};

  	/** @type {import('$agentTypes').AgentFilter} */
  	let filter = { ... initFilter };

	/** @type {import('$commonTypes').Pagination} */
	let pager = filter.pager;

	onMount(async () => {
		await getPagedAgents();
	});

  	async function getPagedAgents() {
    	agents = await getAgents(filter);
		refresh();
	}

	function refresh() {
		refreshAgents();
		refreshPager(agents.count, filter.pager.page, filter.pager.size);
	}

	function refreshAgents() {
		agents = {
			items: agents?.items?.map(t => { return { ...t }; }) || [],
			count: agents?.count || 0
		};
	}

	/** @param {number} totalItemsCount */
	function refreshPager(totalItemsCount, page = firstPage, pageCount = pageSize) {
		pager = {
			page: page,
			size: pageCount || 0,
			count: totalItemsCount || 0
		};
	}

	/**
	 * @param {number} pageNum
	 */
	function pageTo(pageNum) {
		pager = {
			...pager,
			page: pageNum
		};

		filter = {
      ...filter,
			pager: pager
		};

		getPagedAgents();
	}
</script>

<HeadTitle title="{$_('Evaluator')}" />
<Breadcrumb title="{$_('Agent')}" pagetitle="{$_('Evaluator')}" />

<PlainPagination pagination={pager} pageTo={pageTo} />