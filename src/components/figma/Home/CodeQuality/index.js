import styles from './style.module.css'


function CodeQuality()
{
    return(
        <div className={styles.wrapper}>
            <div className= {styles.outerwrapper}> 
                 <div className= {styles.innerwrapper}> 
                        <div className= {styles.headingBlock}>
                                    
                                        <div className= {styles.technologies}>
                                        Quality
                                        </div>
                                        <div  className= {styles.technologiesJava}> 
                                            <h1>How We Ensure  </h1>
                                            <h1 className= {styles.gradientHeading}> Code Quality</h1>

                                        </div>

                        </div>

                        <div className= {styles.bottomdiv}>
                            <div className= {styles.leftdiv}>
                            
                            </div>

                            <div className= {styles.rightdiv}>
                               <p>
                               At the core of our development process, we prioritize code quality, 
                               implementing stringent testing, detailed reviews,
                                and industry-best practices to deliver software
                                that excels in both functionality and longevity.
                                </p>

                            </div> 
                        </div>
                </div>
            </div>
        </div>
    )
}

export default CodeQuality