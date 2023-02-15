let prefix = 'https://pokeapi.co/api/v2';

export default  {
    pokemonByName: (name)=>`${prefix}/pokemon/${name}/`,
    pokemonById: (id)=>`${prefix}/pokemon/${id}/`,
    berryByName: (name)=>`${prefix}/berry/${name}/`,
    berryById: (id)=>`${prefix}/berry/${id}/`
};
