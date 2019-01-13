$(function(){
  $('.index-btn').click(function(){
    $('.active').removeClass('active');
    $('.slide').ep($('.index-btn').index($(this))).addClass('active');
  });

  $('.change-btn').click(function(){
    if($(this).hadClass('next-btn')){
      $('active').next().addClass('active');
    }else{
      $('active').prev().addClass('active');
    }
  });

  $('change-btn').click(function(){
    if($('.slide').index($('active')) == $('.slide').length-1){

    }
  })
});
