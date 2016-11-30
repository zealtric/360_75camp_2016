window.onload=function(){
	var oBtnqq=document.getElementById("btnLoginqq");
		oBtnqq.onclick=function(){
			//获取页面高度宽度
			var sHeight=document.documentElement.scrollHeight;
			var sWidth=document.documentElement.scrollWidth;
			//可视区域
			var wHeight=document.documentElement.clientHeight;
			var wWhidth=document.documentElement.clientWidth;




			var oMask=document.createElement("div");
			    oMask.id="mask";
			    oMask.style.height=sHeight+"px";
			    oMask.style.width=sWidth+"px";
			    document.body.appendChild(oMask);

			var oLogin=document.createElement("div");
			    oLogin.id="login";
			    oLogin.innerHTML="<div id='login-con'><div id='close'><a href='#''><img src='../img/back.png' height='29' width='29'></a></div><div id='login-icon'><img src='../img/1.png' height='80' width='77'></div><form><input type='text' placeholder='账号' class='input'><input type='password' placeholder='密码' class='input'><div id='yzm-container'><input type='text' placeholder='验证码' id='yzm'><div id='yzm-img'><img src='../img/yzm.png' height='38' width='95'><span><a href='#'>换一张</a></span></div></div><button type='submit'>立即登录</button></form></div>"
			    document.body.appendChild(oLogin)
			var dHeight=oLogin.offsetHeight;
			var dWidth=oLogin.offsetWidth;

			oLogin.style.left=(sWidth-dWidth)/2+"px";
			oLogin.style.top=(sHeight-dHeight)/2+"px";

			var oClose=document.getElementById("close")
				oClose.onclick=function(){
					document.body.removeChild(oMask);
					document.body.removeChild(oLogin);

				}
		}


			var oBtnwx=document.getElementById("btnLoginwx");
		oBtnwx.onclick=function(){
			//获取页面高度宽度
			var sHeight=document.documentElement.scrollHeight;
			var sWidth=document.documentElement.scrollWidth;
			//可视区域
			var wHeight=document.documentElement.clientHeight;
			var wWhidth=document.documentElement.clientWidth;




			var oMask=document.createElement("div");
			    oMask.id="mask";
			    oMask.style.height=sHeight+"px";
			    oMask.style.width=sWidth+"px";
			    document.body.appendChild(oMask);

			var oLogin=document.createElement("div");
			    oLogin.id="login";
			    oLogin.innerHTML="<div id='login-con'><div id='close'><a href='#''><img src='../img/back.png' height='29' width='29'></a></div><div id='login-icon'><img src='../img/2.png' height='80' width='77'></div><form><input type='text' placeholder='账号' class='input'><input type='password' placeholder='密码' class='input'><div id='yzm-container'><input type='text' placeholder='验证码' id='yzm'><div id='yzm-img'><img src='../img/yzm.png' height='38' width='95'><span><a href='#'>换一张</a></span></div></div><button type='submit'>立即登录</button></form></div>"
			    document.body.appendChild(oLogin)
			var dHeight=oLogin.offsetHeight;
			var dWidth=oLogin.offsetWidth;

			oLogin.style.left=(sWidth-dWidth)/2+"px";
			oLogin.style.top=(sHeight-dHeight)/2+"px";

			var oClose=document.getElementById("close")
				oClose.onclick=function(){
					document.body.removeChild(oMask);
					document.body.removeChild(oLogin);

				}
		}


			var oBtnwb=document.getElementById("btnLoginwb");
		oBtnwb.onclick=function(){
			//获取页面高度宽度
			var sHeight=document.documentElement.scrollHeight;
			var sWidth=document.documentElement.scrollWidth;
			//可视区域
			var wHeight=document.documentElement.clientHeight;
			var wWhidth=document.documentElement.clientWidth;




			var oMask=document.createElement("div");
			    oMask.id="mask";
			    oMask.style.height=sHeight+"px";
			    oMask.style.width=sWidth+"px";
			    document.body.appendChild(oMask);

			var oLogin=document.createElement("div");
			    oLogin.id="login";
			    oLogin.innerHTML="<div id='login-con'><div id='close'><a href='#''><img src='../img/back.png' height='29' width='29'></a></div><div id='login-icon'><img src='../img/3.png' height='80' width='77'></div><form><input type='text' placeholder='账号' class='input'><input type='password' placeholder='密码' class='input'><div id='yzm-container'><input type='text' placeholder='验证码' id='yzm'><div id='yzm-img'><img src='../img/yzm.png' height='38' width='95'><span><a href='#'>换一张</a></span></div></div><button type='submit'>立即登录</button></form></div>"
			    document.body.appendChild(oLogin)
			var dHeight=oLogin.offsetHeight;
			var dWidth=oLogin.offsetWidth;

			oLogin.style.left=(sWidth-dWidth)/2+"px";
			oLogin.style.top=(sHeight-dHeight)/2+"px";

			var oClose=document.getElementById("close")
				oClose.onclick=function(){
					document.body.removeChild(oMask);
					document.body.removeChild(oLogin);

				}
		}



}