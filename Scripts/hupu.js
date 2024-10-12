const body = $response.body
const url = $request.url;
const obj = JSON.parse(body)

// 隐藏个人页我的应用和广告
if(url.includes("bbsallapi/lego/data")){
  obj.data.cards = obj.data.cards.filter(card=>{
    !card.code.match(/advertisement|multiIcon/i)
  })
}else if(url.includes("news/v3/tab")){
  obj.result = obj.result.filter(tab=>{
    return !tab.name.match(/球星|英雄/)
  })
}
console.log(JSON.stringify(obj));
$done({body: JSON.stringify(obj)})