const d = document,
    w = window;
    
export default function Menu(menu,navbar){
    d.addEventListener("click",(e)=>{
        if(e.target.matches(menu) || (e.target.matches(`${menu} *`))){
            d.querySelector(navbar).classList.toggle("active");
            d.querySelector(menu).classList.toggle("is-active");
        }else{
            w.onscroll = () =>{
                d.querySelector(navbar).classList.remove("active");
                d.querySelector(menu).classList.remove("is-active");
            }
        }
    })
}
