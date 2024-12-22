$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 300);
    return false;
  });

  //roop
  $("#js-roop").on("click", function () {
    for (let i = 0; i < 3; i++) {
      alert('--- おめでとうございます！ --- \nあなたは１０００兆円に当選しました！\n詳しくはこちら:https://www.kantei.go.jp/\nお問い合わせはこちら  +7(495) 000-00-00');
    }
    for (let j = 0; j < 3; j++) {window.open('https://www.kantei.go.jp/', '_blank')}
    // location.href = 'https://www.kantei.go.jp/'
  });

});