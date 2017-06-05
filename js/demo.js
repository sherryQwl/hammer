/**
 * Created by Administrator on 2017/6/5.
 */
$(function () {
    //鼠标移入小圆点变红色衣服
    $(".dot .red").on("mouseenter", function () {
        $(this).css({
            "box-shadow":" 0 0 5px 5px #b2b2b2",
            "opacity":1,
        }.siblings().css())
        $(".redCloth").attr('src','images/衣服01.png')

    })
    $(".dot .red").on("mouseleave", function () {
        $(this).css({
            "box-shadow":" 0 0 0",
            "opacity":1
        })
    })
    //鼠标移入小圆点变蓝色衣服
    $(".dot .blue").on("mouseenter", function () {
        $(this).css({
            "box-shadow":" 0 0 5px 5px #b2b2b2",
            "opacity":1,
        })
        $(".redCloth").attr('src','images/衣服02.png')

    })
    $(".dot .blue").on("mouseleave", function () {
        $(this).css({
            "box-shadow":" 0 0 0",
            "opacity":1
        })
    })
    //鼠标移入小圆点变棕色衣服
    $(".dot .zong").on("mouseenter", function () {
        $(this).css({
            "box-shadow":" 0 0 5px 5px #b2b2b2",
            "opacity":1,
        })
        $(".redCloth").attr('src','images/衣服.png')

    })
    $(".dot .zong").on("mouseleave", function () {
        $(this).css({
            "box-shadow":" 0 0 0",
            "opacity":1
        })
    })
    //点击耳机的小圆点，耳机变颜色
    //鼠标移入小圆点变红色衣服
    $(".cloth .red").on("mouseenter", function () {
        $(this).css({
            "box-shadow":" 0 0 5px 5px #b2b2b2",
            "opacity":1,
        })
        $(".erji").attr('src','images/红耳机01.jpg')

    })
    $(".cloth .red").on("mouseleave", function () {
        $(this).css({
            "box-shadow":" 0 0 0",
            "opacity":1
        })
    })
    //鼠标移入小圆点变蓝色衣服
    $(".cloth .blue").on("mouseenter", function () {
        $(this).css({
            "box-shadow":" 0 0 5px 5px #b2b2b2",
            "opacity":1,
        })
        $(".erji").attr('src','images/蓝耳机02.jpg')

    })
    $(".cloth .blue").on("mouseleave", function () {
        $(this).css({
            "box-shadow":" 0 0 0",
            "opacity":1
        })
    })
    //鼠标移入小圆点变棕色衣服
    $(".cloth .zong").on("mouseenter", function () {
        $(this).css({
            "box-shadow":" 0 0 5px 5px #b2b2b2",
            "opacity":1,
        })
        $(".erji").attr('src','images/棕耳机03.jpg')

    })
    $(".cloth .zong").on("mouseleave", function () {
        $(this).css({
            "box-shadow":" 0 0 0",
            "opacity":1
        })
    })
})