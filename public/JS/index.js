
var search = document.getElementById("search");
var submit = document.getElementById("submit");
var results = document.getElementsByClassName("results")[0];
var title = "";

var userId = parseInt(results.id)
console.log(userId)

submit.addEventListener("click", function(){
  results.innerHTML = "";
  $.ajax({
    method:"get",
    url: "https://www.googleapis.com/books/v1/volumes",
    data:{
        q: search.value
    },
    dataType: "json",
    success:function(response){

      for(let i = 0; i < response.items.length; i++){
        console.log(response.items[i].volumeInfo.title)
          title = response.items[i].volumeInfo.title
          var div = document.createElement("div");
          div.addEventListener("click", function(event){
            console.log(event)
            favorite(event.target.innerHTML);
          })

          // msg = title + "<button type='submit' form='favorite" + i + "'value='favorite'>button</button>"
          // msg += "<form action='/favorite/" + title +  "' method='post' id='favorite" + i + "'></form>";
          msg = "<div class='submit' value='"  + title +  "'>" + title +  "</div>"

          div.innerHTML = msg
          results.appendChild(div);
        }
              // var favoriteit = document.getElementsByClassName("submit");
              //   for(let i = 0; i < favoriteit.length; i++){
              //     favoriteit[i].addEventListener("click", function(event){
              //       console.log(event.value)
              //       favorite(event.value);
              //     })
              //   }
    }
  })
})

function favorite (title){
  console.log(title)
  $.ajax({
    cache: false,
    url:"/favorite",
    data:{
      title: title


    },
      method: "post",
    dataType: "json",
    success: function(response){


    }


  })
}
