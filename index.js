

$(function(){

    // $('.test').addClass('show');

    // 닫기버튼클릭시 팝업창 종료
    $('.close_button').click(function(){
        $('.test').css('display','none');
    });

    $('.info_btn').click(function(){
        $('#intro').css('display','block')
        $('#schedule').removeClass('show')
        $('#song_form').removeClass('show')
        $('#yullmoo').removeClass('show')
        $('#contents').removeClass('show')
      });
    $('.sche_btn').click(function(){
        $('#intro').css('display','none')
        $('#schedule').addClass('show')
        $('#song_form').removeClass('show')
        $('#yullmoo').removeClass('show')
        $('#contents').removeClass('show')
      });
    $('.song_btn').click(function(){
        $('#intro').css('display','none')
        $('#schedule').removeClass('show')
        $('#song_form').addClass('show')
        $('#yullmoo').removeClass('show')
        $('#contents').removeClass('show')
      });
      $('#yullmoo_btn').click(function(){
        $('#intro').css('display','none')
        $('#schedule').removeClass('show')
        $('#song_form').removeClass('show')
        $('#yullmoo').addClass('show')
        $('#contents').addClass('show')
      });

    
  });
  console.log('리액트로 짠걸 깃허브페이지를 쓰고싶어서 html,css로 짜다보니 이것저것 덕지덕지 엉망입니다.. 부디.. 코드 뜯어보지 마시옵고... 복받으세요')

