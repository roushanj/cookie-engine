function readcookie(name)
{
    var searchname = name + "=";
    var cookies = document.cookie.split(';');

    for(var i = 0;i<cookies.length;i++)
    {
        var c = cookies[i];
      
        while(c.charAt(0)=='')
         c=c.substring(1,c.length);
     
           if(c.indexof(searchname)==0)
               return c.substring(searchname.length,c.length);  
     
        }
   
return null;

}
