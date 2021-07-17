import React, {useState, useEffect} from 'react';

interface IProps {
    name: string;
    id: number;
}

const Item = (props: IProps) => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('组件',props.id, '首次渲染');
    }, []);
    
    const {name} = props; 
    return (
        <>
            <div>{name}</div>
            <div>组件{props.id}的state: {count}</div>
            <div onClick={() => setCount(count + 1)}>click to add comp's state count</div>
            {"----------------------"}
        </>
    )
}

const App = () => {
    const [list, setlist] = useState([
        {
            name: '组件0',
            id: 0
        },
        {
            name: '组件1',
            id: 1
        }
    ]);

    return (
        <>
            <div
                onClick={() => setlist(list => [{name: '组件2', id: 2}, list[0], list[1]])}
            >
                click me to add item
            </div>
            {list.map((item, index) => (
                <Item key={index} name={item.name} id={item.id} />
            ))}
        </>
    )

}

export default App;