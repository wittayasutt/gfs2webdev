$(document).ready(function() {
	$('.click-here').click(function() {
		$('#div1').fadeIn()
		$('#div2').fadeIn('slow')
		$('#div3').fadeIn(3000)
	})
})