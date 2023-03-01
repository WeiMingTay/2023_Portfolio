/* Footer Hover */

document.getElementById("hover").onmousemove = (e) => {
	for (const card of document.getElementsByClassName("card")) {
		const rect = card.getBoundingClientRect(),
			x = e.clientX - rect.left,
			y = e.clientY - rect.top;

		card.style.setProperty("--mouse-x", `${x}px`);
		card.style.setProperty("--mouse-y", `${y}px`);
	}
};

/* Hamburger Menu */

const navList = document.getElementById("navUl")
const hamburger = document.querySelector(".hamburger")
const closeHam = document.getElementById("closeHamburger")

hamburger.addEventListener("click", () => {
	navList.style.display="flex"
})
closeHam.addEventListener("click", () => {
	navList.style.display="none"
})
navList.addEventListener("click", () => {
	navList.style.display="none"
})

/* Wer bin ich */

const weiMing = document.getElementById("weiMing");
const whoAmI = document.getElementById("whoAmI");

weiMing.addEventListener("click", () => {
	whoAmI.style.display="block"
})
whoAmI.addEventListener("click", () => {
	whoAmI.style.display="none"
})
