import { Component } from "react";
import {Dropdown, DropdownButton, Row,Col,Card, CardGroup} from "react-bootstrap";
const Main = () =>{


    const resultado = 6.231
    const minimo = {
        place:"44 km SSW of Kohīma, India",
        mag: 4.1,
        prof: 12
    }
    
    const escribir = (id,data,type) =>{
        let input = document.getElementById(id)
        if(type === 1){
            input.placeholder = data;
        }
        else{
            input.placeholder ="Lugar: " + data.place +"\n" +
                                "Magnitud: " + data.mag + "\n" + 
                                "Profundidad: " + data.prof ;
        }
        
    }
    const estadistico = (id,n) =>{
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
    const god = (id1,data,type, id2, n)=>{
        escribir(id1,data,type);
        estadistico(id2,n);
    }

        return(
        <CardGroup>
            <Card>
            <DropdownButton 
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                title="Magnitud info"
                className="mt-2"
            >
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>god("res1",minimo,2,"res0",1)} >
                Mínimo
                </Dropdown.Item>
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>god("res1",minimo,2,"res0",2)} >
                Máximo
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>god("res1",resultado,1,"res0",3)} >
                Media
                </Dropdown.Item>
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>god("res1",resultado,1,"res0",4)} >
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
                title="Magnitud info"
                className="mt-2"
            >
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>god("prof1",minimo,2,"prof0",1)} >
                Mínimo
                </Dropdown.Item>
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>god("prof1",minimo,2,"prof0",2)} >
                Máximo
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>god("prof1",resultado,1,"prof0",3)} >
                Media
                </Dropdown.Item>
                <Dropdown.Item type="button" className = "btn btn-primary" onClick = { () =>god("prof1",resultado,1,"prof0",4)} >
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
export default Main;