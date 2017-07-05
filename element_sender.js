var jspaddr = "/viewer.jsp";  //change this to your viewer.jsp path


$(".page_content table").ready(function() {
    $('<button class="sendme"><h3>Download the table</h3></a>').insertBefore('.page_content table');
});


$( document ).ready(function() {
	$('.page_content table').hide();

		$('body').on('click', 'button.sendme', function() {
			var elindex = "";
			elindex = $(this).next('table').index('.page_content table'); //+1 for other than 'special'
			var encurl = encodeURIComponent(window.location.href);
			var url = jspaddr+"?url="+encurl+"&n="+elindex+"&name=table"; //'name' can be changed in order to display other types of elements
			window.location=url;
		});	
	
	
	});
