const chat=document.getElementById('chat');

const input=document.getElementById('msg');
document.getElementById('language-select')
languageSelect.addEventListener('change', (event) => { recognition.lang = event.target.value; });
document.getElementById('send').onclick=()=>{const t=input.value;

if(!t)return;

add('YOU: ' + t, 'user');

input.value='';

add('J.A.R.V.I.S: Processing...', 'ai');
`
setTimeout(() => { let response = "I received your command. ok open  youtube"; if (t.toLowerCase().includes("hi")) { response = "Hello, Boss!"; } else if (t.toLowerCase().includes("who are you")) { response = "I am your virtual assistant!"; } chat.lastChild.innerText = response; }, 1000);else if (t.toLowerCase().includes("youtube")) {window.open('[https://www.youtube.com]'_blank'); }
function add(text, who) response = "Opening YouTube for you.";

d.className='msg +who;

d.innerText=text;

chat.appendChild(d);

chat.scrollTop=chat.scrollHeight;
const d=document.createElement('div');

d.className='msg +who;}
d.className='msg +who;}
// 1. Check for browser compatibility and initialize the API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  console.error("Your browser does not support the Web Speech API. Try Chrome or Edge.");
} else {
  // 2. Create an instance of SpeechRecognition
  const recognition = new SpeechRecognition();

  // 3. Configure settings
  recognition.lang =  'en-US';        // Set the primary language
const recognition = new webkitSpeechRecognition();
recognition.lang = 'en-US';

const utterance = new SpeechSynthesisUtterance();
utterance.lang = 'en-US';

  recognition.continuous = false;    // Stop listening automatically when the user pauses
  recognition.interimResults = true; // Show results in real-time as you speak

  // 4. Handle Lifecycle Events
  
  // Fired when the microphone becomes active
  recognition.onstart = () => {
    console.log("Microphone active. Speak now...");
  };

  // Fired when an error occurs (e.g., blocked microphone)
  recognition.onerror = (event) => {
    console.error("Speech recognition error: ", event.error);
  };

  // Fired when the session ends
  recognition.onend = () => {
    console.log("Speech recognition stopped.");
  };

  // 5. Process the Speech Result
  recognition.onresult = (event) => {
    // Get the index of the latest result
    const currentResultIndex = event.resultIndex;
    
    // Extract the transcript text
    const transcript = event.results[currentResultIndex][0].transcript;
    
    console.log("Transcript:", transcript);
    
    // Optional: Update an HTML element on your page
    // document.getElementById('output').innerText = transcript;
  };

  // 6. Control Functions (Bind these to buttons in your UI)
  function startListening() {
    recognition.start();
  }
document.getElementById('mic-btn').addEventListener('click', startListening);
  function stopListening() {
    recognition.stop();
  }
}
