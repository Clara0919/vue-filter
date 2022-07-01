<template>
	<Navbar/>
	<div class="main">
		<div class="mainTitle">
			<h1>軟體工程師XX心得 | 面試經驗分享</h1>
			<img src="https://englishlive.ef.com/zh-tw/blog/wp-content/uploads/sites/15/2018/12/blog_181205_02.jpg" alt="job">
		</div>
		<div class="mainContent">
			<div class="mainDisc">
				<p>一般台灣人資主管的面試，都屬於行為面談的形式居多，這也是為什麼，人資主管愛問的就是那幾題，基本上從自我介紹、工作經歷、離職原因、期望待遇、到最後一定會問一個很關鍵的問題，那就是你還有問題想問嗎? 我以前時常很喜歡在大學談到面試技巧時，來問問學生到底會問些什麼?
				<br>
				<br>
				然後結果通常都會非常兩極，一種是聰明的提問，有利於幫助你判斷一家公司是否適合你，一種是問完，我要幫他捏一把冷汗，大家並不知道，有些問題當你還沒拿到Offer 前，去問只會讓你像極了危險人物，例如: 任何有關薪資福利、何時報到、或是你想要的特權，都不應該在面試時提出來，問了只會讓你直接被面試官趕走，或是讓人資主管對你觀感變差，資方其實對你有意思，才會問你何時能報到，或是跟你談到錢，如果我們不打算錄用，根本不會問你，理當你也不應該主動來問。
				<br>
				<br>
				接下來談談，如果你必須提問應該問些什麼好問題，能幫你直接加分!</p>
			</div>
			<p class="contentTitle">1.你能告訴我關於這個職位更詳細的情況嗎?</p>
			<p class="contentBody">這個問題非常重要，問了之後你能夠更了解這個工作的狀況，有些人資會自己主動先告訴你職位的狀況，有些不會，但如果資方對於工作內容講得很大方向，或是偏含糊，你就應該提出這個問題，甚至你還可以深入詢問，有關於這個職位的挑戰、工作內容、組織圖，這都是妳可以詢問的部分，了解了也可以評估是不是你想要的工作。</p>

			

			<p class="contentTitle">2.你認為能勝任這個職位的理想條件(或人選)是什麼?</p>
			<p class="contentBody">這個問題一定要問，因為當你問了，你就可以接著調整你的回答，把自己包裝成面試官想要的人設，一邊述說一個關於過往成就的小故事，這個提問有助於你專注的推銷個人特點，聚焦在面試官感興趣的話題，而不是那些無關緊要的廢話，浪費彼此時間。</p>

			

			<p class="contentTitle">3.你希望獲得這個職位的人，上班3-6 個月裡，應該有什麼成功表現?</p>
			<p class="contentBody">萬一你被錄用了，這個問題能幫助獲得上任後的資訊，還可以再談話之間，先置入一種想像你錄取的假象，學長還有一種問法就是，有沒有什麼大型專案，我可以預先準備。這類的問題，都能幫助你獲得面試官的好感，任誰都不會錄用一個帶著空腦袋來問傻問題的人，只有應徵動機最為強烈的，會被錄用。</p>

			

			<p class="contentTitle">4.你認為在位的人最成功的地方是什麼? 在哪些事情上，你希望她能有什麼不同的處理方式?</p>
			<p class="contentBody">我最後還有一個獨家問題，就是我會旁敲側擊，前手為什麼會離職，但我不會問的那麼直接，因為我曾經在職時，有跟一家大型台商公司談過，在言談的過程，我發現這個人資主管非常在意她要找的人，會不會做很久，因為她對我說，Molly 我覺得你的學經歷都很好，但是前手跟你背景太像，都跟你一樣是外商出身、住在台北、英文很好，做了兩年想離職，但很可惜我們是台商，想找的是會做很久的員工，不是來過水的，然後聊完，當時在外商的我，開了眼界，當然也收到了拒絕卡。</p>

			<hr>
			
			<p class="end">從這件事情後，我都會問來面試我的主管一個問題，來確認她到底用人在意什麼點。我會問前手的優點，更是接著問希望以後找的人，有什麼不同? 每個主管都有自己的用人潛規則，正如同我的書名，是要帶大家揭開潛規則的，當你能掌握主管的喜好，你就能演戲，暗示她，我跟前手的區別，甚至提到你好在哪。以前離職的時候，主管也會問我，你走了找什麼樣的人，你覺得更適合，我也曾經說過，應該是這輩子不想再換工作的人，就很適合。
			<br>
			<br>
			以上四個問題，希望能幫助你看清局勢，不再為了面試提問而煩惱，當然好的問題，更可以幫你跟面試官建立好關係， 還能幫自己獲得Offer，何樂而不為。</p> 


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
	* {
		padding: 1rem;
	}
	.main {
		padding: 3rem;
		border: 1px #CBF3F0 solid;
		width: 70%;
		margin: auto;
	}
	.mainTitle {
		margin: auto;
		width: 80%;
		text-align: center;
	}
	.mainTitle h1 {
		color: #2EC4B6;
	}
	.main img {
		/* object-fit: cover; */
		width: 90%;
	}

	.mainDisc p {
		font-size: 1.1rem;
		color: grey;
		font-weight: bold;
	}
	.contentTitle {
		font-size: 1.5rem;
		color: #FF9F1C;
	}
	.contentBody {
		font-size: 1.1rem;
	}
	hr {
		border: 1px #CBF3F0 solid;
		width: 80%;
		margin: auto;
		margin-top: 1rem;
		padding: 0;
	}
	.end {
		font-size: 1.2rem;
		color: #FFBF69;
		margin-top: 1rem;
	}
</style>