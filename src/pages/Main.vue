<template>
	<div class="page">
		<div class="first-block">
			<div class="first-block-left">
				<p class="first-block-left__title white-text">
					Illia is a <span class="colored nowrap">front-end developer</span>
				</p>
				<div class="first-block-left__text">
					<p>
						He crafts responsive websites where technologies meet
						creativity
					</p>
				</div>
				<div class="first-block-left__btn">
					<btn-color-border @click="this.$router.push(`/contacts`)">
						Contact me!!
					</btn-color-border>
				</div>
			</div>
			<div class="first-block-right">
				<some-pic></some-pic>
				<div class="first-block-right__label">
					<div class="image1"></div>
				</div>
				<div class="first-block-right__dots"></div>
				<div class="first-block-right__work">
					<div class="first-block-right__work_square"></div>
					Currently working on
					<a href="#" class="white-text current-project">Portfolio</a>
				</div>
			</div>
		</div>
		<div class="quote">
			<div class="quote-box">
				<div class="quote-block">
					<div class="quote-block__jj1"></div>
					<div class="quote-block__text white-text">
						The file has no purpose, only a path.
					</div>
					<div class="quote-block__jj2"></div>
					<div class="square-block"></div>
				</div>
				<div class="quote-block__text-auth white-text">
					- folk wisdom
				</div>
			</div>
		</div>
		<div class="projects">
			<div class="projects__dots">
			</div>
			<div class="projects__squar"></div>
			<div class="projects__wrapper">
				<div class="projects__title projects-title">
					<h2 class="projects-title__left">
						<p class="white-text">
							<span class="colored">#</span>projects
						</p>
						<div class="projects-title__line"></div>
					</h2>
					<div class="projects-title__right">
						<p @click="this.$router.push(`/projects`)" class="white-text">
							View all ~~>
						</p>
					</div>
				</div>
				<div class="projects__box">
					<div class="project-box">
						<div class="project-box__img projImg4">
						</div>
						<div class="project-box__code-lang">
							<p>Vue3</p>
							<p>Vue-router</p>
							<p>VueX</p>
							<p>SVG</p>
						</div>
						<div class="project-box__text-box project-box-text-box">
							<div class="project-box-text-box__title white-text">
								Portfolio
							</div>
							<div class="project-box-text-box__text">
								My portfolio
							</div>
							<div class="project-box-text-box__btns">
								<a target="_blank" href="https://github.com/Ashot0/Portfolio-code">
									<btn-color-border>
										Github &lt~>
									</btn-color-border>
								</a>
								<a target="_blank" href="https://portfolio-ashot.000webhostapp.com/">
									<btn-color-border>
										Live &lt~>
									</btn-color-border>
								</a>
							</div>
						</div>
					</div>
					<div class="project-box">
						<div class="project-box__img projImg2">
						</div>

						<div class="project-box__code-lang">
							<p>HTML</p>
							<p>SCSS</p>
							<p>JavaScript</p>
						</div>
						<div class="project-box__text-box project-box-text-box">
							<div class="project-box-text-box__title white-text">
								NUOP student union
							</div>
							<div class="project-box-text-box__text">
								Website for NUOP Student Union
							</div>
							<div class="project-box-text-box__btns">
								<a target="_blank" href="https://github.com/Ashot0/profcom">
									<btn-color-border>
										Github &lt~>
									</btn-color-border>
								</a>
								<a target="_blank" href="https://ashot0.github.io/profcom/">
									<btn-color-border>
										Live &lt~>
									</btn-color-border>
								</a>
							</div>
						</div>
					</div>
					<div class="project-box">
						<div class="project-box__img projImg15">
						</div>
						<div class="project-box__code-lang">
							<p>HTML</p>
							<p>SCSS</p>
							<p>JavaScript</p>
						</div>
						<div class="project-box__text-box project-box-text-box">
							<div class="project-box-text-box__title white-text">
								Hlegal
							</div>
							<div class="project-box-text-box__text">
								Hlegal web-site project
							</div>
							<div class="project-box-text-box__btns">
								<a target="_blank" href="https://github.com/Ashot0/hlegal">
									<btn-color-border>
										Github &lt~>
									</btn-color-border>
								</a>
								<a target="_blank" href="https://ashot0.github.io/hlegal/">
									<btn-color-border>
										Live &lt~>
									</btn-color-border>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="skills">
			<div class="skills__title">
				<h2 class="white-text"><span class="colored">#</span>skills</h2>
				<div class="skills__line"></div>
			</div>
			<div class="skills__block">
				<div class="skills__left skills-many-icons">
					<div class="skills-many-icon">
						<div class="skills-many-icon__dots1">
						</div>
						<div class="skills-many-icon__sq1"></div>
						<some-pic class="skills-many-icon__some-pic"></some-pic>
						<div class="skills-many-icon__dots2">
						</div>
						<div class="skills-many-icon__sq2"></div>
					</div>
				</div>
				<div class="skills__right">
					<div class="skills__columns">
						<div class="skill-box">
							<div class="skill-box__title white-text">
								Language
							</div>
							<div class="skill-box__text">
								<!-- <p>TypeScript</p> -->
								<p>JavaScript</p>
							</div>
						</div>
					</div>
					<div class="skills__columns">
						<div class="skill-box">
							<div class="skill-box__title white-text">
								Framework
							</div>
							<div class="skill-box__text">
								<!-- <p>React</p> -->
								<p>Vue.js</p>
							</div>
						</div>
						<div class="skill-box">
							<div class="skill-box__title white-text">Other</div>
							<div class="skill-box__text">
								<p>HTML</p>
								<p>CSS</p>
								<p>SCSS</p>
								<p>SASS</p>
								<p>WebPack</p>
								<!-- <p>mockapi.io</p> -->
							</div>
						</div>
					</div>
					<div class="skills__columns">
						<div class="skill-box">
							<div class="skill-box__title white-text">Tools</div>
							<div class="skill-box__text">
								<p>Git & Github</p>
								<p>Figma</p>
								<p>VsCode</p>
								<p>Linux</p>
							</div>
						</div>
						<!-- <div class="skill-box">
							<div class="skill-box__title white-text"></div>
							<div class="skill-box__text"></div>
						</div> -->
						<div class="skill-box">
							<div class="skill-box__title white-text">
								Libraries
							</div>
							<div class="skill-box__text">
								<p>VueX</p>
								<p>Axios</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="about-me">
			<div class="about-me__squa"></div>
			<div class="about-me__dots">
			</div>
			<div class="about-me__box">
				<div class="about-me__box-left">
					<div class="about-me__title">
						<h2 class="white-text">
							<span class="colored">#</span>about-me
						</h2>
						<div class="about-me__line"></div>
					</div>
					<div class="about-me__text">
						<p>Hello, i’m Illia!</p>
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
						<br />
						<p>
							While I may lack professional work experience, I am
							eager to kickstart my career in front-end
							development and apply my skills to real-world
							projects. I am ready to learn and grow alongside a
							team and contribute to the creation of high-quality
							and modern web applications.
						</p>
					</div>
					<div class="about-me__btn">
						<btn-color-border @click="this.$router.push(`/about`)">
							Read more ->
						</btn-color-border>
					</div>
				</div>
				<div class="about-me__box-right">
					<div class="about-me__dots1">
					</div>
					<div class="about-me__dots2">
					</div>
					<div class="about-me__img">
						<div class="image2"></div>
						<div class="about-me__img-line"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="contacts">
			<div class="contacts__dots">
			</div>
			<div class="contacts__title">
				<h2 class="white-text">
					<span class="colored">#</span>contacts
				</h2>
				<div class="contacts__line"></div>
			</div>
			<div class="contacts__box">
				<div class="contacts__text">
					I’m primarily seeking employment opportunities, but I’m also
					open to freelance work. If you have any other requests or
					questions, please feel free to reach out to me.
				</div>
				<div class="contacts__message message">
					<div class="message__title white-text">Message me here</div>
					<a target="_blank" href="https://www.linkedin.com/in/illia-golovan-816a14269/" class="message__contact">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0 1.719C0 0.7695 0.789 0 1.7625 0H22.2375C23.211 0 24 0.7695 24 1.719V22.281C24 23.2305 23.211 24 22.2375 24H1.7625C0.789 24 0 23.2305 0 22.281V1.719ZM7.4145 20.091V9.2535H3.813V20.091H7.4145ZM5.6145 7.773C6.87 7.773 7.6515 6.942 7.6515 5.901C7.629 4.8375 6.8715 4.029 5.6385 4.029C4.4055 4.029 3.6 4.839 3.6 5.901C3.6 6.942 4.3815 7.773 5.5905 7.773H5.6145ZM12.9765 20.091V14.0385C12.9765 13.7145 13.0005 13.3905 13.0965 13.1595C13.356 12.513 13.9485 11.8425 14.9445 11.8425C16.248 11.8425 16.7685 12.8355 16.7685 14.2935V20.091H20.37V13.875C20.37 10.545 18.594 8.997 16.224 8.997C14.313 8.997 13.4565 10.047 12.9765 10.7865V10.824H12.9525C12.9605 10.8115 12.9685 10.799 12.9765 10.7865V9.2535H9.3765C9.4215 10.2705 9.3765 20.091 9.3765 20.091H12.9765Z"
								fill="#ABB2BF" />
						</svg>
						Illia Golovan
					</a>
					<a href="mailto:ilia.holovan@gmail.com" class="message__contact">
						<svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M0.071875 2.20292C0.216801 1.57709 0.573067 1.01832 1.08232 0.618104C1.59158 0.217889 2.22365 -4.32004e-05 2.875 6.42336e-09H20.125C20.7764 -4.32004e-05 21.4084 0.217889 21.9177 0.618104C22.4269 1.01832 22.7832 1.57709 22.9281 2.20292L11.5 9.0865L0.071875 2.20292ZM0 3.82075V13.8847L8.34181 8.84425L0 3.82075ZM9.71894 9.67583L0.274563 15.3807C0.507907 15.8657 0.876195 16.2753 1.33656 16.5619C1.79693 16.8486 2.33044 17.0005 2.875 17H20.125C20.6695 17.0001 21.2028 16.8479 21.6629 16.561C22.123 16.274 22.491 15.8643 22.724 15.3793L13.2796 9.67442L11.5 10.7468L9.71894 9.67442V9.67583ZM14.6582 8.84567L23 13.8847V3.82075L14.6582 8.84425V8.84567Z"
								fill="#ABB2BF" />
						</svg>
						ilia.holovan@gmail.com
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
.page {
	padding: 130px 11%;
	overflow: hidden;

	.nowrap {
		white-space: nowrap;
	}

	.image1 {
		background: center / contain no-repeat url("../img/image.png");
		width: 457px;
		height: 386px;
		filter: drop-shadow(0px 2px 4px var(--complementary-color));
		transition: filter var(--tiwe-slow) ease-in-out;
	}

	.image2 {
		background: center / contain no-repeat url("../img/Image2.png");
		width: 500px;
		height: 507px;
		bottom: 0;
		position: relative;
		filter: drop-shadow(0px 2px 4px var(--complementary-color));
		transition: filter var(--tiwe-slow) ease-in-out;

	}

	.first-block {
		width: 100%;
		margin: 0 5% 0 5%;
		height: max-content;
		display: flex;
		flex-wrap: wrap;

		&-left {
			width: 50%;
			min-width: 400px;
			height: 100%;
			display: flex;
			flex-direction: column;

			&__title {
				margin: 68px 0 52px 0;
			}

			&__title,
			&__title>* {
				font-size: 32px;
				font-style: normal;
				font-weight: 600;
				line-height: normal;
			}

			&__text {
				font-size: 16px;
				font-style: normal;
				font-weight: 400;
				line-height: 25px;
				margin-bottom: 94px;
				margin-right: 20px;
			}
		}

		&-right {
			width: 40%;
			height: 100%;
			position: relative;

			.some-pic {
				position: relative;
				z-index: 1;
				margin: 68px 0 0 0;
				width: 155px;
				height: 155px;
			}

			&__label {
				z-index: 2;
				position: absolute;
				top: 20px;
				left: 10px;
			}

			&__dots {
				position: relative;
				z-index: 3;
				width: 100px;
				height: 100px;
				top: 30px;
				right: -350px;
				background: center / contain no-repeat url("../img/DotsBig.png");
			}

			&__work {
				display: flex;
				padding: 10px 20px 10px 20px;
				align-items: center;
				gap: 10px;

				&_square {
					width: 16px;
					height: 16px;
					background-color: var(--complementary-color);
					transition: background-color var(--tiwe-slow) ease-in-out;
				}

				position: relative;
				top: 83px;
				border: 1px solid var(--border-color);
				min-width: fit-content;
				max-width: 500px;
				text-wrap: nowrap;

				.current-project {
					&:hover {
						color: var(--text-color);
						// border: 1px solid var(--bg-color-shadow);
						// background-color: var(--border-color);
					}
				}
			}
		}
	}

	.quote {
		margin: 110px 0 0 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		justify-self: center;
		align-items: center;

		&-box {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
		}

		&-block {
			position: relative;
			display: flex;
			flex-direction: column;
			padding: 32px;
			border: 1px solid var(--border-color);

			&__jj1 {
				background: center / contain no-repeat url("../img/jj.png");
				width: 40px;
				height: 40px;
				position: absolute;
				margin-top: -45px;
				margin-left: -20px;
			}

			&__jj2 {
				background: center / contain no-repeat url("../img/jj.png");
				width: 40px;
				height: 40px;
				position: absolute;
				margin-top: 50px;
				margin-left: 86%;
			}

			&__text {
				font-size: 24px;
				font-style: normal;
				font-weight: 500;
				line-height: normal;

				&-auth {
					justify-self: flex-end;
					font-size: 24px;
					font-style: normal;
					font-weight: 500;
					line-height: normal;
					padding: 16px;
					border: 1px solid var(--border-color);
					border-top: none;
				}
			}
		}

		.square-block {
			margin: 0;
			right: -27dvw;
			position: absolute;
			width: 91px;
			height: 91px;
			border: 1px solid var(--border-color);
			// border-right: none;
		}
	}

	.projects {
		margin-top: 74px;
		position: relative;

		&__dots {
			position: absolute;
			top: 50px;
			left: -13dvw;
			pointer-events: none;
			width: 84px;
			height: 84px;
			background: center / contain no-repeat url("../img/Dots.png");
		}

		&__squar {
			position: absolute;
			right: -20%;
			top: 220px;
			width: 155px;
			height: 155px;
			border: 1px solid var(--border-color);
		}

		&__wrapper {}

		&-title {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 48px;

			&__left {
				align-items: center;
				gap: 16px;
				display: flex;

				p,
				p>* {
					font-size: 32px;
					font-style: normal;
					font-weight: 500;
					line-height: normal;
				}
			}

			&__line {
				background-color: var(--complementary-color);
				width: 511px;
				max-width: 100%;
				min-width: 200px;
				height: 1px;
				transition: background-color var(--tiwe-slow) ease-in-out;
			}

			&__right {
				p {
					&:hover {
						color: var(--text-color);
					}

					font-size: 16px;
					font-style: normal;
					font-weight: 500;
					line-height: normal;
					cursor: pointer;
					white-space: nowrap;
				}
			}
		}

		&__box {
			display: flex;
			flex-wrap: wrap;
			gap: 16px;
			justify-content: center;
			align-items: center;
		}

		.project-box {
			width: 330.58px;

			.projImg1 {
				background: center / cover no-repeat url("../img/Projects/WORDLE.jpg");
			}

			.projImg2 {
				background: center / cover no-repeat url("../img/Projects/Profcom.jpg");
			}

			.projImg3 {
				background: center / cover no-repeat url("../img/Projects/Snake.png");
			}

			.projImg4 {
				background: center / cover no-repeat url("../img/Projects/Portfolio.jpg");
			}

			.projImg15 {
				background: center / cover no-repeat url("../img/Projects/Hlegal.jpg");
			}

			&__img {
				overflow: hidden;
				border: 1px solid var(--border-color);
				width: 330.58px;
				height: 201px;
			}

			&__code-lang {
				border: 1px solid var(--border-color);
				border-top: none;
				border-bottom: none;
				width: 330.58px;
				padding: 8px;
				display: flex;
				gap: 8px;
			}

			&__text-box {
				width: 330.58px;
			}

			.project-box-text-box {
				border: 1px solid var(--border-color);
				display: flex;
				flex-direction: column;
				gap: 16px;
				padding: 16px;

				&__title {
					font-size: 24px;
					font-style: normal;
					font-weight: 500;
					line-height: normal;
				}

				&__text {}

				&__btns {
					display: flex;
					gap: 16px;
				}
			}
		}
	}

	.skills {
		margin-top: 106px;

		&__title {
			display: flex;
			align-items: center;
			gap: 16px;
		}

		&__line {
			width: 239px;
			height: 1px;
			background-color: var(--complementary-color);
			transition: background-color var(--tiwe-slow) ease-in-out;
		}

		&__block {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
		}

		&__left {
			margin-top: 16px;
			height: 282px;
			min-width: 349px;
			width: 40%;

			.skills-many-icons {}

			.skills-many-icon {
				position: relative;

				&__dots1 {
					position: absolute;
					top: 48px;
					left: -10px;
					background: center / contain no-repeat url("../img/Dots.png");
					width: 63px;
					height: 63px;
				}

				&__sq1 {
					position: absolute;
					right: 36px;
					width: 86px;
					height: 86px;
					border: 1px solid var(--border-color);
				}

				&__some-pic {
					position: absolute;
					top: 169px;
					left: 15px;
					width: 113px;
					height: 113px;
				}

				&__dots2 {
					position: absolute;
					top: 143px;
					left: 177px;
					width: 63px;
					height: 63px;

					background: center / contain no-repeat url("../img/Dots.png");
				}

				&__sq2 {
					position: absolute;
					top: 193px;
					right: 0px;
					width: 52px;
					height: 52px;
					border: 1px solid var(--border-color);
				}
			}
		}

		&__right {
			margin-top: 16px;
			height: fit-content;
			max-width: 60%;
			// min-width: 584px;
			display: flex;
			justify-content: flex-end;
			flex-wrap: wrap;
			gap: 16px;
		}

		&__columns {
			display: flex;
			flex-direction: column;

			gap: 16px;
		}

		.skill-box {
			width: 178px;
			border: 1px solid var(--border-color);

			&__title {
				padding: 8px;
				border-bottom: 1px solid var(--border-color);
			}

			&__text {
				padding: 8px;
				display: flex;
				flex-wrap: wrap;
				gap: 8px;
			}
		}
	}

	.about-me {
		position: relative;

		&__squa {
			left: -21%;
			top: 134px;
			position: absolute;
			width: 155px;
			height: 155px;
			border: 1px solid var(--border-color);
		}

		&__dots {
			position: absolute;
			right: -15%;
			top: 300px;
			pointer-events: none;
			width: 103px;
			height: 103px;
			background: center / contain no-repeat url("../img/DotsBig.png");

		}

		margin-top: 112px;

		&__box {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			&-left {
				display: flex;
				flex-direction: column;
				max-width: 55%;
			}

			&-right {
				margin-left: 10%;
				max-width: 30%;
				min-width: 339px;
				position: relative;
			}
		}

		&__title {
			display: flex;
			align-items: center;
			gap: 16px;
			white-space: nowrap;
		}

		&__line {
			width: 326px;
			height: 1px;
			background-color: var(--complementary-color);
			transition: background-color var(--tiwe-slow) ease-in-out;
		}

		&__text,
		&__text>* {
			margin-top: 23px;
			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: 26px;
		}

		&__btn {
			margin-top: 27px;
		}

		&__dots1 {
			position: absolute;
			z-index: 2;
			top: 59px;
			left: -4px;
			width: 84px;
			height: 84px;
			background: center / contain no-repeat url("../img/DotsBig.png");
		}

		&__dots2 {
			position: absolute;
			z-index: 2;
			right: 16px;
			top: 279px;
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

	.contacts {
		position: relative;
		margin-top: 112px;

		&__dots {
			position: absolute;
			top: 103px;
			left: -17%;
			pointer-events: none;
			background: center / contain no-repeat url("../img/DotsBig.png");
			width: 103px;
			height: 103px;
		}

		&__title {
			display: flex;
			align-items: center;
			gap: 16px;
		}

		&__line {
			width: 127px;
			height: 1px;
			background-color: var(--complementary-color);
			transition: background-color var(--tiwe-slow) ease-in-out;
		}

		&__box {
			margin-top: 45px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
		}

		&__text {
			max-width: 505px;
			font-size: 16px;
			font-style: normal;
			font-weight: 500;
			line-height: normal;
			padding-bottom: 40px;
		}

		&__message {}

		.message {
			border: 1px solid var(--border-color);
			padding: 16px;
			display: flex;
			flex-direction: column;
			gap: 16px;

			a {
				&:hover {
					filter: drop-shadow(0px 2px 4px var(--complementary-color));
					transition: all 0.3s;
					cursor: pointer;

					svg {
						path {
							fill: var(--complementary-dub-color);
						}
					}

					color: var(--complementary-dub-color);
				}

				&:active {
					filter: drop-shadow(0px 0px 0px var(--complementary-color));
					transition: all 0.3s;

					color: var(--complementary-dub-color);
				}
			}

			&__title {}

			&__contact {
				display: flex;
				flex-direction: row;
				gap: 5px;
				justify-content: flex-start;
				align-items: center;
			}

			&__icon {
				width: 23px;
			}
		}
	}
}

.white-text {
	color: var(--complementary-dub-color);
}

h2,
h2>* {
	font-size: 32px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
}
</style>
