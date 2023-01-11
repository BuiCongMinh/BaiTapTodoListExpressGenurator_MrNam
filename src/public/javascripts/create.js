
const login = async () => {
    try {
        let name = $('.name').val()
        let password = $('.password').val()
        console.log(name,password);
        let res = await $.ajax({
            url: '/api/login-customer',
            type: 'post',
            data: {name,password }
        })
        console.log(">>>res:", res);
        alert('Đăng nhập thành công ')
        window.location.href = '/'
    } catch (error) {
        console.log(error);
    }
}
