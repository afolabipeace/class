import React, { Component } from 'react'; //imrc
class ClassComponent extends Component { //ccc
    constructor(props) {
        super(props);
        console.log(`i am the constructor`)
    }
    state = {
                name:"kunle",
                allStudent:[],
                count : 0
            }
            increment=()=>{
                this.setState({count:this.state.count+1})
            }
            componentDidMount(){
                console.log(`mount`)
                //API CALLS HERE
            }
            componentDidUpdate(){
                console.log(`update`);
            }
            componentWillUnmount(){
                var result = window.confirm("Are yo sure u want to leave? changes made will be deleted")
                if(result){
                    console.log(result)
                }else{
                    console.log('nooooooooo')
                }
            }
            
    render() { 
        let {name,count}=this.state
        return ( 
            <>
                <div>hello {name}</div>
                <div>{this.props.title}</div>
                <h1>{count}</h1>
                <button onClick={this.increment}>Increment</button>
            </>
         );
    }
}
 
export default ClassComponent;