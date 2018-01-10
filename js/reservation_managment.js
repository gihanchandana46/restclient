

	
	var baseUrl="http://localhost:51964";
	
	function saveUserID(){
	//alert("called");	
	var contactNo = $("#contactNo").val();
	//alert(contactNo);	
   $.cookie("contactNo", $("#contactNo").val());
    alert("Contact Number Saved into Cookie ");
  
	
	}
		
	function saveTable(){
		 
		var contactNo=$.cookie("contactNo");
		var tableNo= $("#tableNo").val();
		var pcount= $("#pcount").val();
		var rdate= $("#rdate").val();
		var stime= $("#stime").val();
		var etime= $("#etime").val();
		
		
		
		   $.ajax({
		   		type: "POST",
	            url: ''+baseUrl+'/api/table',
	            data: {
	            	contactNo:contactNo,
	            	tableNo:tableNo,
	            	pcount:pcount,
	            	rdate:rdate,
	            	stime:stime,
	            	etime:etime         	
	            },
	            dataType: "text",           
	                        
	            success: function (data) {
	                alert("Table Created");
	            },
	            error: function (data) {
	            	
					alert("errr Created");
	              // alert(JSON.stringify(data));
	            }
	        }); 		
	}
	
	function checkfreeTable(){
	
			
		   $.ajax({
		   		type: "GET",
	            url: ''+baseUrl+'/api/freetable',
	            dataType: "json",           
	                    
	            success: function (data) {	
	            	alert("Free table slot loaded successfully");            		
	               $.each(data, function(i, value) {	               
            	   $('#tableNo').append($('<option>').text(JSON.stringify(value.tableNo)).attr('value', JSON.stringify(value.tableNo)));
        		});
	                
	            },
	            error: function (data) {
	            	
					alert("error");
	              // alert(JSON.stringify(data));
	            }
	        }); 
	        
	        
	        
	        		
	}
	
	
	       