let url ={
    hostLists:'/index/hotLists',
    banner:'/index/banner',
    topList:'/category/topList',
    subList:'/category/subList',
    rank:'/category/rank',
    searchList:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal',
    cartAdd:"/cart/add",
    cartLists:'/cart/list',
    cartReduce:'/cart/reduce',
    cartRemove:'/cart/remove',
    cartMremove:'/cart/mremove',
    addressLists:'/address/list',
    addressAdd:'/address/add',
    addressRemove:'/address/remove',
    addressUpdata:'/address/update',
    addressSetDefault:'/address/setDefault',
     
}

let host = 'https://www.easy-mock.com/mock/5d085a6c7295523d0cec9cb9'

for(let key in url){
    url[key] = host + url[key];
}

export default url;