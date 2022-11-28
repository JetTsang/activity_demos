export function throttle(fn:Function,delay:number=100):(arg:any)=>void{
    let timer:any = null
    return (arg)=>{
        if(timer) return 
        timer = setTimeout(() => {
            fn.call(fn,arg)
            clearTimeout(timer)
            timer = null
        }, delay);
    }
}