// JScript File
if (typeof(UiFrwk) == 'undefined') UiFrwk={};
if (typeof(UiFrwk.UiCtrl) == 'undefined') UiFrwk.UiCtrl={};


UiFrwk.UiCtrl.UiHSlider = function(el, sliderObj, callBackFunc)
{
    this.m_HtmlEle = el;
    this.m_HtmlEle.m_UIControl = this;
    this.m_SliderObj = sliderObj;
    this.m_CallBackFunc = callBackFunc;
  
    el.style.width = sliderObj.width;
    el.style.height = sliderObj.height;
    el.className = "TM-HSlider-Rect";
    if (sliderObj.backgroundImg) el.style.backgroundImage = sliderObj.backgroundImg;
    el.onmousedown = this.mousedownHandle;
    el.onkeydown = this.keydownHandle;
    
    var sliderBar = document.createElement("div");
    sliderBar.id = "TM-HSlider-Bar";
    sliderBar.style.width = sliderObj.sliderwidth;
    sliderBar.style.height = sliderObj.sliderheight;
    sliderBar.className = "TM-HSlider-Bar";
    if (sliderObj.sliderImg) sliderBar.style.backgroundImage = sliderObj.sliderImg;
    sliderBar.onmousedown = this.sliderMousedownHandle;
    //sliderBar.onmousemove = this.sliderMousemoveHandle;
    //sliderBar.onmouseup = this.sliderMouseupHandle;
    this.m_Slider = sliderBar;
    el.appendChild(sliderBar);
    
    if (sliderObj.val == sliderObj.minVal)
    {
        this.m_Slider.style.left = 0;
    }
    else if (sliderObj.val == sliderObj.maxVal)
    {
        this.m_Slider.style.left = this.m_HtmlEle.offsetWidth*(sliderObj.val-sliderObj.minVal)/(sliderObj.maxVal-sliderObj.minVal)-this.m_Slider.offsetWidth;
    }
    else
    {
        this.m_Slider.style.left = this.m_HtmlEle.offsetWidth*(sliderObj.val-sliderObj.minVal)/(sliderObj.maxVal-sliderObj.minVal)-this.m_Slider.offsetWidth/2;
    };
    if (callBackFunc && (typeof callBackFunc == "function"))
    {
        callBackFunc();
    };
}

UiFrwk.UiCtrl.UiHSlider.SliderConfig = {
    keyleftCode: 37,
    keyrightCode: 39
}

UiFrwk.UiCtrl.UiHSlider.prototype.getValue = function()
{
    return this.m_SliderObj.val;
}

UiFrwk.UiCtrl.UiHSlider.prototype.setValue = function(posVal)
{
    if (posVal != this.m_SliderObj.val)
    {
        if (posVal > this.m_SliderObj.maxVal)
        {
            posVal = this.m_SliderObj.maxVal;
        }
        else if (posVal < this.m_SliderObj.minVal)
        {
            posVal = this.m_SliderObj.minVal;
        }
        
        if (posVal == this.m_SliderObj.minVal)
        {
            this.m_Slider.style.left = "0px";
        }
        else if (posVal == this.m_SliderObj.maxVal)
        {
            this.m_Slider.style.left = (this.m_HtmlEle.offsetWidth*(posVal-this.m_SliderObj.minVal)/(this.m_SliderObj.maxVal-this.m_SliderObj.minVal)-this.m_Slider.offsetWidth)+"px";
        }
        else
        {
            this.m_Slider.style.left = (this.m_HtmlEle.offsetWidth*(posVal-this.m_SliderObj.minVal)/(this.m_SliderObj.maxVal-this.m_SliderObj.minVal)-this.m_Slider.offsetWidth/2)+"px";
        }       
        this.m_SliderObj.val = posVal;   
        if (this.m_CallBackFunc && (typeof this.m_CallBackFunc == "function"))
        {
            this.m_CallBackFunc();
        }
    }
}

UiFrwk.UiCtrl.UiHSlider.prototype.keydownHandle = function(e_event)
{
    if (!e_event && window.event) e_event = window.event;
    if (e_event.keyCode == UiFrwk.UiCtrl.UiHSlider.SliderConfig.keyleftCode)
    {
        var sliderObj = this.m_UIControl;
        var val = sliderObj.getValue();
        sliderObj.setValue(val-1);
    }
    else if (e_event.keyCode == UiFrwk.UiCtrl.UiHSlider.SliderConfig.keyrightCode)
    {
        var sliderObj = this.m_UIControl;
        var val = sliderObj.getValue();
        sliderObj.setValue(val+1);
    }
}

UiFrwk.UiCtrl.UiHSlider.prototype.mousedownHandle = function(e_event)
{
    if (!e_event && window.event) e_event = window.event;
    var slider = this.m_UIControl.m_Slider;
    var pleft = document.all ? slider.style.pixelLeft : parseInt(slider.style.left, 10);
    var sliderPos = pleft + slider.offsetWidth / 2;
    var interval = this.offsetWidth/(this.m_UIControl.m_SliderObj.maxVal-this.m_UIControl.m_SliderObj.minVal);
    var off = document.all ? e_event.offsetX : e_event.pageX - e_event.target.offsetLeft;
    if (off > sliderPos+interval/2)
    {
        var incNum = Math.floor((off - sliderPos)/interval) + 1;
        this.m_UIControl.setValue(this.m_UIControl.getValue()+incNum);
    }
    else if (off < sliderPos-interval/2)
    {
        var decNum = Math.floor((sliderPos - off)/interval) +1;
        this.m_UIControl.setValue(this.m_UIControl.getValue()-decNum);
    };  
}

