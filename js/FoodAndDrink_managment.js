

	var baseUrl="http://localhost:51964";
	

function loadPayment() {
	$('.contenr-inner').load('../home/components/MakePayment.html');
	return false;
}	


	
	function loadFood(){
	
			
		   $.ajax({
		   		type: "GET",
	            url: ''+baseUrl+'/api/loadfood',
	            dataType: "json",           
	                    
	            success: function (data) {	
	            	alert("Food loaded successfully");            		
	               $.each(data, function(i, value) {	               
            	   $('#foodId').append($('<option>').text(JSON.stringify(value.foodId)).attr('value', JSON.stringify(value.foodId)));
        		});
	                
	            },
	            error: function (data) {
	            	
					alert("error");
	              // alert(JSON.stringify(data));
	            }
	        }); 
	       		
		}
	
	
	function loadDrink(){
	
			
		   $.ajax({
		   		type: "GET",
	            url: ''+baseUrl+'/api/loaddrink',
	            dataType: "json",           
	                    
	            success: function (data) {	
	            	alert("Soft drink loaded successfully");            		
	               $.each(data, function(i, value) {	               
            	   $('#drinkId').append($('<option>').text(JSON.stringify(value.drinkId)).attr('value', JSON.stringify(value.drinkId)));
        		});
	                
	            },
	            error: function (data) {
	            	
					alert("error");
	              // alert(JSON.stringify(data));
	            }
	        });  	      
	       		
		}
		
		function loadDrinkDetails(){
	
		var drinkId= $("#drinkId").val();
		
			
		   $.ajax({
		   		type: "GET",
	            url: ''+baseUrl+'/api/getdrink/'+drinkId+' ',
	            dataType: "json",           
	                    
	            success: function (data) {	
	            	
					$("#drinkName").val(data.drinkName);
					$("#drinkPrice").val(data.drinkPrice);
	            },
	            error: function (data) {
	            	
					alert("error");
	              // alert(JSON.stringify(data));
	            }
	        });  	      
	       		
		}
		
		function loadFoodDetails(){
	
		var foodId= $("#foodId").val();
		
			
		   $.ajax({
		   		type: "GET",
	            url: ''+baseUrl+'/api/getfood/'+foodId+' ',
	            dataType: "json",           
	                    
	            success: function (data) {	
	            	alert(data.foodName);
	            	alert(data.foodPrice);
					$("#foodName").val(data.foodName);
					$("#foodPrice").val(data.foodPrice);
	            },
	            error: function (data) {
	            	
					alert("error");
	              // alert(JSON.stringify(data));
	            }
	        });  	      
	       		
		}
	
	
	       