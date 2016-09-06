function iterativeLog(array){
  array.forEach((element,index,ray)=>{
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var srray = ['dog','cat','fish']

  srray.forEach(callback)
  return srray
}

function doToArray(array,callback){
  array.forEach(callback)
}
