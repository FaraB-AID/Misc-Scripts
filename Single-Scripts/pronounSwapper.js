 function pronounSwapper(){
    if(/\{ppl:[^\{\}]*\}/i.test(text)){
      pronounText = [...text.match(/\{ppl:([^\{\}]*)\}/i)]
      text = text.replace(pronounText[0], "")
      pronounNeut = false
      pronounFem = false
      pronounMasc = false
      if(/they|them|their|theirs|themselves|neuter|neutral|neutroi|nonbinary|other/i.test(pronounText[1])){
        pronounNeut = true
      } else if(/she|her|hers|herself|feminine|female|fem|woman/i.test(pronounText[1])){
        pronounFem = true
      } else if(/he|him|his|himself|masculine|male|masc|man/i.test(pronounText[1])){
        pronounMasc = true
      } else {
        pronounNeut = true
      }
      if(pronounNeut){
        text = text.replace(/\{sp\}/g, `they`)
        text = text.replace(/\{op\}/g, `them`)
        text = text.replace(/\{pa\}/g, `their`)
        text = text.replace(/\{pp\}/g, `theirs`)
        text = text.replace(/\{rp\}/g, `themselves`)
        text = text.replace(/\{Sp\}/g, `They`)
        text = text.replace(/\{Op\}/g, `Them`)
        text = text.replace(/\{Pa\}/g, `Their`)
        text = text.replace(/\{Pp\}/g, `Theirs`)
        text = text.replace(/\{Rp\}/g, `Themselves`)
      }
      if(pronounFem){
        text = text.replace(/\{sp\}/g, `she`)
        text = text.replace(/\{op\}/g, `her`)
        text = text.replace(/\{pa\}/g, `her`)
        text = text.replace(/\{pp\}/g, `hers`)
        text = text.replace(/\{rp\}/g, `herself`)
        text = text.replace(/\{Sp\}/g, `She`)
        text = text.replace(/\{Op\}/g, `Her`)
        text = text.replace(/\{Pa\}/g, `Her`)
        text = text.replace(/\{Pp\}/g, `Hers`)
        text = text.replace(/\{Rp\}/g, `Herself`)
      }
      if(pronounMasc){
        text = text.replace(/\{sp\}/g, `he`)
        text = text.replace(/\{op\}/g, `him`)
        text = text.replace(/\{pa\}/g, `his`)
        text = text.replace(/\{pp\}/g, `his`)
        text = text.replace(/\{rp\}/g, `himself`)
        text = text.replace(/\{Sp\}/g, `He`)
        text = text.replace(/\{Op\}/g, `Him`)
        text = text.replace(/\{Pa\}/g, `His`)
        text = text.replace(/\{Pp\}/g, `His`)
        text = text.replace(/\{Rp\}/g, `Himself`)
      }
    }
  }

  if(!state.pronounSwapperInitialize){
  pronounSwapper()
  state.pronounSwapperInitialize = true
}
