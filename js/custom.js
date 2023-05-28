$(function(){
  // include html Files
  $('.gnb-include').load('/include/gnb.html')
  $('.main-header-include').load('/include/main-header.html')

  // category Accordion
  $('.category-accordion .detail').eq(0).show()
  $('.category-accordion .title').click(function(){
    // $(this).next().stop().slideToggle()
    $(this).next().stop().slideDown()
    $(this).siblings('.category-accordion .title').next().stop().slideUp()
    
    $(this).addClass('active')
    $(this).siblings('.category-accordion .title').
    removeClass('active')
  })

  // Recent Search Result
  $('.search-recent .btn-clear').click(function(){
    // slideUp, fadeOut..
    $(this).parent().hide()
  })

  $('.search-recent .btn-all-clear').click(function(){
    $('.search-recent .item').hide()
  })

  // Cart Items
  // 전체 삭제
  $('.cart-content .btn-all-clear').click(function(){
    $('.cart-item').hide()
  })

  // 선택 삭제
  $('.cart-content .btn-clear').click(function(){
    $(this).parent().parent().hide()
  })
})
