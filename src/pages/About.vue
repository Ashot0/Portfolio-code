<template>
	<div class="page">
		<div class="about-me">
			<div class="about-me__dots-left">
			</div>
			<div class="about-me__squa"></div>
			<div class="about-me__title">
				<h2 class="white-text">
					<span class="colored">/</span>about-me
				</h2>
			</div>
			<div class="about-me__box">
				<div class="about-me__box-left">
					<div class="about-me__text">
						<p>Hello, i’m Illia</p>
						<br />
						<p>
							I'm an aspiring front-end developer with a strong
							foundation in HTML, CSS, JavaScript, and Vue.js. My
							passion for web technologies and confidence in
							acquiring new skills drive me to move forward and
							build my career in the world of web development.
						</p>
						<br />
						<p>
							I possess the skills to create the structure of web
							pages, style them, and add interactivity using HTML
							and CSS. My knowledge of JavaScript and Vue.js
							enables me to craft dynamic and responsive user
							interfaces. Recently, I completed my training and
							successfully developed several projects, showcasing
							my abilities in creating web applications using
							Vue.js.
						</p>
						<p>
							While I may lack professional work experience, I am
							eager to kickstart my career in front-end
							development and apply my skills to real-world
							projects. I am ready to learn and grow alongside a
							team and contribute to the creation of high-quality
							and modern web applications.
						</p>
					</div>
				</div>
				<div class="about-me__box-right">
					<div class="about-me__dots1">
					</div>
					<div class="about-me__dots2">
					</div>
					<div class="about-me__img">
						<div class="img1"></div>
						<div class="about-me__img-line"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="skills">
			<div class="skills__title">
				<h2 class="white-text"><span class="colored">#</span>skills</h2>
			</div>
			<div class="skills__blocks">
				<div class="skills__dots-right">
				</div>
				<div class="skills__block skills-block">
					<div class="skills-block__title white-text">Language</div>
					<div class="skills-block__box">
						<!-- <p>TypeScript</p> -->
						<p>JavaScript</p>
					</div>
				</div>
				<div class="skills__block skills-block">
					<div class="skills-block__title white-text">Framework</div>
					<div class="skills-block__box">
						<!-- <p>React</p> -->
						<p>Vue.js</p>
					</div>
				</div>
				<div class="skills__block skills-block">
					<div class="skills-block__title white-text">Other</div>
					<div class="skills-block__box">
						<p>HTML</p>
						<p>CSS</p>
						<p>SCSS</p>
						<p>SASS</p>
						<p>WebPack</p>
						<!-- <p>mockapi.io</p> -->
					</div>
				</div>
				<div class="skills__block skills-block">
					<div class="skills-block__title white-text">Tools</div>
					<div class="skills-block__box">
						<p>Git & Github</p>
						<p>Figma</p>
						<p>VsCode</p>
						<p>Linux</p>
					</div>
				</div>
				<div class="skills__block skills-block">
					<div class="skills-block__title white-text">Libraries</div>
					<div class="skills-block__box">
						<p>VueX</p>
						<p>Axios</p>
					</div>
				</div>
			</div>
		</div>
		<div class="my-fun-facts">
			<div class="my-fun-facts__squr-left"></div>
			<div class="my-fun-facts__dots-right">
			</div>
			<div class="my-fun-facts__title">
				<h2 class="white-text">
					<span class="colored">#</span>my-fun-facts
				</h2>
			</div>
			<div class="my-fun-facts__block">
				<div class="my-fun-facts__block-left">
					<p>
						I like <span class="white-text">sushi</span> more than
						pizza.
					</p>
					<p>I'm excellent at choosing dark rum.</p>
					<p>I grew up by the sea and am a good swimmer.</p>
					<p>
						I was in <span class="white-text">Norway</span>,
						<span class="white-text">Denmark</span> and
						<span class="white-text">Latvija</span>
					</p>
					<p>
						I really like watching anime, and I've seen over a
						thousand of them in my life.
					</p>
					<p>
						My favorite anime is The
						<span class="white-text">Great Teacher Onizuka</span>
					</p>
					<p>
						I like and know how to make very
						<span class="white-text">tasty coffee</span>.
					</p>
				</div>
				<div class="my-fun-facts__block-right">
					<div class="my-fun-facts__dots">
						<img src="@/img/DotsQuadro.png" alt="" />
					</div>
					<some-pic class="my-fun-facts__some-pic"></some-pic>
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
.white-text {
	color: var(--complementary-dub-color);
}

