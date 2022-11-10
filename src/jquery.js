window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === "string") {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }

    return {
        addClass(className) {//闭包就是函数访问外部变量
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this
        },


        find(selector) {//elements是数组，数组不能使用querySelectorAll这个属性
            let array = []
            for (let i = 0; i < elements.length; i++) {
                array = array.concat(Array.from(elements[i].querySelectorAll(selector)))
            }
            return jQuery(array)

        },

    }

}
window.$ = window.jQuery