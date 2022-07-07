'use strict';

// ============== サイトサクセス時、フェードインアニメーション ===============
$(function() {
	setTimeout(function(){
		$('.fadeIn').fadeIn(1000);
	},200);
	setTimeout(function(){
		$('.fadeIn').fadeOut(1000);
	},3000);
});

// ============== 各セクション ふわっと下から ===============
// 関数化
function fadeInDisplay() {
  const windowHeight = $(window).height();
  const scroll = $(window).scrollTop();
  $('.fadein-under').each(function () {
    const targetPosition = $(this).offset().top;
    if (scroll > targetPosition - windowHeight + 100) {
      $(this).addClass("fadein-add");
    }
  });
}
// リロード時、スクロール前でもアクション実行されるように
fadeInDisplay();
// 実行
$(function() {
  $(window).scroll(function () {
    fadeInDisplay();
  });
});