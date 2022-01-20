function create_random(number, arr){    ///Tạo ngẫu nhiên
    arr = [];   ///Xóa mảng cũ
    $("div[id *= div]").remove();   ///Xóa ô cũ
    for(let i=0; i<number; i++)
    {
        arr[i] = Math.round(Math.random() * 100);
        
    }
    $("input#array").val(arr.join(" "));    ///Hiện giá trị mới lên input#array
    for(var i = 0; i < number; i++) {
        $('#dv_array').append(`<div id=div${i}>${arr[i]}</div>`);    ///Tạo div chứa giá trị mới
    }
}

function increase_check(n, arr){       ///Kiểm tra mảng sắp xếp chưa
    for(var i=0; i<n-1; i++)
    {
        if(arr[i] > arr[i+1]){return false;}
    }
    return true;
}               

$(document).ready(function (){ 
    $("input#array").focus(function(){
        $('#information').text("Nhập mảng");
    })

    $("input#array").blur(function(){
        $('#information').text("");
    })

    $("input#number").focus(function(){
        $('#information').text("Nhập chiều dài mảng (2 - 10)");
    })

    $("input#number").blur(function(){
        $('#information').text("");
    })

    $('#random').mouseover(function(){
        $('#information').text("Tạo mảng ngẫu nhiên");
    })

    $('#random').mouseout(function(){
        $('#information').text("");
    })
    
    $("button#control_skip").prop('disabled', true); 

    $("button#control_go").click(function(){    ////Thiết lập cho nút go
        let arr = $("input#array").val().split(" ");
        n = $("input#number").val();
        for(var i = 0; i < n; i++) {
        $('#dv_min').append(`<div id=min${i}></div>`);    ///Tạo div chứa chữ min
    }
        if(n<2 || n>10){
            alert("Số phần tử lớn nhất là: 10\nSố phần tử nhỏ nhất là: 2");
        }
        else if(arr.length != n){
            if(confirm("Chưa nhập mảng hoặc mảng không đúng định dạng!\nCó muốn tạo mảng ngẫu nhiên không?") == true) {
                create_random(n, arr);
            }
        }
        else if(increase_check(n, arr) == true){
            alert("Mảng đã sắp xếp rồi!");
        }
        else {            
            for(var i=0; i < n; i++){
                arr[i] = parseInt(arr[i]);
            }
            
            $("div[id *= div]").remove();   ////Xóa div cũ
            $("div[id *= imgdown]").remove();
            $("div[id *= pnt_down]").remove();
            $("div[id *= imgup]").remove();
            $("div[id *= pnt_up]").remove();
            $("div[id *= infrm]").remove();
            for(var i = 0; i < n; i++) {    ////Tạo div mới với dữ liệu từ bàn phím
                $('#dv_array').append(`<div id=div${i}>${arr[i]}</div>`);
                $('#pointer_i_img').append(`<div id=imgdown${i}></div>`);
                $('#pointer_i').append(`<div id=pnt_down${i}>i = ${i} </div>`);
                $('#pointer_j_img').append(`<div id=imgup${i}></div>`);
                $('#pointer_j').append(`<div id=pnt_up${i}>j = ${i} </div>`);                
                $('#dv_inform').append(`<div id=infrm${i}>min</div>`);                
            }
            $("button#control_go").prop('disabled', true);
            $("input#number").prop('disabled', true); 
            $("input#array").prop('disabled', true);
            $("button#random").prop('disabled', true);            

            $("div[id*=imgdown]").html(`<img src="Images/down_arrow.png">`);
            $("div[id*=imgup]").html(`<img src="Images/up_arrow.png">`);
            $("div[id*=pnt_down]").css("visibility", "hidden");
            $("div[id*=pnt_up]").css("visibility", "hidden");
            $("div[id*=infrm]").css("visibility", "hidden");
            $("div[id*=imgdown]").css("visibility", "hidden");
            $("div[id*=imgup]").css("visibility", "hidden");
        var k = 0, pos_min = 0, i = 0, min;
        for(let k = 0; k < n-1; k++){                        
            setTimeout(function(){
                $('#line_5').css("backgroundColor", "#0079D9");
                $('#information').text("Trong khi mà i: " + `${k}` + " < số phần tử của mảng: " + `${n-1}`);
                $('#div' + k).css('border', '3px solid blue');
            }, i);
            i+= 500;
            setTimeout(function(){$('#line_5').css("backgroundColor", "white");}, i);   
            i+= 500;            
            setTimeout(function(){
                min = arr[k];
                $('#line_7').css("backgroundColor", "#0079D9");
                $('#div' + k).css('border', '3px solid lightgray');
                $('#infrm' + k).css("visibility", "");
                $('#pnt_down' + k).css("visibility", "");
                $('#imgdown' + k).css("visibility", "");
                $('#information').text("Gán Min = " + `${arr[k]}`);
            }, i);
            i+= 500;
            setTimeout(function(){$('#line_7').css("backgroundColor", "white");}, i);
            i+= 500;               
            setTimeout(function(){
                pos_min = k;
                $('#line_8').css("backgroundColor", "#0079D9");
                $('#information').text("Gán vị trí min = " + `${pos_min}`);
            }, i);
            i+= 500;
            setTimeout(function(){$('#line_8').css("backgroundColor", "white");}, i);
            i+= 500;  
            setTimeout(function(){
                $('#line_9').css("backgroundColor", "#0079D9");
                $('#pnt_up' + k).css("visibility", "");
                $('#imgup' + k).css("visibility", "");
                $('#div' + k).css("background-color", "green");
            }, i);
            i+= 500;
            setTimeout(function(){$('#line_9').css("backgroundColor", "white");}, i);
            i+= 500; 
            var F = 0;
    
            for(let pos = k+1; pos < n; pos ++){                    
                setTimeout(function(){                   
                $('#line_11').css("backgroundColor", "#0079D9");
                $('#information').text("So sánh (" + `${min}` + " , " + `${arr[pos]}` + ")");
                $('#div' + pos).css("background-color", "red");
                $('#pnt_up' + (pos - 1)).css("visibility", "hidden");
                $('#imgup' + (pos - 1)).css("visibility", "hidden");
                $('#pnt_up' + pos).css("visibility", "");    
                $('#imgup' + pos).css("visibility", "");              
            }, i);
            i+=500;
     
            setTimeout(function(){
                if(min > arr[pos]){
                    F = 1;
                    $('#information').text("So sánh (" + `${min}` + " > " + `${arr[pos]}` + ")");
                    $('#line_11').css("backgroundColor", "white");
                }
                else
                {
                    F = 0; 
                    $('#information').text("So sánh (" + `${min}` + " < " + `${arr[pos]}` + ")");
                    $('#div' + pos).css("background-color", "white"); 
                    $('#line_11').css("backgroundColor", "white");
                }                           
            },i);
            i+=500;

            setTimeout(function(){
                if(F == 1){                                
                    min = arr[pos];
                    $('#line_13').css("backgroundColor", "#0079D9");                               
                    $('#information').text("Gán min cho: " + `${arr[pos]}`); 
                    $('#infrm' + pos_min).css("visibility", "hidden");
                    $('#infrm' + pos).css("visibility", "");
                    $('#div' + pos).css("background-color", "orange");
                    if(pos_min!=k) $('#div' + pos_min).css("background-color", "white");

                }
                else{
                                        
                    $('#line_15').css("backgroundColor", "#0079D9");
                }
            }, i);
            i+=500; 
    
            setTimeout(function(){
                if(F == 1){
                    $('#line_13').css("backgroundColor", "white"); 
                }
                else{                        
                    $('#line_15').css("backgroundColor", "white");
                }
            }, i);
            i+=500; 
    
            setTimeout(function(){
                if(F == 1){
                    pos_min = pos;
                    $('#line_14').css("backgroundColor", "#0079D9");
                    $('#information').text("Gán Posmin = " + `${pos}`);
                }
            }, i);
            i+=500;  
    
            setTimeout(function(){
                if(F == 1){
                    $('#line_14').css("backgroundColor", "white");
                }
                if(pos == n-1){
                    $('#pnt_up' + pos).css("visibility", "hidden");  
                    $('#imgup' + pos).css("visibility", "hidden");
                    $('#infrm' + pos_min).css("visibility", "hidden");
                }                                                                        
            }, i);                                         
            i+=500;
        }  
              
        setTimeout(function(){
            $('#pnt_down' + k).css("visibility", "hidden");
            $('#imgdown' + k).css("visibility", "hidden");
            $('#line_17').css("backgroundColor", "#0079D9");
            $('#information').text("Đổi chỗ (" + `${arr[k]}` + " , " + `${arr[pos_min]}` + ")");
            [arr[k], arr[pos_min]] = [arr[pos_min], arr[k]];           
        }, i);     
        i+=500; 
        setTimeout(function(){
            $('#line_17').css("backgroundColor", "white");
            if(k != pos_min){
                $('#div' + k).animate({top: '-=108px'}, "slow");
                $('#div' + pos_min).animate({top: '-=55px'}, "slow");
            }
        }, i);
        i+= 500; 
        setTimeout(function(){
            $('#line_18').css("backgroundColor", "#0079D9");
            if(k != pos_min){
                var l = Math.abs(k - pos_min) * 56 + Math.abs(k - pos_min) * 2 * 10;
                $('#div' + k).animate({left: '+=' + l + 'px'}, "slow");
                $('#div' + pos_min).animate({left: '-=' + l + 'px'}, "slow");
            }
        }, i);
        i+= 500;
        setTimeout(function(){$('#line_18').css("backgroundColor", "white");}, i);
        i+= 500; 
        setTimeout(function(){
            $('#line_19').css("backgroundColor", "#0079D9");
            if(k != pos_min){
                $('#div' + k).animate({top: '+=108px'}, "slow");
                $('#div' + pos_min).animate({top: '+=55px'}, "slow");  
            }
        }, i);
        i+= 500;
        setTimeout(function(){
            $('#line_19').css("backgroundColor", "white");
            if(k != pos_min){
                $("div[id *= div]").remove();
                for(var i=0; i<n; i++)
                {
                    $('#dv_array').append(`<div id=div${i}>${arr[i]}</div>`);   
                }           
            }
            for(var j=0; j<=k; j++)
                {
                    $('#div' + j).css("background-color", "orange");
                }  
    }, i);
        i+= 500;     
        setTimeout(function(){
            $('#line_20').css("backgroundColor", "#0079D9");
            k++;
            if(k == n-1) {
                $('#information').text("Hoàn thành!");
                $('#div' + (n-1)).css("background-color", "orange");
                $("button#control_go").prop('disabled', false);
                $("input#number").prop('disabled', false); 
                $("input#array").prop('disabled', false);
                $("button#random").prop('disabled', false);                 
                $("button#control_skip").prop('disabled', true);    
                
            }
            else {
                $('#information').text("Tăng i = i + 1");
            }
        }, i);
        i+= 500;
        setTimeout(function(){$('#line_20').css("backgroundColor", "white");}, i);
        i+= 500;       
        };
    }                 
});

    $("button#random").click(function(){    ///Thiết lập cho nút random
        let arr = $("input#array").val().split(" ");
        n = $("input#number").val();
        if(n<2 || n>10){
            alert("Số phần tử lớn nhất là: 10\nSố phần tử nhỏ nhất là: 2");
        }
        else {
            create_random(n, arr);
        }
    });
})