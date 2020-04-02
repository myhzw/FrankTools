/*
 * @Descripttion: 
 * @version: 
 * @Author: Frank.Hoo
 * @Date: 2020-01-11 14:26:53
 * @LastEditors  : Frank.Hoo
 * @LastEditTime : 2020-01-13 12:00:56
 */



const FrankTools = {
    //数据 获取/转化=========================================================================================================
    /**
     * @name: deepCopy
     * @test: {} 
     * @msg: 对象深拷贝
     * @param: obj
     * @return: {}
     */ 
    "deepCopy": function(obj){ 
       if(obj && typeof obj === 'object'){
            // 判断复制的目标是数组还是对象
            const targetObj = obj.constructor === Array ? [] : {};          
            //遍历所有该对象的属性
            for(let key in obj){
                if(obj.hasOwnProperty(key)){
                    //判断是否是对象
                    if(obj[key] && typeof obj[key] === 'object'){
                        targetObj[key] = this["deepCopy"](obj[key]);   
                    }else{
                        //如果不是直接赋值
                        targetObj[key] = obj[key];
                    }
                }
            }
            return targetObj;
       } 
    },
    /**
     * @name: toDate
     * @msg: 格式化转化日期--
     *          datetime:1578879099000,//时间戳或者日期类型,
     *          symbol:'/',//连接的字符串,
     *          format:false,//默认为false如果为true返回年月日类型
     * @test: {datetime:1578879099000|2020-1-13 9:31:39,symbol:'/',format=false}
     * @param {datetime,symbol,format} 
     * @return: 2020/01/13 09:31:52
     */
    "toDate": function({datetime,symbol,format=false}){
        
        //拷贝对象
        let obj = this.deepCopy({datetime,format,symbol});
        datetime = new Date(obj.datetime);
        
        //获取时间
        let year = datetime.getFullYear(),
        month = (datetime.getMonth() + 1 < 10) ? '0' + (datetime.getMonth() + 1):datetime.getMonth() + 1,
        day = datetime.getDate() < 10 ? '0' + datetime.getDate() : datetime.getDate(),
        hour = datetime.getHours() < 10 ? '0' + datetime.getHours() : datetime.getHours(),
        min = datetime.getMinutes() < 10 ? '0' + datetime.getMinutes() : datetime.getMinutes(),
        sec = datetime.getSeconds() < 10 ? '0' + datetime.getSeconds() : datetime.getSeconds();
        
        //返回时间字符串
        let dateStr =  obj.format?year + '年' + month + '月' + day + '日 ' + hour + ':' + min + ':' + sec
        :year + obj.symbol + month + obj.symbol + day +' '+ hour + ':' + min + ':' + sec;
        return dateStr;
    }
    
}

//export default FrankTools;