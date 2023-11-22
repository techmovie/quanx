const body = $response.body
const url = $request.url;
const obj = JSON.parse(body)
console.log($request.headers);

if(url.includes("recommend_feed")){
  obj.items = obj.items.filter(item=>!item.uid)
}else if(url.includes('group/topic')){
  obj.ad_info = null
}
$done({body: JSON.stringify(obj)})