const people = [{
    id: 0,
    name: 'Jesse George',
    age: 37,
    role: 'Parent'},{
    id: 1,
    name: 'Annaliesa George',
    age: 38,
    role: 'Parent'},{
    id: 2,
    name: 'Ayla George',
    age: 6,
    role: 'Child'},{
    id: 3,
    name: 'Tamsin George',
    age: 3,
    role: 'Child'
}]


function List() {
    const parents = people.filter(person =>
        person.role === 'Parent'
    );
    const listAdults = parents.map(person =>
        <li key={person.id}>{person.name}</li>
        );
        return <ul>Parents{listAdults}</ul>;
    
};



ReactDOM.render(
    <List/>,
    document.getElementById('root')
  );