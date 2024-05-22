import styles from './style.module.css'
import {Images} from "../../../../Assets/images";

function WhySection()
{
    const arr= [1,2,3]
    const arr2 = [Images.Image5 , Images.Image6,Images.Image7]
    const arr3 = [Images.Image10 , Images.Image11,Images.Image12]
    const arr4 = [Images.Image15 , Images.Image16,Images.Image17]
    const arr5 = ["WorkstatusTM powered Proof of Work" , "Top 1% developers, rigorously vetted" ,
                    "Dedicated project manager","Flexible contracts, transparent pricing","Zero hiring fee, quick onboarding", 
                    "Comprehensive code documentation" , "Adherence to data security practices", "Language/time-zone compatible staff"]
    return(
        <div className={styles.wrapper}>
            <div className={styles.outerwrapper}>
                <div className={styles.innerwrapper}>
                <div className= {styles.headingBlock}>
                                    
                                    <div className= {styles.technologies}>
                                    Quality
                                    </div>
                                    <div  className= {styles.technologiesJava}> 
                                        <h1> Why  
                                        <span className= {styles.gradientHeading}> Hire Java Developers </span>  From Us ?</h1>

                                    </div>
                    </div>

                    <div className= {styles.parentBlock}>

                        <div className= {styles.leftdiv}>
                            <div className= {styles.iconsdiv}>
                                {
                                    arr2?.map((item)=>{
                                        return <div className= {styles.picturesArray1}>
                                                    <img src = {item}  alt = "No image"/> 
                                            </div>
                                    })
                                }
                                
                            </div>
                            <div className= {styles.iconsdiv}>
                                {
                                    arr3?.map((item)=>{
                                        return <div className= {styles.picturesArray1}>
                                                    <img src = {item}  alt = "No image"/> 
                                            </div>
                                    })
                                }
                                
                            </div>
                            <div className= {styles.iconsdiv}>
                                {
                                    arr4?.map((item)=>{
                                        return <div className= {styles.picturesArray1}>
                                                    <img src = {item}  alt = "No image"/> 
                                            </div>
                                    })
                                }  
                            </div>

                            <div className={styles.textdiv}>
                                <p>Our Java developers are innovative and technically sound. Check out the reasons to hire Java developers in India from ValueCoders:</p>

                            </div>
                        </div>
                        <div className= {styles.rightdiv}>
                            {
                               arr5?.map((item)=>{
                                return <div className= {styles.elementdiv}>
                                    <div className= {styles.icon}>
                                    <img src = {Images.Image3}  alt = "No image"/> 
                                    </div>
                                    
                                     <p>{item}</p>
                               </div>
  
                                
                               })
                            }                 
                        </div>

                    </div>

                     
                </div>

            </div>
            
        </div>
    )
}

export default WhySection