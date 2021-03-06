package evm.dmc.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {                                    
//    @Bean
//    public Docket api() { 
//        return new Docket(DocumentationType.SWAGGER_2)  
//          .select()                                  
//          .apis(RequestHandlerSelectors.any())              
//          .paths(PathSelectors.any())                          
//          .build();                                           
//    }
	@Bean
    public Docket api() { 
        return new Docket(DocumentationType.SWAGGER_2)  
        		.apiInfo(apiInfo())
        		.select()                                
        		.apis(RequestHandlerSelectors.basePackage("evm.dmc.rest"))              
        		.paths(PathSelectors.ant("/rest/**"))    	// PathSelectors.any()                      
        		.build();                                           
    }
	
	private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("DataMiningCombiner API")
                .description("A implementation of an API Gateway")
                //.contact(new Contact("Keyhole Software", "keyholesoftware.com", "asktheteam@keyholesoftware.com"))
                .version("2.0")
                .build();
    }
}
