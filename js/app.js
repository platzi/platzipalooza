$(document).foundation()

$('[data-toggle-dia]').click(function () {
  $('#lineup-tabs').foundation('selectTab', $(this).data('toggleDia'))
});