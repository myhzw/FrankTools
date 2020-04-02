<!--
 * @Descripttion: 
 * @version: 
 * @Author: Frank.Hoo
 * @Date: 2020-04-02 10:04:26
 * @LastEditors: Frank.Hoo
 * @LastEditTime: 2020-04-02 16:12:35
 -->
<!-- 单选框
	<radio-btn-hzw v-bind="mygive" @callback=""></radio-btn-hzw>
	传入参数
	checked: false //选中状态
 -->
<!-- 按钮 -->
<template>
	<view class="check-box fboxRow Xcenter Ycenter" :class="{'checked':checked}">
		<text v-if="checked" class="yy yy-ziyuanxuanze font16"></text>
	</view>
</template>

<script>
	export default{
		props: {
			checked: {
				default: false,
				type:Boolean
			}
		}
	}
</script>

<style>
	.check-box{
		width:40upx;
		height:40upx;
		background: #fff;
		border:2upx solid rgba(230,233,235,1);
		border-radius:50%;
	}
	.checked{
		background: #6AB2E7FF;
		color: #fff;
	}
</style>
