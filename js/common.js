

function id(id){
  return document.getElementById(id);
}


/*
 * getText: 获取元素内的文本兼容写法
 * @parameter:
 *   ele:
 *     我们要获取哪个元素内的文本,就把谁传进来
 *
 * @return:
 *     获取到文本
 *
 * by 某某某 on 2017/5/11 15: 34
 */
function getText(ele){
//    ele.textContent
//    ele.innerText
  //a.能力检测 （检测当前运行这个js代码的浏览器有没有这个功能）
  //如果当前这个浏览器支持textContent，那么ele.textContent就会有返回值， 不可能是undefined。
  if(typeof ele.textContent  == "string"){
    return ele.textContent;
  }else {
    return ele.innerText;
  }
}

/*
 * setText: 设置元素内的文本兼容写法
 * @parameter:
 *   ele:
 *     要设置哪个元素内的文本,就把谁传进来
 *   text:
 *     将该元素内的文本设置成什么
 *
 * @return:
 *   无
 *
 * by 某某某 on 2017/5/11 15: 34
 */
function setText(ele,text){
  //能力检测
  if(typeof ele.textContent  == "string"){
    ele.textContent = text;
  }else {
    ele.innerText = text;
  }
}

/*
 * removeArrAgian: 数组去重
 * @parameter:
 *
 *   arr:
 *     要哪个数组去重,就把谁传进来
 *
 * @return:
 *     去重后的数组
 *
 * by 某某某 on 2017/5/11 15: 34
 */
function removeArrAgian(arr){
  var arr2 = [];
  var count = 0;
  for(var i = 0; i < arr.length; i++){
     var current = arr[i];
     if(arr2[current] != current) {
         arr2[current] = current;
     }else {
         arr[i] = arr[arr.length - 1];
         arr.length--;
         i--;
     }
  }
  return arr;
}


/*
 * getPreviousEle: 获取上一个兄弟元素
 * @parameter:
 *
 *   ele:
 *     获取哪一个元素的上一个兄弟元素,就把谁传进来
 *
 * @return:
 *     获取到的元素,没有获取到则为null
 *
 * by 某某某 on 2017/5/13 15: 34
 */
function getPreviousEle(ele){
    var cur = ele.previousSibling;
    while(cur && cur.nodeType != 1){
        cur = cur.previousSibling;
    }
    return cur;
}

/*
 * getNextEle: 获取下一个兄弟元素
 * @parameter:
 *
 *   ele:
 *     要获取哪一个元素的下一个兄弟元素,就把谁传进来
 *
 * @return:
 *     获取到的元素,没有获取到则为null
 *
 * by 某某某 on 2017/5/13 15: 34
 */
function getNextEle(ele){
    var cur = ele.nextSibling;
    while(cur && cur.nodeType != 1){
        cur = cur.nextSibling;
    }
    return cur;
}

/*
 * getFirstChildEle: 获取第一个子元素
 * @parameter:
 *
 *   ele:
 *     要获取哪一个元素的第一个子元素,就把谁传进来
 *
 * @return:
 *     获取到的元素,没有获取到则为null
 *
 * by 某某某 on 2017/5/13 15: 34
 */
function getFirstChildEle(ele){
    var cur = ele.firstChild;
    while(cur && cur.nodeType != 1){
        cur = cur.nextSibling;
    }
    return cur;
}

/*
 * getLastChildEle: 获取最后一个子元素
 * @parameter:
 *  ele:
 *     获取哪一个元素的最后一个子元素,就把谁传进来
 *
 * @return:
 *     获取到的元素,没有获取到则为null
 *
 * by 某某某 on 2017/5/13 15: 34
 */
function getLastChildEle(ele){
    var cur = ele.lastChild;
    while(cur && cur.nodeType != 1){
        cur = cur.previousSibling;
    }
    return cur;
}

/*
 * getMyClassEle: 通过类名获取元素
 * @parameter:
 *
 *   ele:
 *     通过什么类名获取元素,就把什么类名传进来
 *
 * @return:
 *     存放获取到的元素的伪数组,没有获取到则为空的伪数组
 *
 * by 某某某 on 2017/5/13 15: 34
 */
function getMyClassEle(className){
    var nodes = document.body.getElementsByTagName("*");
    var arr1 = [];
    arr1.__proto__ = Object.prototype;
    for(var i = 0; i < nodes.length; i++){
        if(nodes[i].className == className){
            arr1.push(nodes[i]);
        }
    }
    return arr1;
}

/*
 * getNextElements: 获取所有的弟弟元素节点
 * @parameter:
 *
 *   ele:
 *     要获取哪一个元素的所有的弟弟元素节点,就把谁传进来
 *
 * @return:
 *     存放获取到的元素的伪数组,没有获取到则为空的伪数组
 *
 * by 某某某 on 2017/5/13 15: 34
 */
function getNextElements(ele){
    var arr = [];
    arr.__proto__ = Object.prototype;
    ele = getNextEle(ele);
    while(ele){
        arr.push(ele);
        ele = getNextEle(ele);
    }
    return arr;
}

/*
 * getPreviousElements: 获取所有的哥哥元素节点
 * @parameter:
 *
 *   ele:
 *     要获取哪一个元素的所有的哥哥元素节点,就把谁传进来
 *
 * @return:
 *     存放获取到的元素的伪数组,没有获取到则为空的伪数组
 *
 * by 某某某 on 2017/5/13 15: 34
 */
function getPreviousElements(ele){
    var arr = [];
    arr.__proto__ = Object.prototype;
    ele = getPreviousEle(ele);
    while(ele){
        arr.push(ele);
        ele = getPreviousEle(ele);
    }
    arr = arr.reverse()
    return arr;
}

/*
 * getXLBro: 获取相邻的两个元素节点
 * @parameter:
 *
 *   ele:
 *     获取哪一个元素的相邻的两个元素节点,就把谁传进来
 *
 * @return:
 *     存放获取到的元素的伪数组,没有获取到则为空的伪数组
 *
 * by 某某某 on 2017/5/13 15: 34
 */
function getXLBro(ele){
    var arr = [];
    arr.__proto__ = Object.prototype;
    arr[arr.length] = getPreviousEle(ele);
    arr[arr.length] = getNextEle(ele);
    return arr;
}

/*
 * getXLBro: 获取所有的兄弟元素节点
 * @parameter:
 *
 *   ele:
 *     要获取哪一个元素的所有的兄弟元素节点,就把谁传进来
 *
 * @return:
 *     存放获取到的元素的伪数组,没有获取到则为空的伪数组
 *
 * by 某某某 on 2017/5/13 15: 34
 */
function getBroAll(ele){
    var nextBro = getNextElements(ele);
    var prevBro = getPreviousElements(ele);
    return prevBro.concat(nextBro);
}



