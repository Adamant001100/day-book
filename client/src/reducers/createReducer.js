const addReducer = (state = [], action) => {

    switch(action.type) {


        case 'ADD_LIST':
            let stateCopy = [...state,action.payload];
            localStorage.setItem('add',JSON.stringify(stateCopy));
            return stateCopy

            case 'DELETE_LIST':
                stateCopy = state.filter(x => x.id !== action.payload);
                localStorage.setItem('add',JSON.stringify(stateCopy));
                return stateCopy


                case 'UPDATE_LIST':


                stateCopy = state.map((list) => {
                    const {
                        person_name,
                        last_name,
                        business_name,
                        business_gst_number,
                        storage,
                        os 
                         } = action.payload;
                        if(list.id === id)
                        {
                            list.person_name = person_name;
                            list.last_name = last_name;
                            list.business_name = business_name;
                            business_gst_number = business_gst_number;
                            storage = storage;
                            os = os
                        }
                        return list;
                })
                localStorage.setItem('list',JSON.stringify(stateCopy));
                return stateCopy

                default:
                    return state;
    }

}

export default addReducer;