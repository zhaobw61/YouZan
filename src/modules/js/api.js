let url ={
    hostLists:'/index/hotLists',
    banner:'/index/banner'
}

let host = 'https://www.easy-mock.com/mock/5d085a6c7295523d0cec9cb9'

for(let key in url){
    url[key] = host + url[key];
}

export default url;