import { useLayoutEffect, useState } from "react";

 function GetWindowpostion(id) {
    const [animation, setanemation] = useState(false);

    useLayoutEffect(()=> {
       function  updatepostion() {
            const offestheight = window.document.getElementById(id).offsetHeight;
            if(window.pageYOffset > offestheight * 0.7){
                setanemation(true)
            }
        }
        window.addEventListener('scroll' , updatepostion);
        updatepostion();
        return()=> window.removeEventListener('scroll' , updatepostion)
    } , [id]);
    return animation
}
export default GetWindowpostion;
