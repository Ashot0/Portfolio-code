<template>
	<div class="left-block">
		<div class="left-block__line"></div>
		<div class="left-block__icons">
			<a
				target="_blank"
				href="https://github.com/Ashot0"
				class="left-block__icons-img"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 42 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M21 0C9.3975 0 0 9.17638 0 20.5059C0 29.5797 6.01125 37.2438 14.3587 39.9608C15.4087 40.1403 15.8025 39.5251 15.8025 38.9868C15.8025 38.4998 15.7763 36.8849 15.7763 35.1676C10.5 36.116 9.135 33.9116 8.715 32.7581C8.47875 32.1686 7.455 30.3487 6.5625 29.8617C5.8275 29.4772 4.7775 28.5288 6.53625 28.5032C8.19 28.4775 9.37125 29.9898 9.765 30.605C11.655 33.7065 14.6738 32.835 15.8813 32.2968C16.065 30.9639 16.6162 30.0667 17.22 29.5541C12.5475 29.0414 7.665 27.2728 7.665 19.4293C7.665 17.1993 8.47875 15.3538 9.8175 13.9184C9.6075 13.4057 8.8725 11.3039 10.0275 8.48431C10.0275 8.48431 11.7863 7.94603 15.8025 10.5862C17.4825 10.1248 19.2675 9.89409 21.0525 9.89409C22.8375 9.89409 24.6225 10.1248 26.3025 10.5862C30.3188 7.9204 32.0775 8.48431 32.0775 8.48431C33.2325 11.3039 32.4975 13.4057 32.2875 13.9184C33.6263 15.3538 34.44 17.1737 34.44 19.4293C34.44 27.2984 29.5313 29.0414 24.8588 29.5541C25.62 30.1949 26.2763 31.4253 26.2763 33.3477C26.2763 36.0903 26.25 38.2947 26.25 38.9868C26.25 39.5251 26.6438 40.1659 27.6938 39.9608C31.8628 38.5869 35.4856 35.9707 38.0521 32.4807C40.6185 28.9906 41.9993 24.8025 42 20.5059C42 9.17638 32.6025 0 21 0Z"
						fill="#ABB2BF"
					/>
				</svg>
			</a>
			<a
				target="_blank"
				href="https://www.linkedin.com/in/illia-golovan-816a14269/"
				class="left-block__icons-img"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z"
						fill="#ABB2BF"
					/>
				</svg>
			</a>
		</div>
	</div>
	<div class="navbar">
		<div class="navbar__logo">
			<img @click="this.$router.push(`/`)" src="@/img/logo.png" alt="" />
		</div>
		<nav v-if="width > 600" class="navbar__box">
			<div class="link" @click="this.$router.push(`/`)">
				<span class="colored">#</span>home
			</div>
			<div class="link" @click="this.$router.push(`/projects`)">
				<span class="colored">#</span>works
			</div>
			<div class="link" @click="this.$router.push(`/about`)">
				<span class="colored">#</span>about-me
			</div>
			<div class="link" @click="this.$router.push(`/contacts`)">
				<span class="colored">#</span>contacts
			</div>
			<!-- <div>EN</div> -->
		</nav>
		<div
			v-else
			@click="$store.commit('burgerSwitch')"
			class="navbar__burger"
		>
			<img src="@/img/OpenBurger.png" alt="" />
		</div>
	</div>
	<burger-menu :class="{ burger__open: $store.state.burgerMenu.burger }">
	</burger-menu>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue';
export default {
	name: 'nav-bar',
	components: {
		BurgerMenu,
	},
	data: () => ({
		width: 0,
	}),
	created() {
		const onResize = () => (this.width = window.innerWidth);
		onResize();
		window.addEventListener('resize', onResize);
	},
};
</script>

<style lang="scss" scoped>
.burger__open {
	top: 0;
}
.left-block {
	height: 300px;
	width: 32px;
	position: fixed;
	margin-left: 10px;
	z-index: 16;
	display: flex;
	flex-direction: column;
	align-items: center;

	&__line {
		width: 1px;
		height: 191px;
		background-color: var(--border-color);
	}
	&__icons {
		&-img {
			display: block;
			margin-top: 14px;
			svg {
				cursor: pointer;
				width: 22px;
				&:hover {
					filter: drop-shadow(0px 2px 4px var(--complementary-color));
					transition: all 0.3s;
					cursor: pointer;
					path {
						fill: var(--complementary-dub-color);
					}
				}
				&:active {
					filter: drop-shadow(0px 0px 0px var(--complementary-color));
					transition: all 0.3s;
				}
			}
		}
	}
}

.navbar {
	position: fixed;
	z-index: 15;
	width: 100%;
	height: 100px;
	padding: 20px 11% 40px 11%;
	// background-color: var(--bg-color);
	background: var(--bg-color);
	background: var(--bg-color-gradient);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	&__logo {
		img {
			width: 40px;
			cursor: pointer;
			&:hover {
				filter: drop-shadow(0px 2px 4px var(--complementary-color));
				transition: all 0.3s;
				cursor: pointer;
			}
			&:active {
				filter: drop-shadow(0px 0px 0px var(--complementary-color));
				transition: all 0.3s;
			}
		}
	}
	&__box {
		display: flex;
		gap: 20px;
		background-color: inherit;
		div {
			&:hover {
				color: var(--text-color);
			}
		}
		* {
			background-color: inherit;
			cursor: pointer;
		}
	}
	&__burger {
		img {
			width: 32px;
		}
	}
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
}
.link:focus,
.link:hover {
	color: #fff;
}
.link:focus:after,
.link:hover:after {
	width: 100%;
	left: 0%;
}
.link:after {
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
</style>
