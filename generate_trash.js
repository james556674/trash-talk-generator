function randomIndex() {
  let randomIndex = Math.floor(Math.random() * 4)
  return randomIndex
}

function generateTrash(options) {
  // define things user might want
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']


  //return error when user choose nothing
  if (options === undefined) {
    return 'there is no option being chosen'
  }

  // create some variable to store things 
  let target = options
  let randomtask = task[target][randomIndex()]
  let randomPhrase = phrase[randomIndex()]

  // start generating talk
  let talk = `身為一個${target}, ${randomtask}${randomPhrase}吧!`

  // return the generated talk
  return talk
}

module.exports = generateTrash