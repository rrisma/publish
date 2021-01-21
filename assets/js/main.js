$('.items').on('click', function(e){
e.preventDefault();
    $('.items').removeClass('active');
    $(this).addClass('active');
});
