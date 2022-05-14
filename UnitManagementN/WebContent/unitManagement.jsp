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
</head>
<body>

<div class="container">
		<div class="row">
			<div class="col-6">
				<h1>User Management V10.1</h1>
				<form id="formUsageInformation" name="formUsageInformation">
					
					Unit ID: <input id="unitID" name="uniID"
						type="text" class="form-control form-control-sm"> <br>
					Account No: <input id="accountNo"
						name="accountNo" type="text"
						class="form-control form-control-sm"> <br> 
					Date: <input id="date"
						name="date" type="text"
						class="form-control form-control-sm"> <br> 
					Unit Amount: <input
						id="unitAmount" name="unitAmount" type="text"
						class="form-control form-control-sm"> <br> 
					Price For Per Unit:
					<input id="priceForPerUnit" name="priceForPerUnit" type="text"
						class="form-control form-control-sm"> <br> 
					Total Amount: <input id="totalAmount"
						name="totalAmount" type="text"
						class="form-control form-control-sm"> <br> 
					
					<input id="btnSave" name="btnSave" type="button" value="Save"
						class="btn btn-primary"> <input type="hidden"
						id="hideUsageInformationIDSave" name="hideUsageInformationIDSave" value="">
				</form>
				<div id="alertSuccess" class="alert alert-success"></div>
				<div id="alertError" class="alert alert-danger"></div>
				<br>
				<div id="divUsageInformationGrid">
					
					
					
				</div>
			</div>
		</div>
	</div>

</body>
</html>