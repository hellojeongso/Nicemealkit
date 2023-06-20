$(function(){
  // include html Files
  $('.gnb-include').load('/include/gnb.html')
  $('.main-header-include').load('/include/main-header.html')
  $('.goods-detail-header-include').load('/include/goods-detail-header.html')

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

  // Front Slider
  $('.front-slider').slick({
    slidesToShow: 1,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  // Goods Suggestion Slider
  $('.goods-suggestion-items').slick({
    slidesToShow: 3,
    dots: false,
    arrows: true,
    slidesToScroll: 2
  })

  // Wish
  $('.wish').click(function(){
    $(this).toggleClass('active')
  })

  // Front Footer
  $('.btn-view-more').click(function(){
    $('.company-info-more').show()
  })

  // Goods Detail Slider
  $('.goods-detail-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    slidesToScroll: 1
  })

  // Goods Accordion
  $('.goods-accordion .detail').eq(0).show()

  $('.goods-accordion .title').click(function(){
    $(this).next().toggle()
    $(this).addClass('active')
    $(this).siblings('.goods-accordion .title').removeClass('active')
  })  // siblings에서도 어떤건지 명시해줘야함

  // Goods Order Info
  $('.btn-order-choice').click(function(){
    $('.goods-order-choice').hide()
    $('.goods-order-final').show()
    $('.overlay-fold').show()
  })

  $('.btn-fold, .overlay-fold').click(function(){
    $('.goods-order-choice').show()
    $('.goods-order-final').hide()
    $('.overlay-fold').hide()
  })


})
