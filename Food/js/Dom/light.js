const d = document;

export default function lightNav(){
    const $section = d.querySelectorAll("section[data-scroll]");
    const cb = (entries)=>{
        entries.forEach((entry)=>{
            const id = entry.target.getAttribute("id");
                if(entry.isIntersecting){
                    d.querySelector(`a[data-scroll][href="#${id}"]`).classList.add("highlight");
                }else{
                    d.querySelector(`a[data-scroll][href="#${id}"]`).classList.remove("highlight");
                }
        })
    }

    const observer = new IntersectionObserver(cb,{
        threshold: [0.5,0.75]
    });

    $section.forEach(el=>observer.observe(el));
}