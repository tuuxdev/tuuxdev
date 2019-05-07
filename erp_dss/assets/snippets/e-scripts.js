// INIT - SELECT 2
$(document).ready(function () {
  $(".js-select2").select2({
    allowClear: true,
    placeholder: "Placeholder",
    width: "100%"
  });
});

// INIT - DATE PICKER
$(document).ready(function () {
  $(".js-date-picker").datepicker({
    orientation: "left",
    autoclose: !0,
    language: "es"
  });
});

// INIT - DATE TIME PICKER 
$(document).ready(function () {
  $(".js-date-time-picker").datetimepicker({
    autoclose: !0,
    format: "dd MM yyyy - hh:ii",
    language: "es"
  });
});

// INIT - TIME PICKER
$(document).ready(function () {
  $('.js-time-picker').timepicker({
    defaultTime: '12:00 AM'
  });
});

// INIT - TOUCHSPIN
$(document).ready(function () {
  $('.js-touchspin').TouchSpin({
    min: 0,
    max: 100,
    step: 10
  });
});

// INIT - ION RANGE SLIDER
$(document).ready(function () {
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 100,
    step: 5,
    grid: true,
    force_edges: true
  });
});

// INIT - TOASTR
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "3000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};
$(".js-toastr").click(function () {
  var type = $(this).data("toast-type");
  $('.modal').modal('hide');
  Command: toastr[type]('Placeholder ' + type + '', "Título Toast");
  return false;
});

// CUSTOM - GRADIENT PROGERESS BAR
$('.e--gradient-progress').each(function ()  {
  var bar = $(this).find('.e--gradient-progress_bar');
  var percent = bar.data('percent');
  var colorFrom = bar.data("color-from");
  var colorMid = bar.data("color-mid");
  var colorTo = bar.data("color-to");
  $(this).css('background-image', function () {
    return 'linear-gradient(90deg, ' + colorFrom + ' 0%, ' + colorMid + ' 50%, ' + colorTo + ' 100%)';
  });
  bar.addClass('slided').css('left', function () {
    if (percent <= 35) {
      $(this).addClass('pull-percent');
      return percent + '%';
    } else if (percent >= 100) {
      return '100%';
    } else {
      return percent + '%';
    }
  });
});

// CUSTOM - SIDEBAR PORTLET
$('.e--portlet-sidebar').each(function () {
  var element = $(this);
  var detonator = $(this).find('.e--portlet-sidebar__sidebar-toogle');
  var angle = $(this).find('.fa-angle-left');
  var sidebar = $(this).find('.e--portlet-sidebar__sidebar');
  var content = $(this).find('.e--portlet-sidebar__content');
  var clickCalculations = $(this).find("[data-portlet-tool='fullscreen'], [data-toggle='tab']");
  var contentHeight = content.outerHeight();

  detonator.click(function () {
    element.toggleClass('hidden-sidebar');
    if (element.hasClass('hidden-sidebar')) {
      angle.removeClass('fa-angle-left').addClass('fa-angle-right');
    } else {
      angle.removeClass('fa-angle-right').addClass('fa-angle-left');
    }
  });

  if (element.hasClass('e--portlet-sidebar-scroll')) {
    sidebar.css('height', contentHeight);

    $(window).on('resize', function () {
      contentHeight = content.outerHeight();
      sidebar.css('height', contentHeight);
    });

    clickCalculations.click(function () {
      setTimeout(function () {
        contentHeight = content.outerHeight();
        sidebar.css('height', contentHeight);
      }, 10);
    });
  }
});

// CUSTOM - EASY PAY CHART
$('.e--easy-pie-chart').each(function ()  {
  var percent = $(this).data('percent');
  var size = $(this).data('size');
  var color = $(this).data('color');
  var line = $(this).data('line');
  var styles = {
    'width': size + 'px',
    'height': size + 'px',
    'font-size': size / 4 + 'px'
  }
  var options = {
    size: size,
    lineWidth: line,
    lineCap: 'square',
    scaleColor: false,
    barColor: color,
    trackColor: '#BFBFBF'
  }
  $(this).append("<div class='e--easy-pie-chart_text'>" + percent + "% </div>");
  $(this).css(styles);
  $(this).easyPieChart(options);
});

