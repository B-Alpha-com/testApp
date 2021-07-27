import React,{Component} from "react";
import Header from "./Header";
import Banner from "./Banner";
import Search from "./Search";


class App extends Component{
 
  render(){
    return(
<div>
<Header/>
<Banner/>
<Search/>
</div>
    )
  }
}
export default App;