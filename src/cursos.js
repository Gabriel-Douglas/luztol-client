const API_BASE = 'https://server-luztol.herokuapp.com'

const basicFetch = async (endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'Lançamento',
                title: 'Novos Cursos',
                items: await basicFetch(`/home?categoria=lancamento`)
            },
            {
                slug: 'Básico',
                title: 'Começe do Básico',
                items: await basicFetch(`/home?categoria=basico`)
            },
            {
                slug: 'Artístico',
                title: 'Impressione Seus Clientes',
                items: await basicFetch(`/home?categoria=artistico`)
            },
        ]
    }
}
