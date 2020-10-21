'use strict';

var numOfImgs = 18;
var gImgs = _createImgs();


function getImgs(){
    return gImgs;
}


function getImgUrl(imgId){
    var img = gImgs.find(img => img.id === imgId);
    return img.url;
}


function _createImgs(){
    var imgs = [];
    for(var i = 1;i<=numOfImgs;i++){
        imgs.push(_createImg(i,i))
    }
    return imgs;
}

function _createImg(id,url){
    return {
        id:id,
        url:`img/${url}.jpg`
    };
}

console.log(gImgs);