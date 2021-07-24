$(function () {
    $("#yes").on("click", function () {
        $("#result").text("お役に立てて良かったです！");
    });

    $("#no").on("click", function () {
        $("#result").text("お役に立てず申し訳ございません。");
    });
})