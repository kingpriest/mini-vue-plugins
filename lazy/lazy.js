// IIFE
export default (() => {
    const tro = (fn, delay = 300) => {
        let flag = false;
        setInterval(() => {
            flag = true;
        }, delay);
        let wrapper_fn = () => {
            if (flag) {
                flag = false;
                fn();
            }
        }
        return wrapper_fn;
    };
    // const key = Symbol()
    let arrObserver = []
    let pending = Symbol()
    const config = {
        opacity: 'translate(0, 0)',
        left: 'translate(-100px, 0)',
        right: 'translate(100px, 0)',
        top: 'translate(0, -100px)',
        bottom: 'translate(0, 100px)'
    };
    class ReactListener {
        constructor({
            el,
            top,
            type
        }) {
            this.el = el
            this.top = top
            this.type = type
        }
    }
    return {
        directives: {
            lazy: {
                inserted(el, binding) {
                    if (arrObserver.some((v) => {
                            v.el === el
                        })) {
                        v.el.style.opacity = v.top > cur ? 0 : 1;
                        v.el.style.transform = v.top > cur ? config[v.type] : config.opacity;
                        return;
                    }
                    let type = binding.arg || 'opacity'
                    el.style.opacity = 0
                    el.style.transition = 'all 1s'
                    el.style.transform = config[binding.arg]
                    let top = el.offsetTop - el.clientHeight * 2
                    let DOMlistener = new ReactListener({
                        el,
                        top,
                        type
                    })
                    arrObserver.push(DOMlistener)
                }
            }
        },
        created() {
            // window[key] = [];
            window[pending] = false;
            onscroll = tro(() => {
                let cur = window.scrollY;
                if (window[pending]) return;
                window[pending] = true;
                arrObserver.forEach(v => {
                    v.el.style.opacity = v.top > cur ? 0 : 1;
                    v.el.style.transform = v.top > cur ? config[v.type] : config.opacity;
                });
                window[pending] = false;
            }, 500);
        }
    }
})()