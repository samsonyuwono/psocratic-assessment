export default function preventDefault(fn) {
    return function wrapper(e) {
        e.preventDefault();
        fn(arguments);
    }
}
