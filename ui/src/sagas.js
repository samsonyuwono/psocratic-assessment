import auth from 'auth/sagas';

export default function* run() {
    yield [
        auth()
    ];
}
