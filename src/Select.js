import React from 'react';

function Select(props){
    return<select 
    onChange={(e)=>props.updateOperator(e.target.value)}> 
    <option>--Select an Option--</option>
    <option value="add">Add</option>
    <option value="subtract">Subtract</option>
    <option value="multiply">Multiply</option>
    <option value="divide">Divide</option>
    </select>
}
 
export default Select