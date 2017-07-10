var jspaddr = "http://isu.ru/showDoc.jsp";


$(".page_content table").ready(function() {
    
});


$( document ).ready(function() {


	$('.page_content table').each(function() {
	  var tablename = "";
		tablename = $(this).data('name');
		if (typeof tablename !== typeof undefined && tablename !== false) {
			$('<h3>'+tablename+'</h3>').insertBefore(this);
		}
	});
	
	$('<button class="sendme"><h3>Download the table</h3></a>').insertBefore('.page_content table');
	
	$('.page_content table').hide();

		$('body').on('click', 'button.sendme', function() {
			var elindex = "";
			elindex = $(this).next('table').index('.page_content table'); //only looks for tables in ".page_content". If you have tables in your template, you can add them to the counter here.
			var encurl = encodeURIComponent(window.location.href);
			var url = jspaddr+"?url="+encurl+"&n="+elindex+"&name=table"; //'name' can be changed in order to display other types of elements
			window.open(url);
		});	
	
	
	
		$('body').on('load', 'button.sendme', function() {
			var tablename = "";
			tablename = $(this).next('table').data('name');
			if (typeof tablename !== typeof undefined && tablename !== false) {
				$('<h2>'+tablename+'</h2>').insertBefore(this);
			}
			
		});	
	
	});
