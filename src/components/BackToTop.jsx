import React from "react"
export default function BackToTop(){
    const [visible,setVisible] = React.useState(false)
    const windowScrolled = () => {
        if (window.scrollY > 300) {
          setVisible(true)
          
        } else {
            setVisible(false)           
        }
      }
    React.useEffect(()=>{
        
        window.addEventListener('load', windowScrolled);
        document.addEventListener('scroll',windowScrolled);
        return () => {
            window.removeEventListener('load', windowScrolled);
            document.removeEventListener('scroll', windowScrolled);
        };

    },[])
    const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
        }); 
      }; 
    return(
        <>
            <div className={`to-top ${visible ? "open" : ""}`} onClick={scrollToTop}>
                <i className="bi bi-chevron-up"></i>
            </div>
        </>
    )
}