// INIT - FORM REPEATER
$('.js-repeater').repeater({
  initEmpty: false,
  show: function () {
    $(this).slideDown();
    $(".js-select2").select2({
      allowClear: true,
      placeholder: "Placeholder",
      width: "100%"
    });
  },
  hide: function (deleteElement) {
    $(this).slideUp(deleteElement);
  }
});

// INIT - DATATABLE NO TOOLS
if ($(".js-dtable-notools").length) {
  var datatable = $('.js-dtable-notools').mDatatable({
    pagination: false,
    columns: [{
      field: 'Acciones',
      width: 70,
      sortable: false,
      textAlign: 'center',
      template: function (row) {
        return '<a href="javascript:;" class="btn m-btn m-btn--hover-primary m-btn--icon m-btn--icon-only m-btn--pill"><i class = "la la-edit"></i></a> <a href="javascript:;" class="btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill"><i class = "la la-trash"></i></a>';
      },
    }, {
      field: 'Estado',
      template: function (row) {
        var estado = {
          1: {
            'title': 'Activo',
            'class': 'm-badge--brand'
          },
          2: {
            'title': 'Inactivo',
            'class': 'm-badge--metal'
          },
        };
        return '<span class="m-badge ' + estado[row.Estado].class + ' m-badge--wide">' + estado[row.Estado]
          .title + '</span>';
      }
    }]
  });
}

// INIT - DATATABLE PAGINATION
if ($(".js-dtable-tools-pagination").length) {
  var datatablePagination = $('.js-dtable-tools-pagination').mDatatable({
    data: {
      pageSize: 5,
      saveState: {
        cookie: true,
        webstorage: true
      }
    },
    pagination: true,
    toolbar: {
      items: {
        pagination: {
          pageSizeSelect: [5, 10, 20, 50, 100]
        },
      },
    },
    search: {
      input: $('.js-dtable-search-pagination'),
    },
    columns: [{
      field: 'Acciones',

      sortable: false,
      textAlign: 'center',
      template: function (row) {
        return '<a href="javascript:;" class="btn m-btn m-btn--hover-primary m-btn--icon m-btn--icon-only m-btn--pill"><i class = "la la-edit"></i></a> <a href="javascript:;" class="btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill"><i class = "la la-trash"></i></a>';
      },
    }, {
      field: 'Estado',
      template: function (row) {
        var estado = {
          1: {
            'title': 'Activo',
            'class': 'm-badge--brand'
          },
          2: {
            'title': 'Inactivo',
            'class': 'm-badge--metal'
          },
        };
        return '<span class="m-badge ' + estado[row.Estado].class + ' m-badge--wide">' + estado[row.Estado]
          .title + '</span>';
      }
    }]
  });
  $('.js-dtable-filter-pagination').on('change', function () {
    datatablePagination.search($(this).val().toLowerCase(), 'Estado');
  });
  $('.js-dtable-filter-pagination').select2({
    allowClear: true,
    placeholder: "Estado",
    width: "100%"
  });
}

