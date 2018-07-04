/*
<div class="nl3 nl4-l nr3 nr4-l bg-white overflow-hidden">
	<div class="pager-wrap bg-near-white flex flex-row">
		<div class="pager-page bg-moon-gray" style="width: calc(100%/4);">
			<img class="db" src="https://placehold.it/4000x3000">
		</div>
		<div class="pager-page" style="width: calc(100%/4);">
			<img class="db" src="https://placehold.it/4000x3000">
		</div>
		<div class="pager-page" style="width: calc(100%/4);">
			<img class="db" src="https://placehold.it/4000x3000">
		</div>
		<div class="pager-page" style="width: calc(100%/4);">
			<img class="db" src="https://placehold.it/4000x3000">
		</div>
	</div>
</div>
<div class="flex flex-row justify-between">
	<button class="flex flex-row justify-center items-center pv3 ph4 br1 pager-button pager-button--prev montserrat coral fw5 f6" disabled>
		<span class="chevron chevron-left"></span><span class="ml2">Previous</span>
	</button>
	<button class="flex flex-row justify-center items-center pv3 ph4 br1 pager-button pager-button--next montserrat coral fw5 f6 ">
		<span class="mr2">Next</span><span class="chevron chevron-right"></span>
	</button>
</div>
*/

var nextBtn = document.querySelector(".pager-button--next");
var prevBtn = document.querySelector(".pager-button--prev");
var pagerWrap = document.querySelector(".pager-wrap");
var pages = document.querySelectorAll(".pager-page");
var pageWidth = pages[0].clientWidth;
var currentPg = 0
var lastPg = pages.length - 1;
console.log(pages);

nextBtn.addEventListener('click', function(e) {
	console.log("Next clicked");
	if (currentPg !== lastPg) {
		console.log("Going left");
		currentPg++;
		if (currentPg == lastPg) { nextBtn.setAttribute('disabled', true); };
		pagerWrap.style.transform = "translateX(-" + (pageWidth * currentPg) + "px)";
		prevBtn.removeAttribute('disabled');
	};
	console.log("CurrentPg == " + currentPg);
});
prevBtn.addEventListener('click', function(e) {
	console.log("Prev clicked");
	if (currentPg !== 0) {
		console.log("Going right");
		currentPg--;
		if (currentPg == 0) { prevBtn.setAttribute('disabled', true); };
		pagerWrap.style.transform = "translateX(-" + (pageWidth * currentPg) + "px)";
		nextBtn.removeAttribute('disabled');
	};
	console.log("CurrentPg == " + currentPg);
});