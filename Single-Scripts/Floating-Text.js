//CONTEXT MODIFIER
const modifier = (text) => {
  var text = text
 
  const contextMemory = info.memoryLength ? text.slice(0, info.memoryLength) : ''
  const context = info.memoryLength ? text.slice(info.memoryLength) : text
  const lines = context.split("\n")
 
  //write what you want as floating text between ``
  const floatText = ``
 
  //replace "" with a number indicating how many line breaks back 
  //you want your text injected. A/N is 3, for example.
  const howFar = ""
 
  if(lines.length > howFar) {
     lines.splice((-(howFar) -1), 0, floatText)
  }
 
  const combinedLines = lines.join("\n").slice(-(info.maxChars - info.memoryLength))
  var finalText = [contextMemory, combinedLines].join("")
  return { text: finalText }
}
 
modifier(text)
