fetch("data.json")
.then((response)=>{
    return response.json()
}).then((data)=>{
    // console.log(data);
    display_info(data.basics);
    
})
var bodyElement=document.querySelector("#root");
function display_info(info){
    let card=document.createElement("div");
    card.classList.add("card");
    let h1=document.createElement("h2");
    card.append(h1);
    h1.textContent=info.name;
    let line=document.createElement("hr");
    card.append(line);
    let role=document.createElement("h2");
    role.textContent=info.role;
    card.append(role);
    let email=document.createElement("a");
    email.href="mailto:"+info.email;
    email.textContent=info.email;
    card.append(email);
    let br=document.createElement("br")
    card.append(br);
    let mobile=document.createElement("a");
    mobile.href="tel:"+info.mobile;
    mobile.textContent=info.mobile;
    card.append(mobile);
    bodyElement.append(card);
    var button=document.createElement("a");
    button.textContent="view profile";
    button.classList.add("bin");
    card.append(button);
}