// INIT - DATATABLE SCROLL
if ($(".js-dtable-tools-scroll").length) {
  var datatableScroll = $('.js-dtable-tools-scroll').mDatatable({
    data: {
      saveState: {
        cookie: true,
        webstorage: true
      }
    },
    pagination: false,
    search: {
      input: $('.js-dtable-search-scroll'),
    },
    layout: {
      scroll: true,
      height: "400",
    },
    columns: [{
      field: 'Acciones',
      width: 70,
      sortable: false,
      textAlign: 'center',
      template: function (row) {
        return '<a href="javascript:;" class="btn m-btn m-btn--hover-primary m-btn--icon m-btn--icon-only m-btn--pill"><i class = "la la-edit"></i></a> <a href="javascript:;" class="btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill"><i class = "la la-trash"></i></a>';
      },
    }, {
      field: 'Estado',
      template: function (row) {
        var estado = {
          1: {
            'title': 'Activo',
            'class': 'm-badge--brand'
          },
          2: {
            'title': 'Inactivo',
            'class': 'm-badge--metal'
          },
        };
        return '<span class="m-badge ' + estado[row.Estado].class + ' m-badge--wide">' + estado[row.Estado]
          .title + '</span>';
      }
    }]
  });
  $('.js-dtable-filter-scroll').on('change', function () {
    datatableScroll.search($(this).val().toLowerCase(), 'Estado');
  });
  $('.js-dtable-filter-scroll').select2({
    allowClear: true,
    placeholder: "Estado",
    width: "100%"
  });
}

// INIT - DATATABLE GESTION USUARIOS
if ($(".js-dtable-tools-gusuarios").length) {
  var datatableScroll = $('.js-dtable-tools-gusuarios').mDatatable({
    data: {
      saveState: {
        cookie: true,
        webstorage: true
      }
    },
    pagination: false,
    search: {
      input: $('.js-dtable-search-gusuarios'),
    },
    layout: {
      scroll: true,
      height: "400",
    },
    columns: [{
        field: 'Info',
        width: 120,
        sortable: false
      },
      {
        field: 'Accion',
        width: 65,
        sortable: false,
        textAlign: 'center',
        template: function (row) {
          return '<button type="button" class="btn btn-sm btn-primary">Acción</button>';
        },
      }, {
        field: 'Estado',
        width: 70,
        template: function (row) {
          var estado = {
            1: {
              'title': 'Activo',
              'class': 'm-badge--brand'
            },
            2: {
              'title': 'Inactivo',
              'class': 'm-badge--metal'
            },
          };
          return '<span class="m-badge ' + estado[row.Estado].class + ' m-badge--wide">' + estado[row.Estado]
            .title + '</span>';
        }
      }
    ]
  });
  $('.js-dtable-filter-gusuarios').on('change', function () {
    datatableScroll.search($(this).val().toLowerCase(), 'Estado');
  });
  $('.js-dtable-filter-gusuarios').select2({
    allowClear: true,
    placeholder: "Estado",
    width: "100%"
  });
}

// INIT - JS-TREE
$(function () {
  $('.js-treeview').jstree({
    'plugins': ["wholerow", "checkbox", "types"],
    'core': {
      "themes": {
        "responsive": false
      },
      'data': [{
        "text": "Algunos items con  checkboxes",
        "children": [{
          "text": "Seleccionado por defecto",
          "state": {
            "selected": true
          }
        }, {
          "text": "Icono personalizado",
          "icon": "fa fa-warning m--font-warning"
        }, {
          "text": "Abierto por defecto",
          "icon": "fa fa-folder m--font-warning",
          "state": {
            "opened": true
          },
          "children": ["Otro nodo"]
        }, {
          "text": "Icono personalizado",
          "icon": "fa fa-warning m--font-warning"
        }, {
          "text": "Nodo desabilitado",
          "state": {
            "disabled": true
          }
        }]
      }]
    },
    "types": {
      "default": {
        "icon": "fa fa-folder m--font-warning"
      },
      "file": {
        "icon": "fa fa-file  m--font-warning"
      }
    },
  });
});

// INIT - SWEET ALERT
$('.js-sweetalert').click(function () {
  swal({
    title: '¿Lorem Ipsum Dolor?',
    text: "Lorem ipsum dolor sit amet nulla evelis",
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    confirmButtonClass: 'btn btn-primary',
    cancelButtonText: 'Cancelar',
    reverseButtons: true
  }).then(function (result) {
    if (result.value) {
      swal({
        title: 'Lorem Ipsum Dolor',
        text: "Lorem ipsum dolor sit amet nulla evelis",
        type: 'success',
        confirmButtonText: 'Cerrar',
      });
    }
  });
});