//reducers is a function that accepts a state and accepts the action
export default (posts =[],action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;        
        case 'CREATE':
            return posts;

        default:
            return posts;
    }
}