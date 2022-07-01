<template>
	<Navbar/>
	<div class="navbar">
		<div> 
			<h2>人力媒合平台</h2>
		</div>
		<div class="search">
			<form class="d-flex">
				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
				<button class="btn" type="button">Search</button>
			</form>
		</div>
	</div>
	<hr class="mb-5">

	<div class="row mb-4">
		<div class="btnGroup">
			<!-- <h3>班別</h3> -->
			<button class="btn ms-3">FN102</button>
			<button class="btn ms-3">SE211</button>
			<button class="btn ms-3">DV102</button>
		</div>
	</div>

	<div class="row mb-4">
		<div class="btnGroup">
			<!-- <h3>性別</h3> -->
			<button class="btn ms-3">男</button>
			<button class="btn ms-3">女</button>
		</div>
	</div>

	<div class="mb-4 skills">
		<div class="btnGroup">
			<!-- <h3>技能</h3> -->
			<button class="btn ms-3">HTML/CSS</button>
			<button class="btn ms-3">JavaScript</button>
			<button class="btn ms-3">Vue3.js</button>
			<button class="btn ms-3">Bootstrap5</button>
			<button class="btn ms-3">PHP</button>
			<button class="btn ms-3">PS/AI/Figma</button>
			<button class="btn ms-3">MySQL</button>
			<button class="btn ms-3">Node.js</button>
			<button class="btn ms-3">產品行銷</button>
			<button class="btn ms-3">市調分析</button>
			<button class="btn ms-3">簡報提案</button>
		</div>
	</div>
	
	<!-- <div class="mb-4 skills">
		<div class="btnGroup">
			<button class="btn ms-3">資安維護</button>
			<button class="btn ms-3">MySQL</button>
			<button class="btn ms-3">MongoDB</button>
			<button class="btn ms-3">Python</button>
			<button class="btn ms-3">Linux</button>
			<button class="btn ms-3">JAVA</button>
			<button class="btn ms-3">CCNA</button>
			<button class="btn ms-3">ELK</button>
			<button class="btn ms-3">雲端/網路架構</button>
			<button class="btn ms-3">HTML/CSS</button>
			<button class="btn ms-3">產品行銷</button>
			<button class="btn ms-3">市調分析</button>
			<button class="btn ms-3">簡報提案</button>
			<button class="btn ms-3">C</button>
			<button class="btn ms-3">CI/CD</button>
		</div>
	</div>

	<div class="mb-4 skills">
		<div class="btnGroup">
			<button class="btn ms-3">資料視覺化</button>
			<button class="btn ms-3">MySQL</button>
			<button class="btn ms-3">Linux</button>
			<button class="btn ms-3">Python</button>
			<button class="btn ms-3">Linux</button>
			<button class="btn ms-3">AWS</button>
			<button class="btn ms-3">專案管理</button>
			<button class="btn ms-3">MongoDB</button>
			<button class="btn ms-3">HTML/CSS</button>
		</div>
	</div> -->

	<div class="row mb-4">
		<div class="btn-group">
			<h5 class="ms-3">年齡:</h5>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" value="" id="" checked>
			  <label class="form-check-label" for="">
				不拘
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" value="" id="">
			  <label class="form-check-label" for="">21~25</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="">
				<label class="form-check-label" for="">26~30</label>
			  </div>
			  <div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="">
				<label class="form-check-label" for="">30以上</label>
			</div>
		</div>
	</div>

	<div class="row mb-4">
		<div class="btn-group">
			<h5 class="ms-3">工作年資:</h5>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" value="" id="" checked>
			  <label class="form-check-label" for="">
				不拘
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" value="" id="">
			  <label class="form-check-label" for="">1年以下</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="">
				<label class="form-check-label" for="">1~5年</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="">
				<label class="form-check-label" for="">5年以上</label>
			</div>
		</div>
	</div>

	<div class="row mb-4">
		<div class="btn-group">
			<h5 class="ms-3">學歷:</h5>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" value="" id="" checked>
			  <label class="form-check-label" for="">
				不拘
			  </label>
			</div>
			<div class="form-check">
			  <input class="form-check-input" type="checkbox" value="" id="">
			  <label class="form-check-label" for="">高中職</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="">
				<label class="form-check-label" for="">大學畢業</label>
			</div>
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="">
				<label class="form-check-label" for="">碩士畢業</label>
			</div>
		</div>
	</div>

	<div class="mainCard" :key="index" v-for="(data, index) in dataJson">
		<div class="card">
			<div class="cover">
				<div class="coverContent">
					<h5>座右銘</h5>
					<p>也許你現在可以摸摸我了！</p>
					<i class="fa-regular fa-star"></i>
				</div>
			</div>
			<img class="cardImg" src="https://cdn.hk01.com/di/media/images/564665/org/309ab10bf6e687c9b753948397acbbb0.jpg/AQ1ai7OnXqo8abiXokjBmz7cM9Tbycma986aX_fOml8"  alt="pic">
			<div class="card-body">
			<h5 class="cardTitle"> {{ data.name }} </h5>
			<p>擅長技能: {{ data.skills[0] }}{{data.skills[1]}}{{ data.skills[2] }}</p>
			</div>
		</div>

		<!-- <div class="card">
			<div class="cover">
				<div class="coverContent">
					<h5>座右銘</h5>
					<p>也許你現在可以摸摸我了！</p>
					<i class="fa-regular fa-star"></i>
				</div>
			</div>
			<img class="cardImg" src="https://cdn.hk01.com/di/media/images/564665/org/309ab10bf6e687c9b753948397acbbb0.jpg/AQ1ai7OnXqo8abiXokjBmz7cM9Tbycma986aX_fOml8"  alt="pic">
			<div class="card-body">
			<h5 class="cardTitle">可愛小貓</h5>
			<p>擅長技能: HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js</p>
			</div>
		</div>

		<div class="card">
			<div class="cover">
				<div class="coverContent">
					<h5>座右銘</h5>
					<p>也許你現在可以摸摸我了！</p>
					<i class="fa-regular fa-star"></i>
				</div>
			</div>
			<img class="cardImg" src="https://cdn.hk01.com/di/media/images/564665/org/309ab10bf6e687c9b753948397acbbb0.jpg/AQ1ai7OnXqo8abiXokjBmz7cM9Tbycma986aX_fOml8"  alt="pic">
			<div class="card-body">
			<h5 class="cardTitle">可愛小貓</h5>
			<p>擅長技能: HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js</p>
			</div>
		</div>

		<div class="card">
			<div class="cover">
				<div class="coverContent">
					<h5>座右銘</h5>
					<p>也許你現在可以摸摸我了！</p>
					<i class="fa-regular fa-star"></i>
				</div>
			</div>
			<img class="cardImg" src="https://cdn.hk01.com/di/media/images/564665/org/309ab10bf6e687c9b753948397acbbb0.jpg/AQ1ai7OnXqo8abiXokjBmz7cM9Tbycma986aX_fOml8"  alt="pic">
			<div class="card-body">
			<h5 class="cardTitle">可愛小貓</h5>
			<p>擅長技能: HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js</p>
			</div>
		</div>

		<div class="card">
			<div class="cover">
				<div class="coverContent">
					<h5>座右銘</h5>
					<p>也許你現在可以摸摸我了！</p>
					<i class="fa-regular fa-star"></i>
				</div>
			</div>
			<img class="cardImg" src="https://cdn.hk01.com/di/media/images/564665/org/309ab10bf6e687c9b753948397acbbb0.jpg/AQ1ai7OnXqo8abiXokjBmz7cM9Tbycma986aX_fOml8"  alt="pic">
			<div class="card-body">
			<h5 class="cardTitle">可愛小貓</h5>
			<p>擅長技能: HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js</p>
			</div>
		</div>

		<div class="card">
			<div class="cover">
				<div class="coverContent">
					<h5>座右銘</h5>
					<p>也許你現在可以摸摸我了！</p>
					<i class="fa-regular fa-star"></i>
				</div>
			</div>
			<img class="cardImg" src="https://cdn.hk01.com/di/media/images/564665/org/309ab10bf6e687c9b753948397acbbb0.jpg/AQ1ai7OnXqo8abiXokjBmz7cM9Tbycma986aX_fOml8"  alt="pic">
			<div class="card-body">
			<h5 class="cardTitle">可愛小貓</h5>
			<p>擅長技能: HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js</p>
			</div>
		</div>

		<div class="card">
			<div class="cover">
				<div class="coverContent">
					<h5>座右銘</h5>
					<p>也許你現在可以摸摸我了！</p>
					<i class="fa-regular fa-star"></i>
				</div>
			</div>
			<img class="cardImg" src="https://cdn.hk01.com/di/media/images/564665/org/309ab10bf6e687c9b753948397acbbb0.jpg/AQ1ai7OnXqo8abiXokjBmz7cM9Tbycma986aX_fOml8"  alt="pic">
			<div class="card-body">
			<h5 class="cardTitle">可愛小貓</h5>
			<p>擅長技能: HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js HTML/CSS、JavaScript、Vue3.js</p>
			</div>
		</div> -->
	</div>
	<Footer/>
