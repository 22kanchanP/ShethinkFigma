import styles from './style.module.css'

import {Images} from "../../../../Assets/images";



function HeroSection()
{
    const arr = ["Proof of Work based timesheets (Powered by WorkstatusTM)",
                "IP Rights & NDA (Non-disclosure Agreement) protection" ,
                "Flexible contracts, transparent pricing"]

    return(
        <div className = {styles.wrapper}>
           <div  className = {styles.outerwrapper}> 
           {/* background image */}
           {/* <img src = {Images.Image1} className= {styles.herosectionImg} alt = "No image"/>  */}

                    <div className= {styles.innerwrapper}>

                            <div className= {styles.left}>

                                    <div className= {styles.topdiv}>
                                                <div className= {styles.hire}>
                                                        <div className= {styles.heading}>
                                                                <h1> Hire</h1>
                                                                <h1 className= {styles.gradientHeading}> Java developers</h1>
                                                        </div>
                                                   
                                                        <div className= {styles.text}>
                                                            Hire Top 1% Java Programmers in India. 100% In-house Staff
                                                        </div>

                                                    </div>
                                                <div className= {styles.hirenextdiv}>
                                                    <div className= {styles.textdiv}>
                                                        <p> Transform your development process with Value Coders' remote Java app </p>
                                                        <p>developers who have proficiency in Spring ORM, Hibernate, Core Java, Advanced </p>
                                                        <p> Java and  J2EE for tailored solutions.  </p>
                                                    </div>

                                                </div>
                                                    
                                     </div>
                                    <div className= {styles.middlediv} >
                                        {
                                            arr?.map((items, index)=>{
                                                return <div>
                                                    <div className= {styles.icon}>
                                                        <img src = {Images.Image3} className= {styles.herosectionIcon} alt = "No image"/> 
                                                        
                                                   
                                                        {items}
                                                    </div>
                                                 </div>
                                            })
                                        }

                                    </div>
                                    <div className= {styles.bottomdiv}>

                                    <div className= {styles.lastrow}>
                                      <button className=  {styles.leftbutton}> 
                                      <p>Start 7-day trial today </p>
                                      
                                      <img src = {Images.Image4} className= {styles.herosectionArrow} alt = "No image"/> </button>

                                        <div>
                                            or
                                        </div>
                           
                                         <a href="https://www.w3schools.com" className={styles.heroAnchor}> Book a Call </a>
                                     </div>
                                     </div>
                            </div>

                            <div className= {styles.right}>                              
                            </div>
                    </div>
           </div>
           
        </div>
    )
}

export default HeroSection