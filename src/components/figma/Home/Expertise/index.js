import styles from './style.module.css'

function Expertise()
{
    const arr = [{heading : "Custom Java Web Development", text : "Hire expert Java developers in India from ValueCoders. Our developers specialize in creating impressive Java apps and platforms for startups, SMEs, and enterprises to solve their complex business problems." },
                {heading : "Upgradation & Migration", text : "We help companies upgrade their software applications or migrate them from one platform to another. We are adept in Java and ensure that our client's business runs smoothly after the up-gradation & migration." }, 
                {heading : "Maintenance & Support", text : "Java developers provide maintenance and support through regular monitoring, security audits, and software maintenance services, including bug fixes and software updates, to improve the application's functionality and performance." },
                 {heading : "Enterprise Java Applications", text : "Hire a team of J2ee developers from ValueCoders to create flexible and scalable enterprise-level software. Our experts have hands-on experience developing highly scalable and user-friendly web applications." }, 
                 {heading : "Java Consulting", text : "Java consultants from ValueCoders can help you define and implement a complete technology strategy by providing customized solutions for various business requirements." }, 
                 {heading : "AWS Cloud Offerings with Java", text : "Hire Java developers in India who are proficient in S3, SQS, EC2, Cloudwatch, ElastiCache, Redshift, DynamoDB, and other AWS services. We are capable of handling all your web development needs." }]
    
    return(
        <div className= {styles.wrapper}>
            <div className= {styles.innerwrapper}>

                <div className= {styles.topdiv}>
                        <div className= {styles.left}>

                            <h1> Expertise Of Our Full <span className= {styles.gradientHeading}>Stack Java Developers</span></h1>

                        </div>

                        <div className= {styles.right}>

                            <p> We ensure offering ground-up bespoke software
                                <span> development services that allow clients to enhance</span>
                                <span>the functionalities of their applications. </span></p>


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

export default Expertise