export function addList(list)
{
    return{
        type: 'ADD_LIST',
        payload:list
    }
};

export function deleteList(Id)
{
    return {
        type: 'DELETE_LIST',
        payload:Id
    }
};

export function updateList(list)
{
    return {
        type: 'UPDATE_LIST',
        payload:list
    }
};