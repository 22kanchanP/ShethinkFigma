import styles from './style.module.css'


function Technologies()
{
    return(
        <div className={styles.wrapper}>
            <div className= {styles.outerwrapper}> 
                 <div className= {styles.innerwrapper}> 
                        <div className= {styles.headingBlock}>
                                    
                                        <div className= {styles.technologies}>
                                        Technologies
                                        </div>
                                        <div  className= {styles.technologiesJava}>
                                            <h1>Technologies Our  </h1>
                                            <h1 className= {styles.gradientHeading}> Java Developers Excel In</h1>

                                        </div>

                        </div>

                        <div className= {styles.bottomdiv}>
                            <div className= {styles.leftdiv}>
                            
                            </div>

                            <div className= {styles.rightdiv}>
                                <p> Our proficient Java developers work on the latest technologies, 
                                    tools, and systems to deliver highly robust and secure applications 
                                    swiftly and efficiently.</p>

                            </div> 
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies