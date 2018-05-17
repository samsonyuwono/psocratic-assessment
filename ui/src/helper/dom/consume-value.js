export default function consumeValue(fn) {
    return function wrapper(e) {
        fn(e.value);
    }
}
