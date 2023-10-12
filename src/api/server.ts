const token = '6d6fa3c11e4a5d08fb46f0710d71f1510f35c15f70d6b917'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://digital-library-app.onrender.com/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://digital-library-app.onrender.com/api/books`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async(id: string, data: any = {}) => {
        const response = await fetch(`https://digital-library-app.onrender.com/api/books/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok){
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },
    
    delete: async(id: string) => {
        const response = await fetch(`https://digital-library-app.onrender.com/api/books/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to delete data on the server')
        }

        return;
    },
}