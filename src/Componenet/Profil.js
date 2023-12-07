 import React from 'react';
 class Profil extends React.Component{
    constructor(){
     super()
      this.state ={
         Person :{ 
             fullName : "Syrine barneoui",
             bio:"Student",
             imgSrc:"https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/405751526_3657810037785616_3342588080511083686_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=0LIz6KFpAV4AX-55wyg&_nc_ht=scontent.ftun14-1.fna&oh=00_AfDTfuzaBQTfCVR1asjlbA4MsdSQadaz3-8gnANQo3qG0A&oe=6575EA0C",
             profession:"Mern Dev", }
             }
            }
      render(){
        return(
           <div>
            <h2>Profil Component</h2>
            <h3>{this.state.Person.fullName}</h3>
            <h4>{this.state.Person.bio}</h4>
            <img src={this.state.Person.imgSrc} alt="Not Found" />
            <h5>{this.state.Person.profession}</h5>
            </div>
            )
            }

            }
   export default Profil;