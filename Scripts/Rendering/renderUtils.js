function RenderCollection(elementID, renderFunction, objects) {
    container = document.getElementById(elementID)
    let result = ''
    for (i=0;i<objects.length;i++) {
        result += renderFunction(objects[i])
    }
    container.innerHTML = result
}

function RenderElement(elementID, renderFunction, data) {
    container = document.getElementById(elementID)
    container.innerHTML = renderFunction(data)
}