'use strict';

$(window).ready(() => {
  let progress = ['Start'];

  class Interaction {
    constructor() {
      this.dom = $('<div class="bubble sender"> <div class="message" contenteditable="true"> This is an example message. Feel free to edit this by clicking on it. </div> <div class="sender-options"> <div class="option type-options" data-type="type-options"> Options </div> <div class="option type-s-ans" data-type="type-s-ans"> Smart Answer </div> <div class="option type-a-ans" data-type="type-a-ans"> Any answer </div> </div> <div class="action"> <div class="button"> <i class="fa fa-pencil" aria-hidden="true"></i></div> <div class="button"> <i class="fa fa-trash" aria-hidden="true"></i></div> </div> </div>');
      this.dom.find('.option').click(function() {
        let response;
        $(this).addClass('selected');
        switch($(this).data('type')) {
          case 'type-options':
            response = $('<div class="bubble receiver type-options"> <div class="receiver-title"> Options </div> <div class="receiver-options"> <div class="option" data-option="Great!"> Great! <i class="fa fa-angle-down" aria-hidden="true"></i></div> <div class="option" data-option="Not so great..."> Not so great... <i class="fa fa-angle-down" aria-hidden="true"></i></div> <div class="option" data-option="Other"> Other <i class="fa fa-angle-down" aria-hidden="true"></i></div> </div> <div class="action"> <div class="button"> <i class="fa fa-plus-circle" aria-hidden="true"></i></div> <div class="button"> <i class="fa fa-trash" aria-hidden="true"></i></div> </div> </div>')
            $('.box.builder .content').append(response);
            break;
          case 'type-s-ans':
            response = $('<div class="bubble receiver type-s-ans"> <div class="receiver-title"> Options </div> <div class="receiver-options"> <div class="option" data-option="Great!"> Great! <i class="fa fa-angle-down" aria-hidden="true"></i></div> <div class="option" data-option="Not so great..."> Not so great... <i class="fa fa-angle-down" aria-hidden="true"></i></div> <div class="option" data-option="Other"> Other <i class="fa fa-angle-down" aria-hidden="true"></i></div> </div> <div class="action"> <div class="button"> <i class="fa fa-plus-circle" aria-hidden="true"></i></div> <div class="button"> <i class="fa fa-trash" aria-hidden="true"></i></div> </div> </div>')
            $('.box.builder .content').append(response);
            break;
          case 'type-a-ans':
            response = $('<div class="bubble receiver type-a-ans"> <div class="receiver-title"> Options </div> <div class="receiver-options"> <div class="option" data-option="Great!"> Great! <i class="fa fa-angle-down" aria-hidden="true"></i></div> <div class="option" data-option="Not so great..."> Not so great... <i class="fa fa-angle-down" aria-hidden="true"></i></div> <div class="option" data-option="Other"> Other <i class="fa fa-angle-down" aria-hidden="true"></i></div> </div> <div class="action"> <div class="button"> <i class="fa fa-plus-circle" aria-hidden="true"></i></div> <div class="button"> <i class="fa fa-trash" aria-hidden="true"></i></div> </div> </div>')
            $('.box.builder .content').append(response);
            break;
        }
        response.find(".receiver-options .option").click(function() {
          progress.push($(this).data('option'));
          $('.box.builder .content').animate({top: -($(this).parent().parent().position().top-$(this).parent().height()+20)},'slow');
          let bubble = new Interaction();
          $('.box.builder .content').append(bubble.dom);
          updateProgress(progress);
        })
      });
    }
  }

  start();
  function start() {
    let bubble = new Interaction();
    $('.box.builder .content').append(bubble.dom);
  }
  function updateProgress (progress){
    $(".builder .progress").html(
      progress.reduce((total, value) => {
        return total + " > " + value;
      })
    );
  }
})
