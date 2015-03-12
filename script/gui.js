$(function() {

    $( ".filters" ).on( "click", ".filterbox", function() {
    	$this = $(this);
  		$this.toggleClass('active');
  		$boxLabels = $('.box-label');
  		$boxLabelBox = $('.filterCats');

  		catStr = ' ';

  		$this.parent().find('.active a').each(function( i ) {
  			catStr = catStr + ' ' + this.text;
  		});
  		
  		$boxLabelBox.html(catStr);



  		

	});

});