UiFrwk.UiCtrl.UiHSlider.mouseupHandle = function()
{
    if (UiFrwk.UiCtrl.UiHSlider.curObj)
    {
        //UiFrwk.UiCtrl.UiHSlider.curObj.m_Click = false;
        if(document.all)
        {
            document.detachEvent('onmousemove', UiFrwk.UiCtrl.UiHSlider.mousemoveHandle);
            document.detachEvent('onmouseup', UiFrwk.UiCtrl.UiHSlider.mouseupHandle);
        }
        else
        {
            document.removeEventListener('mousemove', UiFrwk.UiCtrl.UiHSlider.mousemoveHandle, true);
            document.removeEventListener('mouseup', UiFrwk.UiCtrl.UiHSlider.mouseupHandle, true);
        }
        UiFrwk.UiCtrl.UiHSlider.curObj = null;
    }    
}

UiFrwk.UiCtrl.UiHSlider.mousemoveHandle = function(e_event)
{
    if (UiFrwk.UiCtrl.UiHSlider.curObj)
    {
        if(!e_event && window.event) e_event = window.event;
        var eventEle = document.all ? e_event.srcElement : e_event.target;
        var eventPosX = document.all ? e_event.offsetX : e_event.pageX - e_event.target.offsetLeft;
        var sliderRectEle = UiFrwk.UiCtrl.UiHSlider.curObj.m_HtmlEle;
        if(eventEle.id != sliderRectEle.id)
            return ;
        while (eventEle.tagName != "HTML")
        {
            eventPosX += eventEle.offsetLeft;
            eventEle = eventEle.parentNode;
        }
        var sliderEle = UiFrwk.UiCtrl.UiHSlider.curObj.m_Slider;
        var sliderPosX = sliderEle.offsetWidth/2;
        while (sliderEle.tagName != "HTML")
        {
            sliderPosX += sliderEle.offsetLeft;
            sliderEle = sliderEle.parentNode;
        }
        var interval = sliderRectEle.offsetWidth/(UiFrwk.UiCtrl.UiHSlider.curObj.m_SliderObj.maxVal-UiFrwk.UiCtrl.UiHSlider.curObj.m_SliderObj.minVal);
        if (eventPosX > sliderPosX + interval/2)
        {
            var incNum = Math.floor((eventPosX-sliderPosX)/interval) + 1;
            var posVal = UiFrwk.UiCtrl.UiHSlider.curObj.getValue()+incNum;
            if (posVal > UiFrwk.UiCtrl.UiHSlider.curObj.m_SliderObj.maxVal)
            {
                posVal = UiFrwk.UiCtrl.UiHSlider.curObj.m_SliderObj.maxVal;
            }
            UiFrwk.UiCtrl.UiHSlider.curObj.setValue(posVal);
        }
        else if (eventPosX < sliderPosX - interval/2)
        {
            var decNum = Math.floor((sliderPosX-eventPosX)/interval) +1;
            var posVal = UiFrwk.UiCtrl.UiHSlider.curObj.getValue()-decNum;
            if (posVal < UiFrwk.UiCtrl.UiHSlider.curObj.m_SliderObj.minVal)
            {
                posVal = UiFrwk.UiCtrl.UiHSlider.curObj.m_SliderObj.minVal;
            }
            UiFrwk.UiCtrl.UiHSlider.curObj.setValue(posVal);
        }
    }

}


UiFrwk.UiCtrl.UiHSlider.prototype.sliderMousedownHandle = function(e_event)
{
    if (!e_event &&window.event) e_event = window.event;
    if(document.all)
    {
        document.attachEvent("onmousemove", UiFrwk.UiCtrl.UiHSlider.mousemoveHandle); 
        document.attachEvent("onmouseup", UiFrwk.UiCtrl.UiHSlider.mouseupHandle);      
    }
    else
    {
        document.addEventListener("mousemove", UiFrwk.UiCtrl.UiHSlider.mousemoveHandle, true); 
        document.addEventListener("mouseup", UiFrwk.UiCtrl.UiHSlider.mouseupHandle, true);      
    }
    UiFrwk.UiCtrl.UiHSlider.curObj = this.parentNode.m_UIControl;
    e_event.cancelBubble = true;
}

UiFrwk.UiCtrl.UiHSlider.prototype.doNothing = function()
{
}
/* Not in use. Google Chrome seems prefetch some gif file from router resulting in [bug]IR-B0009045. */
/*
UiFrwk.UiCtrl.UiHSlider.prototype.setStatus = function(status)
{
	 var flag = (!status);
	 this.m_HtmlEle.disabled = flag;
	 this.m_SliderObj.disabled = flag;
	 if (flag){
		this.m_Slider.onmousedown = this.doNothing;
		this.m_Slider.style.backgroundImage = 'url(./image/slid4h_sl_ds.gif)';
	 }else{
		this.m_Slider.onmousedown = this.sliderMousedownHandle;
		this.m_Slider.style.backgroundImage = 'url(./image/slid4h_sl.gif)';
         }
}
*/