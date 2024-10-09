<script>
	import { list } from '../store';
</script>

<div class="g">
	{#each $list as idx}
		<button class="l{idx}" on:click={() => (idx = idx == 1 ? 0 : 1)}></button>
	{/each}
</div>

<style>
	.g {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
	}
	.g button {
		padding: 5px;
		margin: 5px;
		height: 50px;
		border: 1px solid black;
		text-align: center;
		cursor: pointer;
		border-radius: 10px;
		box-shadow: 1px 1px 3px black;
	}
	.g button.l0 {
		background-color: antiquewhite;
	}
	.g button.l1 {
		background-color: rgb(19, 62, 49);
	}
</style>
