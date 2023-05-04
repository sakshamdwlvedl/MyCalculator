function appendData(data){
    display=document.getElementById('display');
    displayValue=display.value;
    if(data=='%' || data=='.' || data=='+' || data=='-' || data=='*' || data=='/')
    {
        let length=displayValue.length;
        if(data=='.')      //to avoid multiple dots(.) in a single number
        {
            let flag=1,i=length-1;
            while(i>=0)
            {
                if(displayValue[i]=='%' || displayValue[i]=='/' || displayValue[i]=='+' || displayValue[i]=='-' || displayValue[i]=='*')
                    break;
                else if(displayValue[i]=='.') 
                {
                    flag=0;
                    break;
                }
                i--;
            }
            if(flag && displayValue[length-1]>=0)       //if the last character is a digit, then just append a single dot
                display.value=displayValue+data;
            else if(flag)          //else whatever it is, append a dot with '0' (i.e --> '0.')
                display.value=displayValue+'0'+data;
        }
        else if(displayValue[length-1]=='%'|| displayValue[length-1]=='+' || displayValue[length-1]=='-' || displayValue[length-1]=='*' || displayValue[length-1]=='/')
        {
            if(displayValue[length-1]!=data)            //to avoid multiple operators together
            {
                let deleted=display.value.slice(0,-1);
                display.value=deleted+data;
            }
        }
        else
            display.value=displayValue+data;    
    }
    else
        display.value=displayValue+data;
}
function deleteData(){
    display=document.getElementById('display');
    let deleted=display.value.slice(0,-1);
    display.value=deleted;
}
function clearData(){
    display=document.getElementById('display');
    display.value='';
}
function calculate(){
    display=document.getElementById('display');
    display.value=eval(display.value);
}