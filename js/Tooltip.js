function $create(str){
	return document.createElement(str);
}

jQuery.fn.extend({
	toolTip:function(obj){
		//this:jQuery对象
		let boxDom = this[0];
		let instance ;//保存单例对象
		function ToolTip(obj){
				instance = this;
				//初始化数据
				this.initData(obj);
				//提示框的dom元素
				this.divDom = null;
				//初始化界面
				this.initUI();
				//初始化事件
				this.initEvent();
		}
			
			//初始化属性值（数据）
		ToolTip.prototype.initData = function(obj){
			let defaultObj = {
				boxDom:boxDom,
				width:200,
				height:120,
				color:"pink",
				title:"暂无提示信息"
			}
			
			for(let key in obj){
				defaultObj[key] = obj[key];
			}
			this.boxDom = defaultObj.boxDom;
			this.width = defaultObj.width;
			this.height = defaultObj.height;
			this.color = defaultObj.color;
			this.title = defaultObj.title;
		}
		
		ToolTip.prototype.initUI = function(){
			this.createDom();
			this.updateDom();
		}
		
		ToolTip.prototype.createDom=function(){
			//1、创建div
			this.divDom = $create("div");
			this.divDom.style.cssText="position:absolute;";
		}
		
		
		ToolTip.prototype.updateDom=function(){
			//1、创建div
			this.divDom.style.width=this.width+"px";
			this.divDom.style.height=this.height+"px";
			this.divDom.style.backgroundColor =this.color;
			this.divDom.style.display = "block";
			this.divDom.innerHTML = this.title;
			this.boxDom.appendChild(this.divDom);
		}
		
		ToolTip.prototype.moveEvent=function(event){
			
			let e = event || window.event;
			console.log("在"+e.target.id+"移动");
		
			let left = e.pageX-instance.boxDom.offsetLeft+20;
			let top = e.pageY-instance.boxDom.offsetTop+20;
			
			instance.divDom.style.left = left+"px";
			instance.divDom.style.top = top+"px";
		};
		
		ToolTip.prototype.outEvent =function(event){
				let e = event || window.event;
				console.log("离开了boxDom"+e.target.id);
				instance.divDom.style.display = "none";
				
				//把绑定在容器的mousemove和mouseout事件删除
				this.removeEventListener("mousemove",instance.moveEvent);
				this.removeEventListener("mouseout",instance.outEvent);
		};
		
		ToolTip.prototype.initEvent=function(){
			this.boxDom.addEventListener("mousemove",instance.moveEvent,true);
			this.boxDom.addEventListener("mouseout",instance.outEvent,true);
		}
		
		
		if(instance==undefined){
			instance=new ToolTip(obj);	
		}else{
			//1、修改JavaScript对象属性的值
			instance.initData(obj);
			//2、修改外观的属性值。
			instance.updateDom();
			//3、修改事件
			instance.initEvent();	
		}
		return instance;
	}
});
