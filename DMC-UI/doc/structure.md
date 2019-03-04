# This topic about:
* Where different application files should be located.
* What folder structure should be
---
The basic building blocks of an Angular application are Modules, which provide a compilation context for components. Modules collect related code into functional sets; an Angular app is defined by a set of Modules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data.
Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
AppModule provides the bootstrap mechanism that launches the application. An app typically contains many functional modules.

---
# 1) Project lavel

This level should contain application configuration files, common styles and main entry point for your application.

![Project Level](https://github.com/dovgevgen/DataMiningCombiner/blob/frontendDevel/DMC-UI/doc/img/ProjectLevel.PNG)

---
# 2) Application lavel

This lavel contains folders with feature and folder with modules. Also it's contains constants and folder with shared components/services/directives and ect.

![Application Level](https://github.com/dovgevgen/DataMiningCombiner/blob/frontendDevel/DMC-UI/doc/img/ApplicationLevel.PNG)

---
# 3) Module level

For now application has 2 modules: dmc-common.module and  primeng.module. 
In dmc-common we should import, configure and export external lib. In primeng module we import and export different external primeng module.

![Modules](https://github.com/dovgevgen/DataMiningCombiner/blob/frontendDevel/DMC-UI/doc/img/Modules.PNG)

---
# 4) Feature lavel
Features contains from:
* **Component**
    Ideally, a component's job is to enable the user experience and nothing more. A component should present properties and methods for data binding, in order to mediate between the view (rendered by the template) and the application logic (which often includes some notion of a model).
    
    ![Feature Level](https://github.com/dovgevgen/DataMiningCombiner/blob/frontendDevel/DMC-UI/doc/img/FeatureLevel.png)
    
    **The main idea of which:**
    * Render
    * define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data.
    * Use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.
    
* **Services**
    Services may have their associated properties and methods, which can be included in the component or other Service.
    
    ![Feature Level](https://github.com/dovgevgen/DataMiningCombiner/blob/frontendDevel/DMC-UI/doc/img/FeatureLevel.png)
    
    **The main idea of which:**
    * Contain main business logic of component
    * Getting data from data-services
    * Provide some logic to different services or components
    
* **Data Service**
    A **data service** is a **service** that can be used to provide **data to different(No data) service**. This service works with API or Storages for getting data. Data services contains in **shared/services/data-services** folder.
    
    ![Data Services](https://github.com/dovgevgen/DataMiningCombiner/blob/frontendDevel/DMC-UI/doc/img/DataServices.png)
