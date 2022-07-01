<template>
	<Navbar/>
	<div class="company">
		<img src="https://www.umt-tw.com/upload/About/F_201709281700MJhBQG64.JPG" alt="公司照片">
	</div>
	<div class="mainContent">
		<div class="mainTitle">
			<h2>賺大錢公司の企業資訊</h2>
			<hr>
		</div>
		<div class="mainBody">
			<sapn class="bigNumber">1 <span class="pTitle">關懷</span></sapn>
			<p>這種文化風格強調關係和相互信任，工作環境溫暖、重視協作、包容開放，組織成員相互幫助支持。員工的凝聚力來自忠誠，領導者強調真誠、團隊協作和積極的人際關係。</p> 
			<br>

			<sapn class="bigNumber">2 <span class="pTitle">願景</span></sapn>
			<p>這種文化風格的代表是理想主義和利他主義，工作環境包容、鼓勵同情心，組織成員致力於為世界的未來創造長期價值。員工的凝聚力來自對可持續性和全球社區的關注，領導者強調共同理想，以及為全人類做貢獻。</p>
			<br>

			<sapn class="bigNumber">3 <span class="pTitle">學習</span></sapn>
			<p>這種文化風格的特徵是探索、外向性和創造性，工作環境創新、開明，組織成員積極尋找創意靈感，探索不同可能性。員工的凝聚力來自好奇心，領導者強調創新、知識和冒險。</p>
			<br>

			<sapn class="bigNumber">4 <span class="pTitle">愉悅</span></sapn>
			<p>這種文化風格表現為樂趣和興奮，工作環境輕鬆愉快，組織成員傾向於做讓自己快樂的事。員工的凝聚力來自玩樂和刺激，領導者強調自發性和幽默感。</p>
			<br>

			<sapn class="bigNumber">5 <span class="pTitle">結果</span></sapn>
			<p>這種文化風格的特徵是成就和取勝，工作環境重視結果和能力，組織成員追求卓越表現。員工的凝聚力來自對能力和成功的渴望，領導者強調目標達成。</p>
			<br>
			
			<sapn class="bigNumber">6 <span class="pTitle">權威</span></sapn>
			<p>這種文化風格的特徵是強勢、果決和大膽，工作環境競爭激烈，組織成員努力爭取個人優勢。員工的凝聚力來自強有力的控制，領導者強調自信和主導權。</p>
			<br>

			<sapn class="bigNumber">7 <span class="pTitle">安全</span></sapn>
			<p>這種文化風格強調計劃、謹慎和充分準備，工作環境穩定、可預見性強，組織成員風險偏好低，遇事深思熟慮。員工的凝聚力來自被保護和預知變化的需求，領導者強調腳踏實地和預先計劃。</p>
			<br>

			<sapn class="bigNumber">8 <span class="pTitle">秩序</span></sapn>
			<p>這種文化風格強調尊重、結構和集體守則，工作環境有條不紊，組織成員遵守規則，努力融入。員工的凝聚力來自協作，領導者強調遵循規章制度和傳統習慣。</p>
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
	.company {
		padding: 3rem;
	}
	.company img {
		width: 70vw;
		display: block;
		margin: auto;
		/* border: 6px #2EC4B6 solid; */
		/* border-radius: 50% / 50%; */
	}
	.mainContent {
		padding: 3rem;
		width: 70vw;
		margin: auto;
	}
	.mainBody p {
		line-height: 2rem;
		font-size: 1.1rem;
	}
	.mainTitle {
		color: #2EC4B6
	}
	hr {
		width: 250px;
		border: 3px #CBF3F0 solid;
		margin-top: 0.5rem;
	}
	.pTitle {
		font-size: 1.5rem;
		color: #FFBF69
	}
	.bigNumber {
		font-size: 2.5rem;
		font-weight: 900;
		color: #FF9F1C
	}
</style>