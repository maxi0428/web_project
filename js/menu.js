
$(function(){
    main.init();
})

let main={
        init:function(){
            $('#btnAdd').click(main.addItem);
        },
        addItem:function(){
            let cur = new Date();
            let year = cur.getFullYear();
            let month = cur.getMonth();
            let day = cur.getDate();
            let hours = ('0' + cur.getHours()).slice(-2); // 시
            let minutes = ('0' + cur.getMinutes()).slice(-2);  // 분
            let seconds = ('0' + cur.getSeconds()).slice(-2);  // 초

            let temp = $('#pro_item').html();
            // let status = $('#status option:selected').val();
            // if(status == 1){
            //     temp = temp.replace('{{status1}}', 'selected')
            //                 .replace('{{status2}}', '');
            // } else{
            //     temp = temp.replace('{{status1}}', '')
            //                 .replace('{{status2}}', 'selected');
            // }
            // 셀렉트박스로 입력
            temp = temp.replace('{{status}}',$('#status').val())
                        .replace('{{title}}', $('#title').val())
                        .replace('{{content}}', $('#content').val())
                        .replace('{{curTiem}}', year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds);
            
            $('#item_tbody').append(temp);
        }
    }