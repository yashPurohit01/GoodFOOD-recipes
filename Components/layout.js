import AppHeader from "./appHeader/appHeader";
import Footer from "./footer/footerl";

export default function layout({children}){
   return(
       <div className="content">
        <AppHeader/>
         <div style={{width:"100vmax"}}>{children}</div>
         <Footer/> 
       </div>
   )

}