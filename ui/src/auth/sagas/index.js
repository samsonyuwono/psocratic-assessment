import login from './login';
import signup from './signup';
import token from './token';

export default function* run() {
    yield [
        login(),
        signup(),
        token()
    ]
}
