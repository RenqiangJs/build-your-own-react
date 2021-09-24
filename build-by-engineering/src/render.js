import { container } from "webpack";

let rootInstance = null;
function render(element, container) {
    const prevInstance = rootInstance;
    const nextInstance = reconcile(container, prevInstance, element);
    rootInstance = nextInstance
}
function reconcile(parentDom, instance, element) {
    if (instance == null) {
        const newInstance = instantiate(element);
        parentDom.appendChild(newInstance.dom);
        return newInstance;
    } else {
        const newInstance = instantiate(element)
        parentDom.replaceChildren(newInstance.dom, instance.dom);
        return newInstance;
    }
}
export default function instantiate(element) {

    const { type, props } = element;
    const isTextElement = type === "TEXT ELEMENT";
    const dom = isTextElement
        ? document.createTextNode("")
        : document.createElement(type)
    updateDomProperties(dom, [], props);
    const childElements = props.children || [];
    const childInstances = childElements.map(instantiate);
    const childDoms = childInstances.map(childInstance => childInstance.dom);
    childDoms.forEach(childDom => dom.appendChild(childDom))
    const instance = { dom, element, childInstances };
    return instance
}
function updateDomProperties(dom, prevProps, nextProps) {
    const isEvent = name => name.startsWith("on")
    const isAttribute = name => !isEvent(name) && name != "children";
    Object.keys(prevProps).filter(isEvent).forEach(name => {
        const eventType = name.toLowerCase().substring(2)
        dom.removeEventListenser(eventType, prevProps[name])
    })
    Object.keys(prevProps).filter(isAttribute).forEach(name => {
        dom[name] = null
    })
    Object.keys(nextProps).filter(isAttribute).forEach(name => {
        dom[name] = nextProps[name]
    })
    Object.keys(nextProps).filter(isEvent).forEach(name => {
        const eventType = name.toLowerCase().substring(2)
        dom.addEventListener(eventType, nextProps[name])
    })
}
function createElement(type, config, ...args) {
    const props = Object.assign({}, config);
    const hasChildren = args.length > 0;
    const rawChildren = hasChildren ? [].concat(...args) : [];
    props.children = rawChildren.filter(c => c != null && c !== false).map(c => c instanceof Object ? c : createElement(c));
    return { type, props }
}
function createTextElement(value) {
    return createElement(TEXT_ELEMENT, { nodeValue: value })
}
const element = createElement(
    "div",
    { id: "container" },
    createElement("input", { value: "foo", type: "text" }),
    createElement(
        "a",
        { href: "/bar" },
        "bar"
    ),
    createElement(
        "span",
        { onClick: e => alert("Hi") },
        "click me"
    )
);