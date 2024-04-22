<template>
	<view class="content">
		<view class="box" v-if="show">
			<view class="search">
				<input class="input" type="text" border/>
				<button class="button">点击</button>
			</view>
			<button @click="changeURL('https://xiehongchen.github.io/ASGL')">青灯古卷</button>
		</view>
		<web-view v-else :src="url"></web-view>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(true)
const url = ref<String>()
const changeURL = (value: String) => {
	url.value = value
	show.value = false
}
</script>

<style>
.box {
	padding: 20px;
}
.search {
	display: flex;
	padding: 5px 0;
}
.input {
	height: 40px;
	flex: 1;
	border: 1px solid;
}
.button {
	margin-left: 10px;
	width: 100px;
	height: 40px;
}
</style>
