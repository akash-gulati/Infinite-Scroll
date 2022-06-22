import React,{useState,useEffect} from "react"

export const ScrollData= (props)=>{
    const [data,setData]=useState([])
 
    const getDataApi = async (params)=>{
        await fetchData(params)
        .then(res => res.json())
        .then((response) => {
                setData(response.hits)
            },
            (error) => {
                console.log(error)
                return error
            }
        )
    }

    const updateDataApi = async (params)=>{
        await fetchData(params)
        .then(res => res.json())
        .then((response) => {
                let prevData = [...data]
                let newData = prevData.concat(response.hits)  
                setData(newData)
            },
            (error) => {
                console.log(error)  
            }
        )
    }

    const fetchData =  (params) =>{
        return fetch('https://hn.algolia.com/api/v1/search?'+ new URLSearchParams(params?params:{}), {method: 'GET'})
    } 

    return [data,setData,getDataApi,updateDataApi]
}