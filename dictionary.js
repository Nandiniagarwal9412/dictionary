console.log("dictionary")
 let input=document.getElementById("search");
 let meaning=document.getElementById("meaning");
 let word=document.getElementById("word");
const fetchApi=async(word)=>{
const apiKey=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
let res=await fetch(apiKey)
let data=await res.json();
meaning.innerText=data[0].meanings[0].definitions[0].definition
// word.innerText=data[0].word;
}


const apiDictionary=(e)=>{
let word=e.target.value;
let enter=e.key;


fetchApi(word);
}
input.addEventListener("keyup",apiDictionary)