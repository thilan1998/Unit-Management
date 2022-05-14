$(document).ready(function()
{ 

 $("#alertSuccess").hide(); 
 $("#alertError").hide(); 
}); 


$(document).on("click", "#btnSave", function(event)
{ 
	alert("thilan");
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide(); 
 
 
// Form validation-------------------
var status = validateUsageForm(); 
if (status != true) 
 { 
 $("#alertError").text(status); 
 $("#alertError").show(); 
 return; 
 } 


// If valid------------------------
var type = ($("#hideUnitManagementIDSave").val() == "") ? "POST" : "PUT"; 
 $.ajax( 
 { 
 url : "UnitManagementAPI", 
 type : type, 
 data : $("#formUnitManagement").serialize(), 
 dataType : "text", 
 complete : function(response, status) 
 { 
 onUsageInformationSaveComplete(response.responseText, status); 
 } 
 }); 
});

function onUnitManagementSaveComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully saved."); 
 $("#alertSuccess").show(); 
 $("#divUnitManagementGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while saving."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while saving.."); 
 $("#alertError").show(); 
 }
$("#hideUnitManagementIDSave").val(""); 
$("#formUnitManagement")[0].reset(); 
}


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
		{ 
		$("#hideUnitManagementIDSave").val($(this).data("unitid")); 
		 $("#unitID").val($(this).closest("tr").find('td:eq(0)').text()); 
		 $("#accountNo").val($(this).closest("tr").find('td:eq(1)').text()); 
		 $("#date").val($(this).closest("tr").find('td:eq(2)').text()); 
		 $("#unitAmount").val($(this).closest("tr").find('td:eq(3)').text()); 
		 $("#priceForPerUnit").val($(this).closest("tr").find('td:eq(4)').text()); 
		 $("#totalAmount").val($(this).closest("tr").find('td:eq(5)').text()); 

		});



$(document).on("click", ".btnRemove", function(event)
		{ 
		 $.ajax( 
		 { 
		 url : "UnitManagementAPI", 
		 type : "DELETE", 
		 data : "unitID=" + $(this).data("unitid"),
		 dataType : "text", 
		 complete : function(response, status) 
		 { 
			 onUnitManagementDeleteComplete(response.responseText, status); 
		 } 
		 }); 
		});
		
function onUnitManagementDeleteComplete(response, status)
{ 
if (status == "success") 
 { 
 var resultSet = JSON.parse(response); 
 if (resultSet.status.trim() == "success") 
 { 
 $("#alertSuccess").text("Successfully deleted."); 
 $("#alertSuccess").show(); 
 $("#divUnitManagementGrid").html(resultSet.data); 
 } else if (resultSet.status.trim() == "error") 
 { 
 $("#alertError").text(resultSet.data); 
 $("#alertError").show(); 
 } 
 } else if (status == "error") 
 { 
 $("#alertError").text("Error while deleting."); 
 $("#alertError").show(); 
 } else
 { 
 $("#alertError").text("Unknown error while deleting.."); 
 $("#alertError").show(); 
 } 
}

    

// CLIENT-MODEL================================================================
function validateUnitForm()
{
	//  Unit ID
	if ($("#unitID").val().trim() == "")
	{
	return "Insert Unit ID.";
	}
	// Account Number
	if ($("#accountNo").val().trim() == "")
	{
	return "Insert User Account Number.";
	
    }
	// Date
	if ($("#date").val().trim() == "")
	{
	return "Insert Date.";
	}
	// Unit Amount
	if ($("#unitAmount").val().trim() == "")
	{
	return "Insert Unit Amount.";
	
    }
	// PriceForPerUnit
	if ($("#priceForPerUnit").val().trim() == "")
	{
	return "Insert Price For Per Unit.";
	
    }
	// Total Amount
	if ($("#totalAmount").val().trim() == "")
	{
	return "Insert Total Amount.";
	
    }

	return true;
}