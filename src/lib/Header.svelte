<script lang="ts">
	export let title: string | undefined;
	export let back: string = '';
</script>

<header>
	<div class="navbar shadow-lg bg-neutral text-neutral-content w-full fixed top-0 z-50">
		<div class="flex-none">
			{#if back}
				<a class="btn btn-square btn-ghost" href={back}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block w-6 h-6 stroke-current text-success"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M10 19l-7-7m0 0l7-7m-7 7h18"
						/>
					</svg>
				</a>
			{/if}
		</div>
		<div class="flex-1 px-2 mx-2">
			<span class="text-lg font-bold">
				{title}
			</span>
		</div>
		<div>
			<div class="badge badge-warning gap-2 mr-4">WIP</div>
		</div>
	</div>
</header>

<style>
</style>