h2,
h2>* {
	font-size: 32px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
}

.img1 {

	width: 500px;
	height: 507px;
	bottom: 0;
	position: relative;
	background: center / contain no-repeat url("../img/Image2.png");
	filter: drop-shadow(0px 2px 4px var(--complementary-color));
	transition: filter var(--tiwe-slow) ease-in-out;

}

.about-me {
	position: relative;
	margin-bottom: 103px;

	&__dots-left {
		left: -17%;
		top: 124px;
		position: absolute;
		pointer-events: none;
		background: center / contain no-repeat url("../img/Dots4on5.png");
		width: 109px;
		height: 109px;
	}

	&__squa {
		position: absolute;
		right: -21%;
		top: 110px;
		border: 1px solid var(--border-color);
		width: 155px;
		height: 155px;
		pointer-events: none;
	}

	&__box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		&-left {
			display: flex;
			flex-direction: column;
			max-width: 55%;
			padding-top: 100px;
		}

		&-right {
			margin-left: 10%;
			max-width: 30%;
			min-width: 339px;
			position: relative;
		}
	}

	&__text,
	&__text>* {
		margin-top: 23px;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 26px;
	}

	&__dots1 {
		position: absolute;
		z-index: 2;
		top: 59px;
		left: -4px;
		pointer-events: none;
		background: center / contain no-repeat url("../img/DotsBig.png");
		width: 84px;
		height: 84px;
	}

	&__dots2 {
		position: absolute;
		z-index: 2;
		right: 16px;
		top: 279px;
		pointer-events: none;
		background: center / contain no-repeat url("../img/Dots4on5.png");
		width: 104px;
		height: 104px;
	}

	&__img {
		width: 339px;
		height: 507px;
		position: relative;
		z-index: 1;

		&-line {
			position: absolute;
			margin: 0 15%;
			z-index: 2;
			height: 1px;
			background-color: var(--complementary-color);
			width: 271px;
			transition: background-color var(--tiwe-slow) ease-in-out;
		}
	}
}

.skills {
	margin-bottom: 83px;

	&__dots-right {
		position: absolute;
		right: -18.5%;
		top: -120px;
		pointer-events: none;

		background: center / contain no-repeat url("../img/DotsBig.png");

		width: 103px;
		height: 103px;
	}

	&__title {
		margin-bottom: 48px;
	}

	&__blocks {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
		align-items: flex-start;
	}

	&__block {}

	&-block {
		width: 192px;
		border: 1px solid var(--border-color);

		&__title {
			border-bottom: 1px solid var(--border-color);
			padding: 8px;
		}

		&__box {
			display: flex;
			gap: 8px;
			flex-wrap: wrap;
			padding: 8px;
		}
	}
}

.my-fun-facts {
	position: relative;
	margin-bottom: 122px;

	&__squr-left {
		width: 155px;
		height: 155px;
		border: 1px solid var(--border-color);
		position: absolute;
		left: -21%;
		top: 175px;
	}

	&__dots-right {
		width: 155px;
		height: 155px;
		position: absolute;
		right: -21%;
		top: 190px;
		pointer-events: none;
		background: center / contain no-repeat url("../img/DotsBig.png");

		width: 103px;
		height: 103px;
	}

	&__title {
		margin-bottom: 34px;
	}

	&__block {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		&-left {
			display: flex;
			flex-wrap: wrap;
			gap: 16px;
			max-width: 800px;
			width: 65%;
			height: fit-content;

			p {
				border: 1px solid var(--border-color);
				padding: 8px;
			}
		}

		&-right {
			max-width: 275px;
			height: 150px;
			width: 30%;
			// margin-right: 10%;
			position: relative;
		}
	}

	&__dots {
		position: absolute;

		img {
			width: 64px;
		}
	}

	&__some-pic {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 113px;
		height: 113px;
	}
}
</style>
