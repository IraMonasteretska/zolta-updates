function closeAllTabs() {

    $('#passwordPolicyTab').removeClass("active");
    $('#sessionTimeoutTab').removeClass("active");
    $('#userTypesTab').removeClass("active");
    $('#userRolesTab').removeClass("active");
    $('#userRolesPermissionsTab').removeClass("active");
    $('#faqTab').removeClass("active");
    $('#documentationTab').removeClass("active");
    $('#fileExtensionTab').removeClass("active");
    $('#predefinedQueriesTab').removeClass("active");
}
function initAndSetupColumnFilters(tableName) {
    initAndSetupColumnFilters(tableName, 'Report');
}
function initAndSetupColumnFilters(tableName, protocolName) {
    // Setup - add a text input to each header cell

    //alert("here");

    $('#' + tableName + ' tfoot th').each(function (i) {
        var title = $('#'+tableName+' thead th')
            .eq($(this).index())
            .text();
        $(this).html(
            '<input style="width: 100%;" type="text" placeholder="' + title + '" data-index="' + i + '" />'
        );
    });

    const d = new Date();

    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);

    var subtable = new DataTable('#' + tableName, {
        destroy: true,
  
        layout: {
            topStart: {
                buttons: [
                    {
                        extend: 'copyHtml5',
                        title: protocolName + "_" + day + month + year,
                        exportOptions: {
                            columns: ':not(.notexport)'
                        }
                    },
                    {
                        extend: 'csvHtml5',
                        title: protocolName + "_" + day + month + year,
                        exportOptions: {
                            columns: ':not(.notexport)'
                        }
                    },
                    {
                        extend: 'excelHtml5',
                        title: protocolName + "_" + day + month + year,
                        exportOptions: {
                            columns: ':not(.notexport)'
                        }
                    },
                    {
                        extend: 'pdfHtml5',
                        title: protocolName + "_" + day + month + year,
                        exportOptions: {
                            columns: ':not(.notexport)'
                        }
                    },
                    {
                        extend: 'print',
                        title: protocolName + "_" + day + month + year,
                        exportOptions: {
                            columns: ':not(.notexport)'
                        }
                    },
                    'colvis'
                ]
            }
        },
        paging: false
    });


    $(subtable.table().container()).on('keyup', 'tfoot input', function () {
        subtable
            .column($(this).data('index'))
            .search(this.value)
            .draw();
    });
}

function initAndSetupColumnFiltersSort(tableName, sortIndex)
{
    initAndSetupColumnFiltersSort(tableName, sortIndex, 'Report');
}
function initAndSetupColumnFiltersSort(tableName, sortIndex, protocolName) {
    // Setup - add a text input to each header cell

    //alert("here");
    $('#' + tableName + ' tfoot th').each(function (i) {
        var title = $('#' + tableName + ' thead th')
            .eq($(this).index())
            .text();
        $(this).html(
            '<input type="text" placeholder="' + title + '" data-index="' + i + '" />'
        );
    });

    const d = new Date();

    let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);




    var subtable = $('#' + tableName).DataTable({
        
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
        layout: {
            topStart: {
                buttons: [
                    {
                        extend: 'copyHtml5',
                        title: protocolName + "_" + day+month+year,
                        exportOptions: {
                            columns: ':not(.notexport)'
                        }
                    },
                    {
                        extend: 'csvHtml5',
                        title: protocolName + "_" + day + month + year,
                        exportOptions: {
                            columns: ':not(.notexport)'
                        }
                    },
                    {
                        extend: 'excelHtml5',
                        title: protocolName + "_" + day + month + year,
                        exportOptions: {
                            columns: ':not(.notexport)'
                        }
                    },
                    {
                        extend: 'pdfHtml5',
                        title: protocolName + "_" + day + month + year,
                        exportOptions: {
                            columns: ':not(.notexport)'
                        }
                    },
                    {
                        extend: 'print',
                    title: protocolName + "_" + day + month + year,
                        exportOptions: {
                            columns: ':not(.notexport)'
                        }
                    },
                    'colvis'
                ]
            }
        },
        paging: false,
        order: [[2, 'desc']]
    });


    $(subtable.table().container()).on('keyup', 'tfoot input', function () {
        subtable
            .column($(this).data('index'))
            .search(this.value)
            .draw();
    });
}


function recordChangeSet(changeDescription, formToSubmitElementId) {
    var data = { changeDescription: changeDescription, formToSubmitElementId: formToSubmitElementId };
    $('#recordChangeHeaderDiv').html("<h4>Record Change for : "+changeDescription+"</h4>");
    $.ajax({
        type: 'GET',
        url: '/ChangeSet/RecordChangeSet',
        contentType: 'application/json; charset=utf-8',
        data: data,
        success: function (result) {
         
            $('#modal-changeSet-content').html(result);
            $('#modal-changeSet').modal('show');
        },
        error: function (er) {
            alert(er);
        }
    });
}