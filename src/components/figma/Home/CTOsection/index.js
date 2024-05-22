import styles from './style.module.css'
import {Images} from "../../../../Assets/images";



function CTOsection()
{
   
    // const arr2 = ["a","b","c","d","e"]
    const arr2 = [Images.Image5 , Images.Image6,Images.Image7,Images.Image8,Images.Image9]
    const arr3 = [Images.Image10 , Images.Image11,Images.Image12,Images.Image13,Images.Image14]
    const arr4 = [Images.Image15 , Images.Image16,Images.Image17,Images.Image18,Images.Image19]
    return(
        <div className= {styles.wrapper}>
            <div className= {styles.outerwrapper}>

                <div className= {styles.innerwrapper}>
                            <div className= {styles.headingBlock}>

                                        <div className= {styles.client}>
                                            Clients
                                        </div>
                                        <div  className= {styles.companies}>
                                            <h1>Companies </h1>
                                            <h1 className= {styles.gradientHeading}> Who Trust Us</h1>

                                        </div>
                            </div>
                            <div className= {styles.parentBox}>
                                  <div className= {styles.picturesArray}>

                                        {
                                            arr2?.map((item,index)=>{

                                                return <div className= {styles.picturesArray1}>
                                                        <img src = {item}  alt = "No image"/> 
                                                    </div>
                                            })
                                        }

                                        </div>
                                        <div className= {styles.picturesArray}>

                                        {
                                            arr3?.map((item,index)=>{

                                                return <div className= {styles.picturesArray1}>
                                                        <img src = {item} alt = "No image"/> 
                                                    </div>
                                            })
                                        }

                                        </div>
                                        <div className= {styles.picturesArray}>

                                            {
                                                arr4?.map((item,index)=>{

                                                    return <div className= {styles.picturesArray1}>
                                                            <img src = {item}  alt = "No image"/> 
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

export default CTOsection