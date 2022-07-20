function GetUsers(){
    fetch('users.json')
    .then(response=>response.json())
    .then(data=>{
        let user = ''
        data.forEach(item=>{
            user+= `
            <div class="col-lg-4 g-4">
            <div class="card userInfo">
                <img src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title"style="border-bottom: 0.5px dotted gray;"> FullName: ${item.name} ${item.surname}</h5>
                  <h5 class="card-title"style="border-bottom: 0.5px dotted gray;">Age: ${item.age}</h5>
                  <h5 class="card-title"style="border-bottom: 0.5px dotted gray;">Profession: ${item.job}</h5>
                  <h5 class="card-title"style="border-bottom: 0.5px dotted gray;">Location: ${item.location}</h5>
                  <a href="${item.contact}" target="_blank" class="btn btn-primary ">Contact</a>
                </div>
              </div>
        </div>
            `
        }
         
        
        )
        document.getElementById('list').innerHTML = user
    }
    )
    .catch(err=>console.log(err))
}
