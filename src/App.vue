<template>
  <div id="app">
		<!--  -->
		<router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
	* {
		box-sizing: border-box; 
	}

	body {
		font-size: 0.12rem;
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
	}
	#app,.wrap{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 100%;
		overflow: hidden;
		display: -webkit-flex;
		background: #e5e5e5;
		flex-direction: column;
	}
</style>
