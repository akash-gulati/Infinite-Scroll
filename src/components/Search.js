
import React, { useEffect, useState } from 'react'
import Articles from './articles'
import {ScrollData} from '../dataHooks/scrollData'

function Search(props) {
  const [data,setData,getDataApi,updateDataApi]=ScrollData()
  const [searchItem,setSearchItem]=useState(null)
  const [loading,setLoading]=useState(false)
  const [page,setPage]=useState(0)
  const [loadingState,setLoadingState]=useState(false)
  
  useEffect(()=>{
    if(page){
      let params={}
      params.query=searchItem
      params.page=page
      setLoadingState(true)
      updateDataApi(params)
    }
  },[page])

  useEffect(()=>{
    setLoading(false)
    setLoadingState(false)
  },[data])

  const onSearch = (obj) => {
    if(obj?.length>0){
      let params={}
      params.query=obj
      params.page=0
      getDataApi(params)
      setSearchItem(obj)
      setPage(0)
    } 
    else{
      setLoading(false)
    }
  };
    
  return (
        <div>
          <div className='container' >
            <input className="search-text" placeholder='Search Article' onChange={(event)=>onSearch(event.target.value)}/>
          </div>
          <Articles 
              articleArray={data} 
              loading={loadingState} 
              page={page} 
              setPage={(obj)=> {
                setPage(obj)} }
              loadingSearch={loading}
          />      
        </div>
    )
}

export default Search
