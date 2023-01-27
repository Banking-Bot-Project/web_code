
//test data
var data= {acnumber:1231231, loginStatus: true}; 

const submitForm = () => {
  let  formData = {};
  let formData2 ={}
  
  alert('in submitform', $("#email").val())

  acnumber=$("#acnumber").val();
  //formData.acnumber = $("#acnumber").val();
  formData.usrname = $("#usrname").val();
  formData.fname = $("#fname").val();
  formData.lname = $("#lname").val();
  formData.phoneno = $("#phoneno").val();
  formData.address = $("#address").val();
  formData.state = $("#state").val();
  formData.postcode =$("#postcode").val();
  formData.email =$("#email").val();
  addProjectToApp(formData);

  formData2.usrname   =$("#usrname").val();
  formData2.accessno  =$("#accessno").val();
  formData2.securityno=$("#securityno").val();
  formData2.password  =$("#password").val();
  //formData2.acnumber  =$("#acnumber").val();

  addProjectToApp2(formData2)
};





const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.acnumber+
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.fname +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.lname +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.phoneno +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.address +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.state +
        '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.postcode +
        '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.email +
        '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +

      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

// const getBal = (data ) => {
//   $.get("/api/projects/getbalance", data, (response) => {
//     if (response.statusCode == 200) {
//       console.log(response.data)
//     // addCards(response.data);
//     }
//   });
// };


window.signOut = function signOut (ndata){

  // Do this after
   $.ajax(
    // {
    //   url: "/api/transactions/gettransaction",
    //   data: ndata,
    //   type: "Get",
    //   success: (result) => {
    //     alert(result.message)
    //      alert(result.data)
      
    //   }
    // }
  )
  alert("Do this after")
}
     


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}


$(document).ready(function () {
  $(".materialboxed").materialbox();
  $(".modal").modal()

  $("#btn_login").click(() => {
    nameInput.reportValidity() != false ? submitForm() : alert('You need to fill all required fields!')   
  });

                        