<template>
	<view class="content">
		<button @click="startRecord">开始录音</button>
		<button @click="endRecord">停止录音</button>
		<button @click="playVoice">播放录音</button>
	</view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const recorderManager = uni.getRecorderManager()
const innerAudioContext = uni.createInnerAudioContext()
const voicePath = ref(null)
console.log('innerAudioContext', innerAudioContext)

// recorderManager.onStop((res) => {
// 	console.log('res', res)
// })

// 开始录音
const startRecord = () => {
	
}
// 录音结束
const endRecord = () => {
	
}
// 播放录音
const playVoice = () => {
	
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
