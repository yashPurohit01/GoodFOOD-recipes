import AppHeader from "./appHeader/appHeader";
import Footer from "./footer/footerl";

export default function layout({children}){
   return(
       <div className="content" style={{width:"100%"}}>
        <AppHeader/>
         <div style={{width:"100%" , }}>{children}</div>
          <Footer/> 
       </div>
   )

}