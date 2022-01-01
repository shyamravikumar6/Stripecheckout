import React,{Fragment} from 'react'

const index = () => {
    
     

    return <Fragment>

    </Fragment>;
    
}

export default index;

export async function getStaticProps(context) {

      return {
        redirect: {
          destination: '/error',
          props:{data:"Invalid Routes"},
          permanent: true,
        },
      }
    }
  
   
  