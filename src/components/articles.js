
import React,{useRef, useCallback } from 'react'
import '../assets/css/main.css'

function Articles(props) {
const {articleArray,loading,page,setPage,loadingSearch}=props
const observer = useRef()

const lastBookElementRef = useCallback(node => {
    if(loading) return
    if(observer?.current) observer?.current?.disconnect()
    observer.current=new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting){
            setPage(page+1)
        }
    })
    if(node) observer.current.observe(node)
    },[loading])
        
return (
    <div className='container'>
        {loadingSearch && <h2>Loading. Please Wait.</h2>}
        {(!loadingSearch) && <>
                { articleArray.length>0 && articleArray.map((obj,index)=>{
                    if(articleArray.length==index+1){
                    return( 
                        <div key={index} className='article_tuple' ref={lastBookElementRef}>
                                    <a href={obj.story_url || obj.url } target='_blank'>
                                        <div>
                                            <h3 className='article-title'>{obj.story_title || obj.title}</h3>
                                        </div>
                                    </a>
                            </div>
                        )
                    }
                    return(
                            <div key={index} className='article_tuple'>
                                <a href={obj.story_url || obj.url } target='_blank'>
                                    <div>
                                        <h3 className='article-title'>{obj.story_title || obj.title}</h3>
                                    </div>
                                </a>
                            </div>
                    )
                })}
                {loading && <h2>Loading. Please Wait.</h2>}
        </>}
        
    </div>
)
}

export default Articles
