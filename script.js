$(document).ready(function() {

    $('#add').click(function() {
      var toAdd = $('input[name=listItem]').val();
      $('#list').append('<div class="item">' + '<a href="#">' + toAdd + '</a>' + '</div>');
    });
    $(document).on('click', '.item', function() {
      $(this).remove();
    });
    $(document).on('click', '#clear', function() {
      $('#list').empty();
    });
});
