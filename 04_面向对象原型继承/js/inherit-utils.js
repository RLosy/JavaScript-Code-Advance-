    //工具函数
    //真实开发进行封，创建对象的过程
        function createObject(o){
            function F(){};
            F.prototype = o;
            return new F()
        }
        //将Subtype与Supertype练习在一起
        //寄生式函数
        function inherit(Subtype, Supertype) {
            Subtype.prototype = createObject(Supertype.prototype);
            Object.defineProperty(Subtype.prototype,"constructor",{
                enumerable:false,
                configurable:true,
                writable:true,
                value:Subtype,
            })
        }