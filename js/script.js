// JavaScript Document

$(function(){
	$(window).scroll(function (){
		$('.main_fadein').each(function(){
			var elemPos = $(this).offset().top-5;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight){
				$(this).addClass('scrollin');
			}
		});
	});
});


// タッチデバイス用のhover設定
document.addEventListener('DOMContentLoaded', function() {
  var navItems = document.querySelectorAll('nav li a');

  navItems.forEach(function(item) {
    var isHovered = false; // ホバー状態を管理

    item.addEventListener('click', function(e) {
      if (window.matchMedia("(pointer: coarse)").matches) { // タッチデバイスか確認
        if (!isHovered) {
          e.preventDefault(); // リンク先へ飛ばないようにする
          this.classList.add('hover'); // ホバークラスを追加
          isHovered = true;
        } else {
          window.location.href = this.href; // 2回目のクリックでリンク先に移動
        }
      }
    });

    // タッチデバイスのホバー解除
    document.addEventListener('click', function(e) {
      if (isHovered && !item.contains(e.target)) {
        item.classList.remove('hover'); // ホバークラスを削除
        isHovered = false;
      }
    });
  });
});
