$(document).ready(function(){
    let maxHeight = 0;
        $('.page-review__cards').each(function(){
    let height = $(this).height();
        if (height > maxHeight) {
            maxHeight = height;
        }
    });
    
    $('.page-review__cards').height(maxHeight);
});