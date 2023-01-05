
async function addTodoList() {
    try {
        const role = $('.role').val()
        const member = $('.name').val()
        const tile = $('.nameJob').val()
        const status = $('.status').val()
        // console.log(role, name, nameJob, status);

        await $.ajax({
            url: '/api/todolist',
            type: 'post',
            data: { role, member, tile, status }
        })

        window.location.href = '/'
        // console.log('>>> client result:', result);

    } catch (error) {
        console.log('>>> ClinetEr: ', error);
    }

}


