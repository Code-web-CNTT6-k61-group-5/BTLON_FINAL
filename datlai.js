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
			if(ktrarong(f.email))
			{
				alert("Email không được để trống");
				f.email.value=""
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
			alert("Đã đăng kí lấy lại mật khẩu thành công!");
			}
		