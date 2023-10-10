<template>
	<div class="some-pic">
		<div class="some-pic_1"></div>
		<div class="some-pic_2"></div>
		<div class="some-pic_3"></div>
		<div class="some-pic_4"></div>
		<div class="some-pic_5"></div>
		<div class="some-pic_6"></div>
		<div class="some-pic_7"></div>
		<div class="some-pic_8"></div>
		<div class="some-pic_9"></div>
		<div class="some-pic_10"></div>
		<div class="some-pic_11"></div>
		<div class="some-pic_12"></div>
		<div class="some-pic_13"></div>
		<div class="some-pic_14"></div>
		<div class="some-pic_15"></div>
		<div class="some-pic_16"></div>
	</div>
</template>

<script>
export default { name: 'some-pic' };
</script>

<style lang="scss" scoped>
.some-pic {
	display: flex;
	flex-wrap: wrap;

	&_1 {
		border-bottom: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_2 {
		border-bottom: 1px solid var(--complementary-color);
		border-right: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_3 {
		border-bottom: 1px solid var(--complementary-color);
		border-top: 1px solid var(--complementary-color);
		border-left: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_4 {
		border-top: 1px solid var(--complementary-color);
		border-right: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_5 {
		border-top: 1px solid var(--complementary-color);
		border-left: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_6 {
		border-top: 1px solid var(--complementary-color);
		border-bottom: 1px solid var(--complementary-color);
		border-right: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_7 {
		border: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_8 {
		border-left: 1px solid var(--complementary-color);
		border-right: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_9 {
		border-left: 1px solid var(--complementary-color);
		border-right: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_10 {
		border: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_11 {
		border: 1px solid var(--complementary-color);
		border-right: none;
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_12 {
		border-right: 1px solid var(--complementary-color);
		border-bottom: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_13 {
		border-bottom: 1px solid var(--complementary-color);
		border-left: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_14 {
		border: 1px solid var(--complementary-color);
		border-left: none;
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_15 {
		border-top: 1px solid var(--complementary-color);
		border-left: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
	&_16 {
		border-top: 1px solid var(--complementary-color);
		width: 25%;
		height: 25%;
		transition: border-color var(--tiwe-slow) ease-in-out;
	}
}
</style>
