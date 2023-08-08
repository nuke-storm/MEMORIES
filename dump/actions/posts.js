import * as api from '../api';

// action creater
export const getPosts =()=> async(dispatch)=>{ //redux thunk
  try{
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL',payload:data});

  }catch(error){
        console.log(error.message);
  }
    


//  const action ={ type: 'FETCH_ALL',payload:[]}  
}