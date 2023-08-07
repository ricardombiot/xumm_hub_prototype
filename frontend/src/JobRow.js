import { Component } from "inferno";


export default class JobRow extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        const { data } = this.props; // Recibimos el objeto Job como prop
      
        return (
            <div className="card text-center">
                <div className="card-header custom-background">
                    {data.title}
                </div>
                <div className="card-body">
                    <p className="card-text">{data.description}</p> 
                </div>
                <div className="card-footer text-muted custom-background">
                    2 days ago
                </div>
            </div>
        );
    }

}
