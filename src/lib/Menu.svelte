<script lang="ts">
	import { page } from '$app/stores';

	const routes: Record<'name' | 'path', string>[] = [
		
		{
			name: 'Collator',
			path: '/collator'
		},
		{
			name: 'DateTimeFormat',
			path: '/datetime'
		},
		{
			name: 'DisplayNames',
			path: '/displaynames'
		},
		{
			name: 'ListFormat',
			path: '/list'
		},
		{
			name: 'Locale',
			path: '/locale'
		},
		{
			name: 'NumberFormat',
			path: '/number'
		},
		{
			name: 'PluralRules',
			path: '/plural'
		},
		{
			name: 'RelativeTimeFormat',
			path: '/relativetime'
		},
		{

			name: 'Segmenter',
			path: '/segmenter'

		}

	];
</script>

<ul class="menu w-64 border h-full fixed top-16 border-base-300  bg-base-300">
	
	<li class="mt-1" >
		<a href='/' class:active={$page.url.pathname === '/'}>Home</a>
	</li>
	<li class="bg-base-content opacity-10 my-1 mx-4" style="padding-top: 2px"> 
	</li>
	{#each routes as route}
		<li>
			<a href={route.path} class:active={$page.url.pathname === route.path}>{route.name}</a>
		</li>
	{/each}
	<li class="bg-base-content opacity-10 my-1 mx-4" style="padding-top: 2px"> 
	</li>
	<li >
		<a href='/about' class:active={$page.url.pathname === '/about'}>About</a>
	</li>
</ul>
