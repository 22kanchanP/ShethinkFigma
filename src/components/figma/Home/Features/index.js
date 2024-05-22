import styles from './style.module.css'

function Features()
{
    const arr = [{heading : "High Performing", text : "Java is a powerful programming language that enables developers to create robust, high-performance applications." },
                {heading : "Cross-platform Facility", text : "Java is platform-independent, which means applications can run on any operating system." }, 
                {heading : "Reliable", text : "Java has a large user base and a comprehensive developer community, making it a reliable platform for finding support and solutions for problems." },
                 {heading : "Scalable And Secure", text : "Java is well-suited for creating web applications due to its scalability and security features." }, 
                 {heading : "Stable", text : "Java offers impressive performance and stability, making it an attractive choice for high-traffic websites or web applications businesses." }, 
                 {heading : "Cost-effective", text : "Because Java is open source, businesses can download and use it at no cost, making it a cost-effective platform." }]
    
    return(
        <div className= {styles.wrapper}>
            <div className= {styles.innerwrapper}>

                <div className= {styles.topdiv}>
                        <div className= {styles.left}>

                            <h1>  Why Choose Java <span> For <span className= {styles.gradientHeading}>Building Your</span> </span><span className= {styles.gradientHeading}> Web Solution?</span></h1>
                            

                        </div>

                        <div className= {styles.right}>

                            <p> Java is a highly preferred language for building web solutions. With 
                                <span> Java’s “write once, run anywhere” principle, you can develop your  </span>
                                <span> app on one platform and run it seamlessly on different operating  </span>
                                <span>  systems. Look at some other benefits below:  </span></p>


                        </div>
                </div>
                <div className= {styles.bottomdiv}>

                  {
                    arr?.map((item)=>{
                        return   <div className= {styles.box}>
                        <div className= {styles.boxheadiv}>
                          <h2> {item.heading}</h2>
                        </div>
                        <div  className= {styles.boxbottomdiv}>
                          <p>{item.text}</p>
  
                        </div>
  
                      </div>
                    })
                  }



                </div>

            </div>

        </div>
    )
}

export default Features