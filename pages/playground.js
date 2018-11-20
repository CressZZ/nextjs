import Link from 'next/link'

/*
const Playground = ()=>{
    return (
        <div>
            <h1>Playground</h1>
            <p>Welcome to playground.</p>
        </div>
    )
};

export default Playground;
*/

export default ()=>(
    <div>
        <h1>Playground</h1>
        <p>Welcome to playground.</p>
        <Link href="/"><a>Home</a></Link>
        <div>
            <a href="/">Home (without Link)</a>
        </div>
    </div>
)