import img12url from "./1_2-dot_plot.png"
import img13url from "./1_3-dot_plot.png"

const img12: HTMLImageElement | null = document.querySelector("#img-1-2-c img")

if (img12) img12.src = img12url

const img13: HTMLImageElement | null = document.querySelector("#img-1-3-a img")

if (img13) img13.src = img13url
