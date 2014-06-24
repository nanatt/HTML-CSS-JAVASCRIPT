//Creating a plugin
$.fn.photofy = function(options) {
  this.each(function() {
    var show = function(e) {
    	//event that won't follow the link
       e.preventDefault();
       settings.tour
               .addClass('is-showing-photofy')
               .find('.photos')
               .find('li:gt('+(settings.count-1)+')').hide();
     }
     //updating the plugin to accept and use options
    var settings = $.extend({
      count: 3, 
      tour: $(this)
    }, options);
     var remove = function(e){
      e.preventDefault();
      settings.tour.fadeOut().off('.photofy');
    }
     
     settings.tour.on('click.photofy', '.see-photos', show);
     settings.tour.on('show.photofy', show);
     settings.tour.on('click.photofy', '.hide-tour', remove);
  });
}
//Plugin --> action
$(document).ready(function() {
  $('.tour').photofy({ count: 1});

  $('.show-photos').on('click', function(e) {
    e.preventDefault();
    $('.tour').trigger('show.photofy');
  });
  $.ajax({
  type: "GET",
  url: "yourPage.htm",
  dataType: "html"
	});
});
});
