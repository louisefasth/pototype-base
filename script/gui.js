$(function() {

    $( ".filters" ).on( "click", ".filterbox", function() {
    	$this = $(this);
  		$this.toggleClass('active');
  		$boxLabels = $('.box-label');
  		$boxLabelBox = $('.filterCats');
  		$category = $this.data('category');
      $boxSection = $('.box-section');
  		$heroSection = $('.hero');

  		catStr = ' ';
  		catList = new Array();

  		$this.parent().find('.active').each(function( i ) {
  			catList.push($( this ).data( "category" ));
  			catStr = catStr + '<span>' + $( this ).find('a').text() + '</span>';
  		});

      $heroSection.each(function( i ) {
          $(this).removeClass('active');
      });


      if ($this.hasClass('skatt')) {
        $('.hero.skatt').addClass('active');
      }
      if ($this.hasClass('revision')) {
          $('.hero.revision').addClass('active');
      }      
      if ($this.hasClass('controlling')) {
         $('.hero.controlling').addClass('active');
      }      
      if ($this.hasClass('ekonomistyrning')) {
        $('.hero.ekonomistyrning').addClass('active');
      }      
      if ($this.hasClass('analys')) {
         $('.hero.analys').addClass('active');
      }      

      if ($this.hasClass('redovisning')) {
          $('.hero.redovisning').addClass('active');
      }


      $boxSection.each(function( i ) {
        $('.boxy-box').each(function() {
          $this = $(this);
          $this.removeClass('active');

          if (catList.length <= 0) {
              $this.addClass('active'); 
          }


          var i;
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

