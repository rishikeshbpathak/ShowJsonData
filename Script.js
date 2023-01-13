   $(document).ready(function(){
   	load();
   	function load(){
       $.ajax({
           url: "data.json",
           method: "GET",
           success: function(data) {
             // console.log(data);   
             var html_to_append = '';
             $.each(data, function(i, item) {
             	if(i==0)
             	{
                 html_to_append +=
                  '<div class="col-md-12" id="rowID0"><div class="row dataRow m-0 shadow mb-4 bg-body-tertiary rounded "><div class="col-md-1 bg-success serial_No">'+parseInt(i+1)+'</div><div class="col-md-11"><p class="border-bottom pt-2 pb-2 mb-1 bg-body-tertiary">Name:'+item.Name+'</p><p class="pt-0 m-0">Location:'+item.Location+'</p></div></div></div>';
             	}else{
                      html_to_append +=
                  '<div class="col-md-12 hide_A" id="rowID'+i+'""><div class="row dataRow m-0 shadow mb-4 bg-body-tertiary rounded "><div class="col-md-1 bg-success serial_No">'+parseInt(i+1)+'</div><div class="col-md-11"><p class="border-bottom pt-2 pb-2 mb-1 bg-body-tertiary">Name:'+item.Name+'</p><p class="pt-0 m-0">Location:'+item.Location+'</p></div></div></div>';
             	 }
             });
             $("#items").html(html_to_append);
           },
           error: function() {
             alert('Data not Found');
           }
         });
             }
     
   });
   function showMyrow() {
   	 var l=parseInt($(".dataRow").length);
   	var a=parseInt($('#showdata').val());
   	$('#totalData').val(l);
   	var last=l-2;
   	if(a>last){
   		alert('No more people!');
   	}else{
   	if(a=='0')
   	{
   $('#rowID1').removeClass("hide_A").addClass( "show_a" );
   		$('#showdata').val(1);
   	}else{
   		b=a+1;
   		$('#rowID'+b).removeClass("hide_A").addClass( "show_a" );
   		$('#showdata').val(b);
   	}
   }
   }