function showDialog(cardName) {
    $('.dialog').show();

    $('.dialog-content').click(function() {
    });
    $('.dialog').click(function() {
        toggleDialog();
    });

    $('.dialog.card.detail').find('.' + cardName).show();
}

function hideDialog() {
    $('dialog').hide();
}

function toggleDialog() {
    if (isDialogOpen) {
        hideDialog();
    } else {
        showDialog();
    }
}

var isDialogOpen = false;