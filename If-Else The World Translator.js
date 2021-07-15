// The World Translator
// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang){
  if(lang=='ban'){
    console.log("হ্যালো পৃথিবী!");
  }
  else if(lang=='fr'){
    console.log("Bonjour le monde!");
  }
  else if(lang=='esp'){
    console.log("Hola Mundo!");
  }
  else if(lang=='ger'){
    console.log("Hallo Welt!");
  }
  else if(lang=='chn'){
    console.log("你好，世界!")
  }
  else{
    console.log("Hello World!");
  }
}

helloWorld('ban');
helloWorld('fr');
helloWorld('esp');
helloWorld('ger');
helloWorld('chn');
helloWorld('en');