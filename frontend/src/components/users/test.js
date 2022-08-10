import axios from "axios";
import './../../App.css';
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Profile = (props) => {
    const [details, setDetails] = useState([]);
    useEffect(() => {

    }, []);
    return (
        <div className="App"
        >
            <h1>Test List</h1>
            <table sx={{ minWidth: 1000 }} size="small"
            >
                <tr >
                    <th >Sr. No.</th>
                    <th>Test/Survey Name     </th>
                    <th>Take Test/Survey   </th>
                </tr>
                <tr> 
                    <td>1</td>
                    <td>SART Test</td>
                    <td><Button variant="contained" href=arr[1][2]>Take Test</Button></td></tr>
                <tr> 
                    <td>2</td><td>     Stroop Test</td>
                    <td><Button variant="contained" href="https://www.psytoolkit.org/c/3.4.2/survey?s=D4a9M">Take Test</Button></td></tr>
                <tr> 
                    <td>3</td><td>    N-back Test</td>
                    <td><Button variant="contained" href="https://www.psytoolkit.org/c/3.4.2/survey?s=4Lfr8">Take Test</Button></td></tr>
                <tr> 
                    <td>4</td> <td>   Test 4</td>
                    <td><Button variant="contained" href="https://www.psytoolkit.org/c/3.4.2/survey?s=BMU4g">Take Test</Button></td></tr>
                <tr> 
                    <td>5</td><td> Test 5</td>
                    <td><Button variant="contained" href="https://www.psytoolkit.org/c/3.4.2/survey?s=4Dpds">Take Test</Button></td></tr>
                <tr> 
                    <td>6</td><td>  Survey</td>
                    <td><Button variant="contained" href="https://www.psytoolkit.org/c/3.4.2/survey?s=4Dpds">Take Survey</Button></td></tr>
            </table>
        </div >
    );
};

export default Profile;
