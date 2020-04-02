<!-- 按钮
	<btn-hzw v-bind="mygive" @callback=""></btn-hzw>
	
 -->
<!-- 按钮 -->
<template>
	<view class="btn fboxRow Xcenter Ycenter">
		<text><slot></slot></text>
	</view>
</template>

<script>
</script>

<style>
	.btn{
		width:686upx;
		height:80upx;
		background:rgba(106,178,231,1);
		box-shadow:0px 20upx 35upx 0upx rgba(32,38,52,0.13);
		border-radius:40upx;
	}
	.btn text{
		font-size:32upx;
		color: #fff;
	}
</style>
