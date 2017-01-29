function writecookie(name,value,days)
{
   var expire = "";

   if(days)
   {  
         var date = new date();
      
        date.setTime(date.getTime() + (day*24*60*60**1000));
        expires = ";expires = " + date.toGMTstring();
      }
  
  document.cookie = name + "=" + value + expires + ";path=/";
}
