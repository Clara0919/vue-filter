<template>
	<div class="finalNav">
	<Navbar/>
		<div class="main">
			<div class="jobNavbar">
				<h1 class="mb-5">前端工程師(Front-end Engineer)</h1>
				<div class="icon">
					<i class="fa-solid fa-briefcase"></i> <span>全職</span>
					<i class="fa-solid fa-dollar-sign"></i> <span>月薪100萬以上</span>
					<i class="fa-solid fa-graduation-cap"></i> <span>大學</span>
					<i class="fa-solid fa-location-dot"></i><span> 藍星</span>
				</div>
				<br>
				<div class="jobNav mt-3">
					<a href="#jobContent" class="">工作內容</a>
					<a href="#jobInfo" class="">工作資訊</a>
					<a href="#jobCondition" class="">要求條件</a>
					<a href="" class="">公司福利</a>
					<hr class="mt-3 mb-4">
				</div>
			</div>
		</div>

		<div class="jobTitle mb-5">
			<h1>賺大錢股份有限公司</h1>
		</div>

		<div class="jobContent" id="jobContent">
			<div class="jobContentTitle">
				<h2>工作內容</h2>
				<p class="ms-5 mt-3">負責 WEB 及 H5 前端開發和優化產品維護以及升級</p>
			</div>
			<div class="jobContentBody mt-3">
				<p class="ms-5">技能: <br>
					熟悉Html, CSS, Javascript (ES6)等網頁相關基本技術<br>
					熟悉Vue.js <br>
					熟悉Webpack, Nodejs <br>
					熟悉Git版本控管 <br>
					配合後端接口開發規範/第三方API間接經驗 <br>
					具響應式設計（RWD）經驗 <br>
					重視使用者體驗 熱愛學習與分享具團隊合作精神,良好溝通表達<br>
					能力,態度積極,責任心</p>
			</div>
		</div>

		<div class="jobInfo mt-5" id="jobInfo">
			<h3 class="mb-3">工作資訊</h3>
			<br>
			<i class="fa-solid fa-clock me-3 ms-5" style="width:24px; height: 24px;"></i> <span class="ms-3">工作時間: 日班</span>
			<br>
			<i class="fa-solid fa-dollar-sign me-3 ms-5" style="width:24px; height: 24px;"></i> <span class="ms-3">工作待遇: 月薪100萬以上</span>
			<br>
			<i class="fa-solid fa-briefcase me-3 ms-5" style="width:24px; height: 24px;"></i> <span class="ms-3">工作性質: 全職</span>
			<br>
			<i class="fa-solid fa-globe me-3 ms-5" style="width:24px; height: 24px;"></i> <span class="ms-3">職務類型: 軟體工程師</span>
			<br>
			<i class="fa-solid fa-location-dot me-3 ms-5" style="width:24px; height: 24px;"></i> <span class="ms-3">工作地點: 藍星</span>
		</div>

		<div class="jobCondition mt-5" id="jobCondition">
			<h3 class="mb-5">要求條件</h3>
			<p class="me-3 ms-5">工作經驗: 不拘
			<br>
			學歷限制: 大學
			<br>
			科系限制: 不拘
			<br>
			附加條件: 加分 (人美人帥心善良)</p>
			<br>
			<hr>
			<p class="mt-3 ms-5">歡迎所有求職者</p>
		</div>

		<div class="jobWelfare">

		</div>
	</div>
	<Footer/>
</template>

<script>
	import Navbar from '../components/Navbar.vue';
	import Footer from '../components/Footer.vue'
	export default {
		name: 'cultureDetailView',
		components: {
			Navbar,
			Footer
		}
	}
</script>

<style scoped>
	* {
		padding: 0;
		margin: 0;
	}
	/* .finalNav {
		position: fixed;
	} */
	.jobNavbar {
		/* position: fixed; */
		display:block;
		background-color: white;
		width: 100%;
	}
	.main {
		padding-top:2rem;
	}
	.jobTitle {
		margin-top: 5rem;
	}

	.fa-briefcase {
		font-size: 1.5rem;
		color: #2EC4B6
	}
	.fa-dollar-sign {
		font-size: 1.5rem;
		color: #2EC4B6;
	}
	.fa-graduation-cap {
		font-size: 1.5rem;
		color: #2EC4B6
	}
	.fa-location-dot {
		font-size: 1.5rem;
		color: #2EC4B6
	}
	.fa-clock{
		font-size: 1.5rem;
		color: #2EC4B6;
	}
	.fa-globe {
		font-size: 1.5rem;
		color: #2EC4B6
	}
	.main span {
		font-size: 1.5rem;
		margin-right: 1rem;
	}
	.jobNav a {
		text-decoration: none;
		font-size: 1.5rem;
		color: #2EC4B6;
		margin-right: 1.2rem;
	}
	.jobContent p {
		font-size: 1.5rem;
	}
	.jobCondition p {
		font-size: 1.5rem;
	}
	.jobCondition hr {
		width: 50%;
		margin-top: -1rem;
	}
</style>