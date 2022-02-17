// Add Class Cheecked
$('ul').click(function (ev) {
    if (ev.target.tagName == 'LI') {
        ev.target.classList.toggle('checked');
    }
});

// Add New List 
$('.addBtn').click(function () {
    let btn = $("#txt_name").val();
    $('#myUL').append(`<li>${btn} <span class="close">X</span></li>`).hide().show('slow');
});

// remove todo list script
$(document).on('click','.close',function(){
    $(this).parent('li').remove();
})
