//INPUT MODIFIER
const modifier = (text) => {    
  let modifiedText = text
  const lowered = text.toLowerCase()
 
//Enter your desired password between ""
  var passWord = ""
 
//Enter what should show up as the prompt if they get the password wrong between ``.
  var wrongPass = ``
 
//This checks your first scenario input for the password.
//If it's not there, it deletes your prompt and WI entries.
if(!state.initial){
  state.initial = true
  if (!text.includes(passWord)){
    for(var i = 0; i < worldInfo.length; i++){
      removeWorldEntry(worldInfo[i].index)
      i--
    }
    modifiedText = wrongPass
  }
}
 
 
  return ({text : modifiedText})
}
modifier(text)
