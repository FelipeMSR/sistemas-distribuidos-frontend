import { Component } from "react";
import axios from 'axios';
import {Dropdown, DropdownButton, Row,Col,Card, CardGroup} from "react-bootstrap";
import '../../assets/css/estadisticos.css'


export class Estadisticos extends Component{
    

    baseUrl = "http://localhost:1818/terremotos"

    state = {
        minMag:[],
        maxMag:[],
        avgMag:[],
        medMag:[],
        minProf:[],
        maxProf:[],
        avgProf:[],
        medProf:[]
    }

    
    async componentDidMount( ) {
        const res = await axios.get(this.baseUrl + "/getMinMag") 
        this.setState({minMag: res.data})

        const res2 = await axios.get(this.baseUrl + "/getMaxMag") 
        this.setState({maxMag: res2.data})

        const res3 = await axios.get(this.baseUrl + "/getAvgMag") 
        this.setState({avgMag: res3.data})

        const res4 = await axios.get(this.baseUrl + "/getMedMag") 
        this.setState({medMag: res4.data})


        const res5 = await axios.get(this.baseUrl + "/getMinProf") 
        this.setState({minProf: res5.data})

        const res6 = await axios.get(this.baseUrl + "/getMaxProf") 
        this.setState({maxProf: res6.data})

        const res7 = await axios.get(this.baseUrl + "/getAvgProf") 
        this.setState({avgProf: res7.data})

        const res8 = await axios.get(this.baseUrl + "/getMedProf") 
        this.setState({medProf: res8.data})
        
    }
    
    
    escribir = (id,data,type,caso)=>{
        let input = document.getElementById(id)
        if(caso === 1){
            if(type === 1){//minimo
                
                input.placeholder = "Magnitud: " + data.minMag.mag+"\n" +
                                    "Lugar: "+data.minMag.place + "\n" +           
                                    "Profundidad: " + data.minMag.prof ;
            }
            else if(type === 2){//maximo
                input.placeholder = "Magnitud: " + data.maxMag.mag+"\n" +
                                    "Lugar: "+data.maxMag.place + "\n" +           
                                    "Profundidad: " + data.maxMag.prof ;
                
            }
            else if(type === 3){//media
                input.placeholder = data.avgMag
            }
            else{//mediana
                input.placeholder = data.medMag
            }
        }
        else{
            if(type === 1){//minimo
                
                input.placeholder = "Magnitud: " + data.minProf.mag+"\n" +
                                    "Lugar: "+data.minProf.place + "\n" +           
                                    "Profundidad: " + data.minProf.prof ;
            }
            else if(type === 2){//maximo
                input.placeholder = "Magnitud: " + data.maxProf.mag+"\n" +
                                    "Lugar: "+data.maxProf.place + "\n" +           
                                    "Profundidad: " + data.maxProf.prof ;
                
            }
            else if(type === 3){//media
                input.placeholder = data.avgProf
            }
            else{//mediana
                input.placeholder = data.medProf
            }
        }
        
    }
    estadistico = (id,n) =>{
        let input = document.getElementById(id)
        if(n === 1){
            input.placeholder = "El mínimo es:"
        }
        else if(n === 2){
            input.placeholder = "El máximo es:"
        }
        else if( n===3 ){
            input.placeholder = "La media es:"
        }
        else{
            input.placeholder = "La mediana es:"
        }
    }
    god = (id1,data, id2, n,caso)=>{
        this.escribir(id1,data,n,caso);
        this.estadistico(id2,n);
    }

    render(){
        return(
        <CardGroup className="margen">
            <Card>
            <DropdownButton 
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                title="Magnitud   info"
                className="mt-2"
            >
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>this.god("res1",this.state,"res0",1,1)} >
                Mínimo
                </Dropdown.Item>
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>this.god("res1",this.state,"res0",2,1)} >
                Máximo
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>this.god("res1",this.state,"res0",3,1)} >
                Media
                </Dropdown.Item>
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>this.god("res1",this.state,"res0",4,1)} >
                Mediana
                </Dropdown.Item>
            </DropdownButton>
            <Card.Body>
            <Card.Title >
                <Card.Text>
                    <input id = "res0" type="text" placeholder = "Selección de estadístico: " disabled></input> 
                </Card.Text>
            </Card.Title>
            <Card.Text>
                <textarea id="res1" placeholder = "Resultado "  disabled></textarea>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Toda la información entregada es sacada de USGS</small>
            </Card.Footer>
            </Card>



            <Card>
            <DropdownButton 
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                title="Profundidad info"
                className="mt-2"
            >
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>this.god("prof1",this.state,"prof0",1,2)} >
                Mínimo
                </Dropdown.Item>
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>this.god("prof1",this.state,"prof0",2,2)} >
                Máximo
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>this.god("prof1",this.state,"prof0",3,2)} >
                Media
                </Dropdown.Item>
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>this.god("prof1",this.state,"prof0",4,2)} >
                Mediana
                </Dropdown.Item>
            </DropdownButton>
            <Card.Body>
            <Card.Title >
                <Card.Text>
                    <input id = "prof0" type="text" placeholder = "Selección de estadístico: " disabled></input> 
                </Card.Text>
            </Card.Title>
            <Card.Text>
                <textarea id="prof1" placeholder = "Resultado "  disabled></textarea>
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Toda la información entregada es sacada de USGS</small>
            </Card.Footer>
            </Card>
        </CardGroup>
        
    )
    }
}
export default Estadisticos;