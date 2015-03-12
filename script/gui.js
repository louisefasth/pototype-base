$(function() {

    $( ".filters" ).on( "click", ".filterbox", function() {
    	$this = $(this);
  		$this.toggleClass('active');
  		$boxLabels = $('.box-label');
  		$boxLabelBox = $('.filterCats');
  		$category = $this.data('category');
  		$boxSection = $('.box-section');

  		catStr = ' ';
  		catList = new Array();

  		$this.parent().find('.active').each(function( i ) {
  			catList.push($( this ).data( "category" ));
  			catStr = catStr + ' ' + $( this ).find('a').text();
  		});

  		console.log('this is the array' + catList);

  		$boxSection.each(function( i ) {
  			$('.boxy-box').each(function() {
  				$this = $(this);
  				$this.removeClass('active');

  				if (catList.length <= 0) {
		  			
		  				$this.addClass('active');	

		  		}


  				var i;

  				console.log('this is the array' + catList);

				for (i = 0; i < catList.length; ++i) {
					 if (catList[i] == $this.data('category')) {
					 	$this.addClass('active');	
					 }

  				}

  				

  			});

  		});

  	

  		
  		$boxLabelBox.html(catStr);



	});

});

