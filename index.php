<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
      <link rel="stylesheet" type="text/css" href="Style.css">
      <title>View People Data</title>
   </head>
   <body>
      <div class="container bg-info p-5 mt-2">
      <div class="row">
         <div class="col-md-10 mb-3 border-bottom">
            <h3 class="pt-2 text-light fs-3">PEOPLE DATA </h3>
         </div>
         <div class="col-md-2 mb-3 border-bottom">
            <button type="button" id="btn1"  onclick="showMyrow(0)" class="float-right btn btn-1 text-light fw-bloder rounded-pill">NEXT-PERSON</button>
         </div>
         <div id="items">
         </div>
      </div>
      <input type="hidden" id="totalData" name="">
      <input type="hidden" id="showdata" name="showdata" value="0">
   </body>
</html>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script src="Script.js"></script>