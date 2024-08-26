// TYPE CASTING

const paragraph = document.querySelector("p") as HTMLParagraphElement;
const input = document.querySelector("input")! as HTMLInputElement;

paragraph.style.color = "red";
input.value = "Hello World";
