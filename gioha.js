var dem=1;
var gtricuoi=299000;
function multi(a,b)
{
return a*b;
}
function myFunction() {
var a = eval(document.forms[0]['solg'].value);
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
   if(typeof a == 'undefined') 
  {
  a=1;
   }
  cell1.innerHTML = "Bộ thây ma";
  cell3.innerHTML = a;
  cell2.innerHTML = "299000";
  cell4.innerHTML = multi(a,299000);
  gtricuoi=gtricuoi+multi(a,299000);
  dem=dem+1;
}

function hien()
{
document.write(gtricuoi);
}
function myF1() {
 var vitri = eval(document.forms[0]['vtri'].value);
 if(typeof vitri == 'undefined') 
  {
  vitri=0;
   }
   else
   {
   vitri=vitri-1;
 }
   if(dem==0)
   {
   alert("Không có sản phẩm");
   return ;
   }
   var b=document.getElementById("myTable").rows[vitri].cells[2].innerHTML;
   gtricuoi=gtricuoi-multi(b,299000);
   document.getElementById("myTable").deleteRow(vitri);
   dem=dem-1;
}
   function hoanthanh()
   {
   if(dem==0)
   {
    document.getElementById("meoTable").style.opacity = 0;
  
  
   alert("Không có sản phẩm thanh toán");
   return ;
   }
     var tien = document.getElementById("meoTable").rows[1].cells;
  tien[3].innerHTML = gtricuoi;

   document.getElementById("meoTable").style.opacity = 1;
  alert("Thanh toán thành công");
  
   }
