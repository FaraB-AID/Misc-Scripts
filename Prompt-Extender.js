//INPUT MODIFIER
 
//Enter your extended prompt between ``
//The new text will appear immediately after your prompt, without an inherent space or linebreak.
//You can include your own line breaks below, and special characters are fine, except backslashes (\).
//Placeholders ${} don't work in the extended prompt (but still work in your regular prompt, to be clear).
var promptExtension = ``
 
const modifier = (text) => {    
  let modifiedText = text
  const lowered = text.toLowerCase()
 
 
  if(!state.promptExtend){
    state.promptExtend = true
      modifiedText += promptExtension
  }
  
 
  return ({text : modifiedText})
}
modifier(text)
