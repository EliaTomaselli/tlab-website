
const speech = new SpeechSynthesisUtterance();

function speak(s: string, lang: string = "en") {
	speech.text = s;
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;
  speech.lang = lang;
	window.speechSynthesis.speak(speech);
}

export default speak;