$(document).ready(function () {
    // hide announcements
    $('.mngnotification__close').click(function () {
        $(this).parents('.mngnotification').hide();
    });

    // styled select
    if ($('.styledselect').length) {
        $('.styledselect').select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "headerselectdropdown"
        });
    }


    // init selects
    if ($('select').length) {
        $('.styledselect').select2({
            minimumResultsForSearch: -1,
            dropdownCssClass: "headerselectdropdown"
        });
    }

    // filter - add active class
    $('.sortbtns button').click(function () {
        $('.sortbtns button').removeClass('active');
        $(this).addClass('active');
    });

    // sidebar
    $('.togglebarbtn').click(function () {
        $(this).toggleClass('rotate');
        $('.dashboardwrapper').toggleClass('hidesidebar');

        $('.dashboardwrapper').removeClass('showrightbar');
    });

    // edit TD

    $('.edittd').click(function () {
        var spanElement = $(this).closest('td').find('.edtext');
        spanElement.attr('contenteditable', 'true');

        var paragraphs = spanElement.find('p'); 

        if (paragraphs.length > 0) {
            var firstParagraph = paragraphs.first(); 
            var textNode = firstParagraph[0].childNodes[0];

            var range = document.createRange();
            range.setStart(textNode, textNode.length); 
            range.collapse(true);

            var selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        }

        spanElement.focus();
    });



    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.edtext').length && !$target.closest('.edittd').length) {
            $('.edtext').attr('contenteditable', 'false')
        }
    });


    // Sort table
    if ($('#sorttab').length) {
        let table = new DataTable('#sorttab', {
            searching: false,
            paging: false,
            info: false,
        });
    }

    // tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


    // mobile - show sidebar (enroll participant)
    $('.infosidebar').click(function () {
        $('.inforightbar').addClass('show');
    });

    $('.arrowbtn').click(function () {
        $('.inforightbar').removeClass('show');
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.inforightbar ').length && !$target.closest('.infosidebar ').length) {
            $('.inforightbar').removeClass('show');
        }
    });

  
    

});