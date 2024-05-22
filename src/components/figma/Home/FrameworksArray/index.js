import styles from './style.module.css'

function FrameworksArray()
{
    const arr = [{heading : "Technologies / Frameworks" , frameworks : ["Java SE", "Java + Web", "Java EE", "Java FX", "Swing" ,"Spring", "Boot", 
                                                                        "Groovy/Grails", "StrutsJSP", "JSF", "GWT" , "ExtGWT" ,"Log4j" ,"Docker",
                                                                        "S3", "Lambda" , "ELB" , "Struts" , "Hibernate" , "EJB", "POI" , "JAXB" ,
                                                                         "JSON", "Sencha GXT" , "Primefaces" , "Vaadin" , "Jasper Reports"]},
                { heading : "Application / Web Servers" , frameworks : ["JBoss" , "GlassFishApache" , "TomcatBEAN" , "WebLogic" , "ServerOracle", 
                                                                        "Application Serve"]} ,
                { heading : "Testing", frameworks : ["JUnit", "TestNG", "JMeter", "Mockito" , "EasyMock"]},
                { heading : "Development Approaches" , frameworks : ["Scrum" , "Kanban" , "Iterative" ,"Waterfall" ,"DDD" , "TDD", "BDD"]},
                { heading : "Data Base" , frameworks : ["MS SQL" , "Postgre SQL", "OracleH2"]}]

    
    return(
        <div  className= {styles.wrapper}>
            <div className= {styles.outerwrapper}>
                    <div className= {styles.innerwrapper}>
                        {
                            arr?.map((item)=>{
                                
                                return <div className= {styles.horizontalbox}>
                                            <div className= {styles.headingdiv}>
                                                    <h2> {item.heading}</h2>
                                            </div>
                                        <div  className= {styles.bottomdiv}>
                                                {/* <p>{item.text}</p>   */}

                                                {
                                                    item.frameworks?.map((element)=>{
                                                        return <div className= {styles.elementdiv}>
                                                                {element}
                                                            </div>

                                                    })
                                                }
                                        </div>

                          </div>

                            })
                        }

                    </div>

            </div>
        </div>
    )
}

export default FrameworksArray