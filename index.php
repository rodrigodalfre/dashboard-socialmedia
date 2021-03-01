<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
    <title>Document</title>

    <!-- Style CSS -->
    <link rel="stylesheet" href="css/style.css">

	

</head>
<body id="theme" class="dark-theme">
    
	<header id="top" class="dark-theme-top">
		<nav id="menu">
			<div class="container">
				<ul>
					<li>
						<h1 class="brand">
							Social Media Dashboard
						</h1>
						<h2 class="total-follow">
							Total Followers: 23,004
						</h2>
					</li>
					<li class="switchmode">
							<span class="switch-span">Dark Mode</span>
							<input id="switch-mode" class="switch switch--mode" type="checkbox">
							<label for="switch-mode"></label>
					</li>
				</ul>
			</div>
		</nav>
	</header>

	<!-- Overview - Total -->
	<div class="container">
		<div id="cards">
				<div class="card facebook card-dark">
						<div class="social-media">
							<p class="teste"><img src="imagens/icon-facebook.svg" alt=""> @Elizabeto</p>
						</div>
						<h1>1987</h1>
						<h2>Followers</h2>
						<h3 class="up">▲ 12 Today</h3>
				</div>

				<div class="card twitter card-dark">
						<div class="social-media">
							<p class="teste"><img  src="imagens/icon-twitter.svg" alt=""> @Elizabeto</p>
						</div>
						<h1>1044</h1>
						<h2>Followers</h3>
						<h3 class="down">▼ 12 Today</h4>
				</div>

				<div class="card instagram card-dark">
						<div class="social-media">
							<p class="teste"><img src="imagens/icon-instagram.svg" alt=""> @Elizabeto</p>
						</div>
						<h1>11k</h1>
						<h2>Followers</h3>
						<h3 class="up">▲ 74 Today</h4>
				</div>

				<div class="card youtube card-dark">
						<div class="social-media">
							<p class="teste"><img src="imagens/icon-youtube.svg" alt=""> Rodrigo D.</p>
						</div>
						<h1>9239</h1>
						<h2>Followers</h3>
						<h3 class="up">▲ 154 Today</h4>
				</div>
		</div>
	</div>

	<!-- Overview - Today -->
	<div class="container">
		 <div id="today">
			<h1 class="overview overview-dark">Overview - Today</h1>
			<div class="small-cards">
				<div class="today-card card-dark">
					<h2>Page Views</h2>
					<img  src="imagens/icon-facebook.svg" alt="">
					<h1>87</h1>
					<h3 class="up">▲ 3%</h3>
				</div>
				<div class="today-card card-dark">
					<h2>Likes</h2>
					<img  src="imagens/icon-facebook.svg" alt="">
					<h1>87</h1>
					<h3 class="down">▼ 1%</h3>
				</div>
				<div class="today-card card-dark">
					<h2>Likes</h2>
					<img  src="imagens/icon-instagram.svg" alt="">
					<h1>5462</h1>
					<h3 class="up">▲ 1272%</h3>
				</div>
				<div class="today-card card-dark">
					<h2>Profile Views</h2>
					<img  src="imagens/icon-instagram.svg" alt="">
					<h1>52k</h1>
					<h3 class="up">▲ 587%</h3>
				</div>
			</div>
			<div class="small-cards">
				<div class="today-card card-dark">
					<h2>Retweets</h2>
					<img  src="imagens/icon-twitter.svg" alt="">
					<h1>243</h1>
					<h3 class="up">▲ 3%</h3>
				</div>
				<div class="today-card">
					<h2>Likes</h2>
					<img  src="imagens/icon-twitter.svg" alt="">
					<h1>232</h1>
					<h3 class="down">▼ 32%</h3>
				</div>
				<div class="today-card">
					<h2>Likes</h2>
					<img  src="imagens/icon-youtube.svg" alt="">
					<h1>5462</h1>
					<h3 class="up">▲ 122%</h3>
				</div>
				<div class="today-card">
					<h2>Total Views</h2>
					<img  src="imagens/icon-youtube.svg" alt="">
					<h1>17k</h1>
					<h3 class="up">▼ 122%</h3>
				</div>
			</div>
		</div>
	</div>

			
	<!-- Javascript -->
	<script src="js/script.js"></script>
	

</body>
</html>