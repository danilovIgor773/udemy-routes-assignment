import React, {Component} from 'react';

class Course extends Component{
    state={
        title: ''
    }

    componentDidMount(){
        this.getUrlParams()
    }

    componentDidUpdate(){
        this.getUrlParams()
    }

    getUrlParams (){
        console.log(this.props);
        console.log("Params search: ", this.props.location.search);
        
        
        const query = new URLSearchParams(this.props.location.search);
        for(let param of query.entries()){
            if(this.state.title !== param[1]){
                this.setState({title: param[1]})
            }
            //console.log("What is param ", param);
            // /console.log("type of param ", typeof param);           
            
        }
    }

    render(){
        return (
            <div>
               <h1>{this.state.title}</h1>
                <p>The course id is: {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Course;