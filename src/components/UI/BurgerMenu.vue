<template>
	<div class="burger-wrapper">
		<ul>
			<li>
				<div class="link" @click="this.$store.commit('burgerSwitch')">
					<img src="@/img/CloseBurger.png" alt="" />
				</div>
			</li>
			<li>
				<div class="link" @click="closeMenu(`/`)">
					<span class="colored">#</span>home
				</div>
			</li>
			<li>
				<div class="link" @click="closeMenu(`/projects`)">
					<span class="colored">#</span>works
				</div>
			</li>
			<li>
				<div class="link" @click="closeMenu('/about')">
					<span class="colored">#</span>about-me
				</div>
			</li>
			<li>
				<div class="link" @click="closeMenu(`/contacts`)">
					<span class="colored">#</span>contacts
				</div>
			</li>
			<div class="bgdark"></div>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'burger-menu',
	methods: {
		closeMenu(goto) {
			this.$store.commit('burgerSwitch');
			this.$router.push(goto);
		},
	},
};
</script>

<style lang="scss" scoped>
.burger-wrapper {
	position: fixed;
	// height: 100px;
	top: 100%;
	z-index: 20;
	top: -100;
	// right: 0;
	z-index: 21;
	// border-left: 2px solid var(--border-color);
	transition: top 0.3s ease;
	ul {
		li {
			&:first-child {
				// height: 120px;
			}
			width: 100vw;
			height: max-content;

			background-color: var(--bg-color);
			color: var(--text-color);
			border-bottom: 2px solid var(--border-color);
			div {
				padding: 20px;
			}
			img {
				width: 32px;
			}
		}
		// .bgdark {
		// 	background-color: rgba($color: var(--bg-color), $alpha: 0.2);
		// 	height: 1000px;
		// }
	}
}
.bgdark {
	width: 100%;
	height: 1000px;
	background-color: var(--bg-color);
}

.link {
	font-size: 18px;
	color: var(--complementary-dub-color);
	cursor: pointer;
	position: relative;
	border: none;
	background: none;
	transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
	transition-duration: 400ms;
	transition-property: color;
	&:focus,
	&:hover {
		color: #fff;
	}
	&:focus:after,
	&:hover:after {
		width: 100%;
		left: 0%;
	}
	&:after {
		content: '';
		pointer-events: none;
		bottom: -2px;
		left: 50%;
		position: absolute;
		width: 0%;
		height: 2px;
		background-color: #fff;
		transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
		transition-duration: 400ms;
		transition-property: width, left;
	}
}
</style>
