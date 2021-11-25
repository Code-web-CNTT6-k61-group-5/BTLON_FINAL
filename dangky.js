function ktrarong(bienx)
		{
			if(bienx.value.length==0)
				return true;
			else
				return false;
		}
function ktragiong(txt, reg)
            {
                return reg.test(txt.value);
            }
                
function ktranhap(f)
		{
		var check_email = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
		

			if(ktrarong(f.hovaten))
			{
				alert("Tên người dùng không được để trống");
				f.hovaten.value="1convitxoerahaicanh";
				f.hovaten.focus();
				return;
			}
			if(f.hovaten.value.length<8)
			{
				alert("Tên người dùng phải lớn hơn tối thiểu 8 kí tự");
				f.hovaten.value="";
				f.hovaten.focus();
				return ;
			}	
			if(ktrarong(f.email))
			{
				alert("Email không được để trống");
				f.email.value="meocon1234@gmail.com"
				f.email.focus();
				return;
			}
			
			if(!ktragiong(f.email,check_email))
                {
                    alert("Email không hợp lệ");
                    f.email.value = "";
                    f.email.focus();
                    return;
                }
                
			
			if(ktrarong(f.pass1))
			{
				alert("Mật khẩu gốc không được để trống");
				f.pass1.value="";
				f.pass1.focus();
				return;
			}
			if(ktrarong(f.pass2))
			{
				alert("Mật khẩu nhập lại không được để trống");
				f.pass2.value="";
				f.pass2.focus();
				return;
			}
	
			if(f.pass1.value!=f.pass2.value)
			{
				alert("Mật khẩu gốc không giống mật khẩu nhập lại");
				// f.pass1.value="1234567890";
				f.pass1.value="";
				f.pass2.value="";	
				f.pass1.focus();	
			return;
			}
			alert("Đã đăng kí thành công!");
		}
		