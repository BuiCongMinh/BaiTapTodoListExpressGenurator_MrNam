const logOut = async()=>{
    let res = await $.ajax({
        url:'api/logout-customer',
        type:'post'
    })
    console.log(">>> res:", res);

    alert('bạn đã đăng xuất thành công! ')
    window.location.href = '/login'
}