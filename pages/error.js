import React from 'react'

const error = ({props}) => {
   React.useEffect(()=>console.log(props),[props])
    return (
        <div>
        <p>Error</p> 
        </div>
    )
}

export default error;

export const getStaticProps = async (ctx)=>{ 
  console.log(ctx);
  
    return {
        props:{ 
            data:"bankai"
        }
    }
}