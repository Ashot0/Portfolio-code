<template>
	<button class="btn-76">
		<slot></slot>
		<span class="top"></span>
		<span class="right"></span>
		<span class="bottom"></span>
		<span class="left"></span>
	</button>
</template>

<script>
export default {
	name: 'btn-color-border',
};
</script>

<style lang="scss" scoped>
.btn {
	background-color: inherit;
	border: 1px solid var(--complementary-color);
	color: var(--complementary-dub-color);
	cursor: pointer;
	&:hover {
		color: var(--text-color);
	}
}
.btn-76,
.btn-76 *,
.btn-76 :after,
.btn-76 :before,
.btn-76:after,
.btn-76:before {
	border: 0 solid;
	box-sizing: border-box;
}
.btn-76 {
	-webkit-tap-highlight-color: transparent;
	-webkit-appearance: button;
	background-color: inherit;
	background-image: none;
	color: var(--complementary-dub-color);
	cursor: pointer;
	font-family: 'Fira Code', ui-sans-serif, system-ui, -apple-system,
		BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans,
		sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
		Noto Color Emoji;
	font-size: 100%;
	line-height: 1.5;
	margin: 0;
	-webkit-mask-image: -webkit-radial-gradient(
		inherit,
		var(--complementary-color)
	);
	padding: 0;
	z-index: 8;
}
.btn-76:disabled {
	cursor: default;
}
.btn-76:-moz-focusring {
	outline: auto;
}
.btn-76 svg {
	display: block;
	vertical-align: middle;
}
.btn-76 [hidden] {
	display: none;
}
.btn-76 {
	--neon: var(--complementary-color);
	box-sizing: border-box;
	display: block;
	padding: 8px 16px;
	-webkit-mask-image: none;
	outline: 4px solid var(--complementary-dub-color);
	outline-offset: -4px;
	overflow: hidden;
	padding: 8px 16px;
	position: relative;
	transition: 0.2s linear 0.1s;
	z-index: 8;
}
.btn-76:hover {
	padding: 8px 16px;
	background: var(--neon);
	box-shadow: 0 0 5px var(--neon), 0 0 25px var(--neon), 0 0 50px var(--neon),
		0 0 100px var(--neon);
	color: var(--complementary-dub-color);
	outline-color: transparent;
	transition: 0.2s linear 0.6s;

	z-index: 8;
}
.btn-76 span {
	display: block;
	inset: 0;
	position: absolute;
	z-index: 7;
}
.btn-76 .top {
	border-top: 4px solid var(--neon);
	opacity: 0;
	transform: translateX(calc(-100% + var(--progress, 0%)));
	transition: none;
}
.btn-76:hover .top {
	--progress: 100%;
	opacity: 1;
	transition: transform 0.2s linear;
}
.btn-76 .right {
	border-right: 4px solid var(--neon);
	opacity: 0;
	transform: translateY(calc(-100% + var(--progress, 0%)));
	transition: none;
}
.btn-76:hover .right {
	--progress: 100%;
	opacity: 1;
	transition: transform 0.2s linear 0.2s;
}
.btn-76 .bottom {
	border-bottom: 4px solid var(--neon);
	opacity: 0;
	transform: translateX(calc(100% - var(--progress, 0%)));
	transition: none;
}
.btn-76:hover .bottom {
	--progress: 100%;
	opacity: 1;
	transition: transform 0.2s linear 0.4s;
}
.btn-76 .left {
	border-left: 4px solid var(--neon);
	opacity: 0;
	transform: translateY(calc(100% - var(--progress, 0%)));
	transition: none;
}
.btn-76:hover .left {
	--progress: 100%;
	opacity: 1;
	transition: transform 0.2s linear 0.6s;
}
// .btn-76:focus {
// 	.left,
// 	.bottom,
// 	.top,
// 	.right {
// 		--progress: 100%;
// 		opacity: 1;
// 	}
// }
</style>
