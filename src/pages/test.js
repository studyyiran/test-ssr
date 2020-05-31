import React, {useEffect} from 'react';

export const TestPage = () => {
    useEffect(() => {
        console.log('start');
        return () => {
            // 并没有检测到，浏览器上去之后，导致重新渲染。
            // 那是肯定的，因为node端只能返回html-string。这部分js并不在里面我认为。
            console.log('end')
        }
    }, [])
    return <div onClick={() => {
    console.log('123 get 456')}
    }>TestPage2</div>
}