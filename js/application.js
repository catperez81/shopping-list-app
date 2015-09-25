
// $(document).ready(function() {
//   alert('Oh, hi there, world');
// });



$(document).ready(function() {
// 	input item press enter, show in list and clear in field
	$('#item').keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
		// alert($('#item').val());
			$('#list').append('<li class="item"><input type="checkbox"><label>'+$('#item').val()+'</label><img class="delete" src="images/delete.png"></li>');
			$('#item').val('');
		}
	}); 

// remove item from the list
  	$('ul').on('click', '.delete', function() {
        $(this).closest('li').remove();
    });

// remove all items from the list
	$('button').click(function(){
	$('li').remove();	
	});

// strike through on item when checked
	$(document).on('click', '[type="checkbox"]', function () {
	    var element = $(this).parent();
	    if ($(this).is(':checked')) {
	       element.wrap('<del>');
	    } else {
	       element.unwrap('<del>');
	    }
	});

});

