import React, {useState, useEffect} from 'react';

interface IProps {
    name: string;
    id: number;
}

let id = 0;

const Item = (props: IProps) => {

    const [list, setList] = useState({content: ''});

    useEffect(() => {
        setTimeout(() => {
            setList({
                content: '服务端取到的内容'
            });
        }, 1000);
    }, []);

    const {name} = props; 
    return (
        <>
            <div>{name}</div>
            <div>组件{props.id}的state: {list.content}</div>
            {/* <div onClick={() => setCount(count + 1)}>click to add comp's state count</div> */}
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
    const [_, update] = useState({});
    console.log('rerender');
    

    return (
        <>
            <div
                onClick={() => setlist(list => [{name: '组件2', id: 2}, list[0], list[1]])}
            >
                点我往数组头部插入一项
            </div>
            <div
                onClick={() => update({})}
            >
                点我update
            </div>
            {list.map((item, index) => (
                <Item key={id++} name={item.name} id={item.id} />
            ))}
        </>
    )

}

export default App;