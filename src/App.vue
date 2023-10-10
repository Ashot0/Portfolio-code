<template>
	<div class="wrapper">
		<header>
			<nav>
				<nav-bar></nav-bar>
			</nav>
		</header>
		<div class="pages__wrapper">
			<router-view> </router-view>
		</div>
		<footer>
			<footer-block> </footer-block>
		</footer>
	</div>
</template>

<script>
import NavBar from './components/UI/NavBar.vue';
export default {
	components: {
		NavBar,
	},
	data() {
		return {
			values: [
				'#4C5633',
				'#2E714D',
				'#4FC973',
				'#43B17B',
				'#6D8C67',
				'#609358',
			],
			currentIndex: 0,
			currentValue: '',
		};
	},
	computed: {
		// currentValue() {
		// 	return this.values[this.currentIndex];
		// },
	},
	created() {
		// Запустите интервал, который будет обновлять переменную каждые 5 секунд

		this.updateValueInterval = setInterval(this.updateValue, 5000);
		this.updateValue(); // Вызовите updateValue() сразу, чтобы установить начальное значение
	},
	beforeDestroy() {
		// Очистите интервал при уничтожении компонента, чтобы избежать утечки памяти
		clearInterval(this.updateValueInterval);
	},
	methods: {
		updateValue() {
			// Установите текущее значение переменной в соответствии с текущим индексом
			this.currentValue = this.values[this.currentIndex];
			// Увеличьте индекс для следующей итерации
			this.currentIndex++;
			this.currentIndex = (this.currentIndex + 1) % this.values.length;
			document.documentElement.style.setProperty(
				'--complementary-color',
				this.currentValue
			);
			// Если достигнут конец массива, вернитесь к началу
			if (this.currentIndex >= this.values.length) {
				this.currentIndex = 0;
			}
		},
	},
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Code&display=swap');

:root {
	--bg-color: #282c33;
	--bg-color-gradient: linear-gradient(180deg,
			rgba(40, 44, 51, 1) 0%,
			rgba(40, 44, 51, 1) 50%,
			rgba(40, 44, 51, 0) 100%);
	--complementary-color: #c778dd;
	--complementary-dub-color: #ffffff;
	--text-color: #abb2bf;
	--shadow-color: rgba(0, 0, 0, 0.2);
	--border-color: #abb2bf;
	--bg-color-shadow: #2021243f;

	--normal-text: 1rem;
	--mini-text: 0.8rem;

	--text-shadow-green-blue: 1px 1px 2px var(--complementary-color),
		0 0 1em var(--complementary-color),
		0 0 0.2em var(--complementary-dub-color);

	--tiwe-slow: 3.5s;
}

@media screen and (max-width: 600px) {
	.my-fun-facts__block-left {
		width: 100% !important;
	}

	.my-fun-facts__block-right {
		width: 100% !important;
	}
}

@media screen and (max-width: 900px) {}

@media screen and (max-width: 1200px) {
	.skills__right {
		max-width: 100% !important;
	}

	.about-me__box-left {
		max-width: 100% !important;
	}
}

@media screen and (max-width: 1800px) {}

body {
	background-color: var(--bg-color);
	font-family: 'Fira Code', monospace;
	color: var(--text-color);
	font-size: var(--normal-text);
}

.wrapper {}

.pages__wrapper {
	display: flex;
	// flex-direction: column;
	justify-content: center;
	align-items: center;
}

.page {
	align-self: center;
	padding: 130px 11%;
	overflow: hidden;
	max-width: 2000px;
	// background-color: var(--bg-color);
}

a {
	color: var(--text-color);
}

.colored {
	color: var(--complementary-color);
	transition: color var(--tiwe-slow) ease-in-out;
}
</style>
