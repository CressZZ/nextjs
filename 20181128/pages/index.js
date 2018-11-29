import Link from 'next/link'

/*
export default () => 
     <div>Hello, Next.js?!</div>
*/

// 모듈 import 하는 것도 없는건 당연한가?
// 함수형 이기 때문입니다. 
const Test = ()=>{
    return (
        <div>
            <p>Hello, Next.js !?</p>
            <div>
                <Link href="/playground">
                    <a>Go Playground</a>
                </Link>
            </div>
            <div>
                <a href="/playground">Go Playground (Without Link)</a>
            </div>
        </div>
    )
}

export default Test;
