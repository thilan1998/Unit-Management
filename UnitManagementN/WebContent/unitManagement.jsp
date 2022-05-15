<%@page import="com.Unit" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Unit Management</title>

<link rel="stylesheet" href="Views/css/bootstrap.min.css">
<script src="Components/jquery-3.6.0.min.js"></script>
<script src="Components/unitManagement.js"></script>
<script>
  $( function() {
    $( "#uDate" ).datepicker();
  } );
  </script>
</head>
<body>

<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>Unit Management</h1>
				<form id="formUsageInformation" name="formUsageInformation">
					
					Unit ID: <input id="uID" name="uID"
						type="text" class="form-control form-control-sm"> <br>
					Account No: <input id="uAccNo"
						name="uAccNo" type="text"
						class="form-control form-control-sm"> <br> 
					Date: <input id="uDate"
						name="uDate" type="date" class="form-control form-control-sm"> <br> 
					Unit Amount: <input
						id="UnitAmount" name="UnitAmount" type="text"
						class="form-control form-control-sm"> <br> 
					Price For Per Unit:
					<input id="PriceForPerUnit" name="PriceForPerUnit" type="text"
						class="form-control form-control-sm"> <br> 
					Total Amount: <input id="Total"
						name=Total type="text"
						class="form-control form-control-sm"> <br> 
					
					<input id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hideUnitManagementIDSave" name="hideUnitManagementIDSave" value="">
				</form>
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>
				
				<div id="divUnitManagementGrid">
					<%
					Unit unitObj = new Unit();
					out.print(unitObj.readUnit());
					 %>
				</div>
			</div>
		</div>
	</div>

</body>
</html>