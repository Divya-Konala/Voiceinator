const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  //Your code goes here
  msg.lang = "en";
  speakButton.addEventListener("click", () => {
  msg.text = options[2].value;
});

options[0].addEventListener("input", () => {
  const rate = document.querySelector("#rate").value;
  msg.rate = rate;
});

options[1].addEventListener("input", () => {
  const pitch = document.querySelector("#pitch").value;
  msg.pitch = pitch;
});

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  msg.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voicesDropdown.addEventListener("change", () => {
  msg.voice = voices[voicesDropdown.value];
});

speakButton.addEventListener("click", () => {
  msg.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(msg);
});


stopButton.addEventListener("click", () => {
  window.speechSynthesis.cancel();
});