const body = $response.body
const url = $request.url;
const obj = JSON.parse(body)

// 隐藏个人页我的应用和广告
if(url.includes("bbsallapi/lego/data")){
  obj.data.cards = obj.data.cards.filter(card=>{
    !card.code.match(/advertisement|multiIcon/i)
  })
}
$done({body: JSON.stringify(obj)})