
// $(document).ready(function() {
//   alert('Oh, hi there, world');
// });



$(document).ready(function() {
// 	input item into field then show in list while clearing the field
	$('#item').keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
		// alert($('#item').val());
			$('#list').append('<li class="item"><input type="checkbox"><label>'+$('#item').val()+'</label><img class="delete" src="images/delete.png"></li>');
			$('#item').val('');
		}
	}); 

	$('.delete').click(function(){
	$(this).closest('li').remove();	
	});

});

