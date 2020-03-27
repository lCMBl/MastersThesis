function RenderCollection(elementID, renderFunction, objects, textOnly=false) {
    container = document.getElementById(elementID)
    let result = ''
    for (i=0;i<objects.length;i++) {
        result += renderFunction(objects[i])
    }
    if (textOnly) {
        container.innerText = result
    } else {
        container.innerHTML = result
    }
}

function RenderElement(elementID, renderFunction, data, textOnly=false) {
    container = document.getElementById(elementID)
    if (textOnly) {
        container.innerText = renderFunction(data)
    } else {
        container.innerHTML = renderFunction(data)
    }
}

function SetText(elementID, text) {
    document.getElementById(elementID).innerText = text
}