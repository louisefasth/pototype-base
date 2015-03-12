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



  		$boxSection.each(function( i ) {
  			
  			$('.boxy-box').each(function() {
  				$this = $(this);
  				if ($this.data('category') == $category) {	
  					$this.addClass('active');	

  				}

  				else {
  					$this.addClass('cat-hide');
  				}

  				var i;
				for (i = 0; i < catList.length; ++i) {
					   console.log(catList[i]);
				}

  			});

  		});


  		
  		$boxLabelBox.html(catStr);



	});

});

