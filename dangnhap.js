function ktrarong(bienx)
		{
			if(bienx.value.length==0)
				return true;
			else
				return false;
		}
function ktranhap(f)
		{

			if(ktrarong(f.hovaten))
			{
				alert("Tên người dùng không được để trống");
				f.hovaten.value="";
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
			if(ktrarong(f.pass1))
			{
				alert("Mật khẩu không được để trống");
				f.pass1.value="";
				f.pass1.focus();
				return;
			}
			alert("Đăng nhập thành công!");
		}
		