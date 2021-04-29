
const d = document,
 w = window;

export default function scrollTopButton(btn){
    const $scrollbtn = d.querySelector(btn)

    w.addEventListener("scroll", e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if(scrollTop > 600){
            $scrollbtn.classList.remove("hidden")
        } else {
            $scrollbtn.classList.add("hidden")
        }
    });
    d.addEventListener("click", e => {
        // console.log(e.target.matches(btn))
        if (e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0,
                // left: 0
            })

        }
    });


}