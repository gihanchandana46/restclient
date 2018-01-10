

	var baseUrl="http://localhost:51964";
	var contactNo="";

$(document).ready(function() {
	
	$('[data-toggle="offcanvas"]').click(function() {
	$('#side-menu').toggleClass('hidden-xs');});
	
	$('.table').dataTable({bFilter: false, bInfo: false
        		
		});
	
	$('#search').keypress(function(e){
      if(e.keyCode==13)
      $('#SearchClick').click(); });
	
});



function loadPassword() {
	$('.contenr-inner').load('../home/components/CustPassword.html');
	return false;
}

function loadCustLogin() {
	$('.contenr-inner').load('../customer/components/CustLogin.html');
	return false;
}


function loadCustomerHome() {
	 window.location.href = "../home/index.html";	
}

function loadCustomerHomeMain() {
	 window.location.href = "home/index.html";	
}

function loadloginpage() {
	
	 window.location.href = "customer/index.html";	
	 
}

	
	
	function saveCustomer(){
	
		var contactNo= $("#contactNo").val();
		var firstName= $("#firstName").val();
		var lastName= $("#lastName").val();
		var email= $("#email").val();
		var address= $("#address").val();
		var password= $("#password").val();
		
		   $.ajax({
		   		type: "POST",
	            url: ''+baseUrl+'/api/customer',
	            data: {
	            	contactNo:contactNo,
	            	firstName:firstName,
	            	lastName:lastName,
	            	email:email,
	            	address:address,
	            	password:password         	
	            },
	            dataType: "text",           
	                        
	            success: function (data) {
	                alert("Customer Created");
	                loadCustLogin();
	            },
	            error: function (data) {
	            	
					alert("errr Created");
	              // alert(JSON.stringify(data));
	            }
	        }); 		
	}
	
	
	function updateCustomer(){
	
		var contactNo= $("#contactNo").val();
		var firstName= $("#firstName").val();
		var lastName= $("#lastName").val();
		var email= $("#email").val();
		var address= $("#address").val();
		var password= $("#password").val();
		
		   $.ajax({
		   		type: "PUT",
	            url: ''+baseUrl+'/api/customer/'+contactNo+'',
	            data: {	            	
	            	firstName:firstName,
	            	lastName:lastName,
	            	email:email,
	            	address:address,
	            	password:password         	
	            },
	            dataType: "json",           
	                        
	            success: function (data) {
	                alert("Customer Updated");
	            },
	            error: function (data) {
	            	
					alert("errr Created");
	              // alert(JSON.stringify(data));
	            }
	        }); 		
	}
	
	
	function checklogin(){
	
		contactNo= $("#contactNo").val();
		var password= $("#password").val();
		
		   $.ajax({
		   		type: "POST",
	            url: ''+baseUrl+'/api/login',
	            data: {
	            	contactNo:contactNo,
	            	password:password         	
	            },
	            dataType: "text",           
	                        
	            success: function (data) {
	                alert("Login Sucessful");
	                loadCustomerHome();
	                
	            },
	            error: function (data) {
	            	
					alert("Login error");
	              // alert(JSON.stringify(data));
	            }
	        }); 		
	}
	
	function checkloginMain(){
	
		contactNo= $("#contactNo").val();
		var password= $("#password").val();
		
		   $.ajax({
		   		type: "POST",
	            url: ''+baseUrl+'/api/login',
	            data: {
	            	contactNo:contactNo,
	            	password:password         	
	            },
	            dataType: "text",           
	                        
	            success: function (data) {
	                alert("Login Sucessful");
	                loadCustomerHomeMain(); 
	                
	            },
	            error: function (data) {
	            	
					alert("Login error");
	              // alert(JSON.stringify(data));
	            }
	        }); 		
	}
	       