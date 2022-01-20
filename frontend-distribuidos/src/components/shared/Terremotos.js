import { Component } from "react";
import axios from 'axios';
import '../../assets/css/terremotos.css'


export class Terremotos extends Component{
    baseUrl = "http://localhost:1818/terremotos"
    state ={
        terremotos: []
    }

    async componentDidMount( ) {
        const res = await axios.get(this.baseUrl + "/getAll") 
        this.setState({terremotos: res.data})
    }

    render(){
        return(
            <div className="container margin-container margen">
            <div className="row background-title shadow p-3 justify-content-between">
                <div className="col margin-text text-left" id="terremotos">
                    Lista de Terremotos registrados
                </div>
                
            </div>
            <hr />
            <table className="table table-bordered table-hover mt-2">
                <thead className="thead-dark">
                    <tr>
                        <th>Lugar</th>
                        <th>Magnitud</th>
                        <th>Profundidad (Km)</th>
                    </tr>
                    {
                        this.state.terremotos.map(terremotos => (
                            <tr>
                                <td key="1">
                                    {terremotos.place}
                                </td>
                                <td key="2">
                                    {terremotos.mag}
                                </td>
                                <td key="3">
                                    {terremotos.prof}
                                </td>
                                
                            </tr>)
                        )
                            
                    }
                </thead>
            </table>
        </div>
        )
    }
}
export default Terremotos;