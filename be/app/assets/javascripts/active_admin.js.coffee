#= require active_admin/base
#= require datetimepicker

$(document).ready ->
  jQuery('input.hasDatetimePicker').datetimepicker
    dateFormat: 'dd/mm/yy'
    beforeShow: ->
      setTimeout (->
        $('#ui-datepicker-div').css 'z-index', '3000'
        return
      ), 100
      return
  return