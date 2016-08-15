require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图像相关的数据
var imageDatas = require('../data/imageDatas.json');

let yeomanImage = require('../images/yeoman.png');

//自执行函数，将图片信息装换成url信息     可以这样子写 后面的imageDatas是传入的参数imageDataArr
imageDatas = (function getImageUrl(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.imageUrl = require('../images/' + singleImageData.fileName);
        imageDatasArr[i] = singleImageData;
    }
    return imageDatasArr;
})(imageDatas);



class AppComponent extends React.Component {
    render() {
        return (
            <section className="stage">
                <section className="img-sec">
                </section>
                <nav className="controller-nav">
                </nav>
            </section>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
