const uname = document.querySelector('.uname')
const unumber = document.querySelector('.number')
const message = document.querySelector('.duanxin')
const password = document.querySelector('.password')
const password_again = document.querySelector('.password_again')
const isread = document.querySelector('.isread')
const next = document.querySelector('button')

const issent = document.querySelector('.duanxin_input a')

const enroll_table = document.querySelector('form')

// 聚焦为空
enroll_table.addEventListener('click', function (e) {
    if (e.target.type == "text") {
        e.target.value = ''
        e.target.style.color = 'black';
    }
})

// 移开为重赋值value
uname.addEventListener('blur', function (e) {
    if (uname.value == '') {
        uname.value = "请输入用户名"
        e.target.style.color = '#c7c5c5'
    }
})

unumber.addEventListener('blur', function (e) {
    if (unumber.value == '') {
        unumber.value = "请输入正确的手机号"
        e.target.style.color = '#c7c5c5'
    }
})

message.addEventListener('blur', function (e) {
    if (message.value == '') {
        message.value = "请输入正确的验证码"
        e.target.style.color = '#c7c5c5'
    }
})
password.addEventListener('blur', function (e) {
    if (password.value == '') {
        password.value = "设置6至20位字母，数字和符号组合"
        e.target.style.color = '#c7c5c5'
    }
})
password_again.addEventListener('blur', function (e) {
    if (password_again.value == '') {
        password_again.value = "再次输入上面密码"
        e.target.style.color = '#c7c5c5'
    }
})

//短信倒计时
let flag = true
issent.addEventListener('click', function () {
    if (flag) {
        flag = false
        let i = 20
        issent.innerHTML = `剩余${i}秒`
        let timeId = setInterval(function () {
            i--
            issent.innerHTML = `剩余${i}秒`
            if (i == 0) {
                clearInterval(timeId)
                issent.innerHTML = `重新获取`
                flag = true
            }
        }, 1000)
    }
})

function vertify(obj, reg) {
    let attention = obj.parentElement.nextElementSibling
    if (!reg.test(obj.value)) {
        attention.style.display = 'block'
        return false
    }
    else {
        attention.style.display = 'none'
    }
}

next.addEventListener('click', function (e) {
    e.preventDefault()
    if (isread.checked == false) {
        alert("请先勾选协议阅读")
        // return false
    }

    let uname_reg = /^[a-zA-Z0-9-_]{6,10}$/
    let num_reg = /^[1][3,4,5,7,8][0-9]{9}$/
    let mes_reg = /^\d{6}$/
    let pas_reg = /^[a-zA-Z0-9-_]{6,10}$/
    vertify(uname, uname_reg)
    vertify(unumber, num_reg)
    vertify(message, mes_reg)
    vertify(password, pas_reg)

    console.log(password.value)
    console.log(password_again.value)
    let pa_attention = password_again.parentElement.nextElementSibling
    if (password.value != password_again.value) {
        pa_attention.style.display = 'block'
        // return false
    }
    else {
        pa_attention.style.display = 'none'
    }

})