</template>

<script>
	import dataJson from '../../dataJson.json/students.json'
	import Navbar from '../components/Navbar.vue';
	import Footer from '../components/Footer.vue'
	export default {
		components: {
			Navbar,
			Footer
		},
		data() {
			return {
				dataJson
			}
		},
		
	}
</script>

<style>
* {
	padding: 0;
	margin: 0;
}
body {
	padding: 1.2rem;
}
.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
/* h2有預設mb 所以調成0 */
.navbar h2 {
	margin-bottom: 0;
	color: #6DD0CD;
}
.search button {
	color:#6DD0CD
}
.btn {
	border-color: #6DD0CD;
	color: #6DD0CD;
}
.skills .btnGroup{
	display: flex;
	flex-wrap: wrap;
}
.btnGroup button {
	width: 150px;
	margin-bottom: 1rem;
	border: 2px #6DD0CD solid
}

.form-check {
	font-size: 1.2rem;
	margin-left: 1.2rem;
}
.row h5 {
	line-height: 26px;
	color: rgb(181, 180, 180);
	font-weight: normal;
}
input[type=checkbox] {
	background-color: white;
	padding: 3px 6px;
	border: 1px solid #6DD0CD;
	color: #6DD0CD;
	user-select: none; /* 防止文字被滑鼠選取反白 */
}

input[type=checkbox]:checked {
	color: #6DD0CD;
	background-color: #6DD0CD;
}
.mainCard {
	display: flex;
	flex-wrap: wrap;
}
.cardTitle {
	text-align: center;
}
.card-body {
	height: 150px;
	overflow: scroll;
}
.cover i {
	color: #6DD0CD;
	font-size: 1.5rem;
	cursor: pointer;
	margin-left: 320px;
	margin-top: 230px;
}

/* hover讓card翻轉文字+背景 transform */
.card {
	position: relative;
	margin-right: 2rem;
	margin-bottom: 2rem;
	width: 25rem;
}
.cover{
	width: 100%;
	height: 100%;
	text-align: center;
	background: rgba(30, 42, 52, 0.6);
	padding: 10px 0;
	transform: rotateX(-90deg); 
	transform-origin: 50% 50%;
	transition: 0.5s;
	opacity: 0;
	position: absolute;
	color: white;
	line-height: 420px;
}
.coverContent {
	display: inline-block;
	vertical-align: middle;
	line-height: 2;
}
.card:hover .cover {
	transform: rotateX(0deg);
	opacity: 0.9;
}

  
</style>