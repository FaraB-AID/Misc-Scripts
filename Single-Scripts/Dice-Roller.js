const modifier = (text) => {    
  let modifiedText = text
  stop = false  
  const lowered = text.toLowerCase()
 
  var mpCommandMatcher = text.match(/\n? ?(?:> You |> You say "|)\/(\w*)(.*)/i) ? text.match(/\n? ?(?:> You |> You say "|)\/(\w*)(.*)/i) : []
  var mpCommand = mpCommandMatcher[1]
  var diceCatcher = mpCommandMatcher[2] ? mpCommandMatcher[2].match(/(?: )?(\D*)*(?: )?(\d+)?(?:d)(\d+)?(?: )?(\-|\+)?(?: )?(\d+)?(?: )?(.*)/i) : []
 
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
 
  if(mpCommand == "roll"){
    var rollTotal = 0
    var diceList = ""
    for(i = 0; i < diceCatcher[2]; i++){
      var tempNum = (getRandomInt(Number(diceCatcher[3])) + 1)
      rollTotal += tempNum
      diceList += `,${tempNum}`
    }
    if (diceCatcher[4] == "+"){
      rollTotal += Number(diceCatcher[5])
    }
    if (diceCatcher[4] == "-"){
      rollTotal -= Number(diceCatcher[5])
    }
    var rollName = diceCatcher[1] ? diceCatcher[1] : "Someone"
    if(rollName.substr(-1) == " "){
      rollName = rollName.substr(0, rollName.length - 1)
    } 
    var rollReason = diceCatcher[6] ? ` for ${diceCatcher[6]}` : ""
    var diceNumber = diceCatcher[2] ? diceCatcher[2] : "1"
    var dicePlusMinus = diceCatcher[4] ? diceCatcher[4] : ""
    var diceBonusNumber = diceCatcher[5] ? diceCatcher[5] : ""
    diceList = (diceNumber >= 2) ? `(${diceList.substr(1)}) Total:` : `Result:`
    var rollText = `${rollName} rolled ${diceNumber}d${diceCatcher[3]}${dicePlusMinus}${diceBonusNumber} ${diceList} ${rollTotal}${rollReason}.`
    state.message = diceCatcher ? rollText : ""
    text = null; stop = true; return{ text, stop }
  }
 
  return ({text : modifiedText})
}
 
modifier(text)
