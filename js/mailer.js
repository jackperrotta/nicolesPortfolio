$(document).ready(function(){
  $('#emailForm').submit(function(e){
    e.preventDefault()
    let $inputs = $('#emailForm :input' )
    let values  = {}
    values.message = {}
    values.to = 'ngorms@gmail.com'
    values.subject = 'Contact Form Submission'
    $inputs.each(function () {
      values.message[this.name] = $(this).val()
    })

    
    $.ajax({
      url: "http://ec2-54-146-129-247.compute-1.amazonaws.com/mailer/sendMail",
      method: "POST",
      data: values,
      dataType: "text",
      success: function (data) {
        
        $('#emailForm').css('display', 'none')
        $('#returnHome').css('display', 'initial')

      },
      error: function (textStatus, errorThrown) {
         $('errorMessage').css('display', 'initial')
      }
    })

  })
})