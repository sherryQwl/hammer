//手机号码验证
$(function () {
    var regMobile = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    $(".firInput input").on("blur", function () {
        if (regMobile.test($(this).val()) || regEmail.test($(this).val())) {
            $('.tipOne').css('display', 'none');
        } else {
            $('.tipOne').css('display', 'block');
        }

        if ($(".firInput input").val() == "") {
            $('.tipOne').css('display', 'none');
        }
        $('.firInput').css({
            border: ''
        });

    })

    $(".firInput input,.secInput input").on("blur", function () {
        var regMobile = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        var secLen = $('.secInput input').val().length;
        if (regMobile.test($('.firInput input').val()) && secLen >= 6) {
            $('#login1').css({
                'cursor': 'pointer',
                'background-color': '#527ed9'
            })
            $('#login1').prop({
                disabled: false
            });
        }
    })

    //input框获得焦点时，tipOne框消失
    $('.firInput input').on('focus', function () {
        $('.tipOne').fadeOut(300);
    })


    var strength = document.getElementById("strength");
    var strengthLevel = document.getElementById("strengthLevel");
    var array = ["", "低", "中", "高"];

    $('.secInput input').on("keyup", function () {
        var level = 0;  // 先设定一个原始的水平
        //如果有小写字母
        if (/[a-z]/.test(this.value)) {
            level++;
        }
        //如果有数字
        if (/[0-9]/.test(this.value)) {
            level++;
        }
        //除了小写字母和数字之外的其他字符
        if (/[^a-z0-9]/.test(this.value)) {
            level++;
        }
        //如果用户输入的密码长度小于6位 就不显示
        if (this.value.length < 6) {
            level = 0;
        }
        //根据级别 设置样式
        strength.innerHTML = array[level];
        strengthLevel.className = "strengthLv" + level;
    })
    $(".secInput input").on("mouseleave", function () {
        $(".pass-wrap").css("display", "none")
    })
    $(".secInput input").on("keyup", function () {
        $(".pass-wrap").css("display", "block")
    })
    var flag = true;
    $(".leftTxt").on("click", function () {
        //alert(2)
        if (flag) {
            $(".leftTxt i").css({
                backgroundPosition: "0 0",
            })
            flag = false;
        } else {
            $(".leftTxt i").css({
                backgroundPosition: "0 -19px",
            })
            flag = true;
        }

    })

    $('#inpMobile').on('focus', function () {
        $('.firInput').css({
            border: '1px solid #6b93f2'
        });
    });
    $('#inpPass').on('focus', function () {
        $('.secInput').css({
            border: '1px solid #6b93f2'
        });
    });
    $('#inpPass').on('blur', function () {
        $('.secInput').css({
            border: ''
        });
    });
})