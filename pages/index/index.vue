<template>
	<view class="content">
		<view class="box" v-if="show">
			<view class="search">
				<input class="input" type="text" border />
				<button class="button" @click="postMessage">点击</button>
			</view>
			<button @click="changeURL('https://xiehongchen.github.io/ASGL')">青灯古卷</button>
		</view>
		<web-view v-else :src="url" ref="webview" @onPostMessage="handleWebviewMessage" @message="handleWebviewMessage"></web-view>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(true)
const url = ref<String>()
const changeURL = (value : String) => {
	url.value = value
	show.value = false
}
uni.setStorage({
	key: 'key',
	data: 'hello'
})

// 先接受到h5页面发来的data,再给H5发送数据的逻辑
const pages = getCurrentPages();
const vw = ref(null);
const postMessage = () => {
  vw.value = pages[pages.length - 1].$getAppWebview().children()[0];
  const userData = { TOKEN: "AAAAAA" };
  // uniapp 向 webview 发消息
  vw.value.evalJS(`receiveData(${JSON.stringify(userData)})`);
};
let postNumber = 0;
const handleWebviewMessage = (data: any) => {
  console.log("接收到消息：" + JSON.stringify(data));
};
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