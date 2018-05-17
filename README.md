# PSOCRATIC TAKE-HOME ASSESSMENT

This is the take-home coding assessment for Psocratic engineering candidates.
There is one challenge:

1.  The implementation of a test suite to validate a UI signup form

Your solution for the challenge may be in any language or technology.

Things we are looking for in a submission:

* Clean, readable code
* Partial or total completion of each challenge
* Documentation for any extra steps needed to execute and test your solutions

## Test harness

To run the test harness, run `mvn test [--fail-at-end]`. Instructions on integrating solutions into
the test harness are included in the challenge description below. Out-of-the-box, the test harness
should compile and run code, but the tests should fail (your challenge is to make them pass).

The test harness requires the following dependencies:

1.  An internet connection
1.  A nix computing environment
1.  [Java 1.8+](https://docs.oracle.com/javase/8/docs/technotes/guides/install/install_overview.html)
1.  [Maven 3+](https://maven.apache.org/download.cgi)

You may use the provided Vagrantfile to boot an environment
that contains the dependencies above. The Vagrantfile is configured to
use Ubuntu Xenial and VirtualBox, which you may modify to suit your
environment as needed. The assessment material is mounted
and synced in the guest matchine at `/psocratic-take-home-assessment`.

The Vagrant file is also configured to forward port 3000 from the
host machine to the guest machine, which corresponds to
the port the UI development server binds to by default.

Refer to the [Vagrant documentation](https://www.vagrantup.com/intro/getting-started)
if you are unfamiliar with Vagrant.

## Challenges

### UI challenge

The goal of the UI challenge is to write a suite of tests to verify
the specification of an existing single-page JavaScript application, without
modifying the code of the application, and to integrate this suite of
tests with the test harness.

The application is in `ui/lib/index.html` and `ui/lib/bundle.js`.
The solution to this challenge should make reference only to
`ui/lib/index.html` and/or `ui/lib/bundle.js`.

#### Test suite specification

The solution to this challenge should include tests which validate
the behavior of the UI application.

When the window location hash is not equal to `#/signup`, the
document does not contain any element matching the query selector
`div#signup-container`.

When the window location hash is equal to `#/signup`, the document
contains elements matching the following query selectors:

* `div#signup-container`
* `input[name="email"]`
* `input[name="password"]`
* `input[name="password-confirmation"]`
* `button[type="submit"]`

After the signup route is activated, and before the user clicks the
submit button, the page should display to the user the message:

> Create a new account

If any of the inputs are empty, or the contents of the two password
inputs are not equal to each other, and the user clicks the submit button,
then the UI does not send an AJAX post request, and instead displays to
the user the message:

> Signup attempt was rejected.

When all of the inputs are non-empty, the contents of the two password
inputs are equal to each other, and the user clicks the submit button,
then the UI sends an AJAX post request to `http://localhost:8080/signup`,
with `Content-Type: application/json`, and with a request body like
the following:

```json
{
  "emailAddress": "some.email@address.com",
  "password": "h3Ll0worLd"
}
```

If the AJAX response contains an error, or does not have a `200` status code,
then the UI displays to the user the message:

> Signup attempt was rejected.

If the AJAX response has a `200` status code and a body with an auth token, e.g.:

```json
{
  "authToken": "<a non-empty string>"
}
```

then the UI will:

* store the received auth token in `document.cookie`, so that `document.cookie` contains `auth-token=<a non-empty string>`
* display to the user the message:
  > Successfully signed up!

#### Development server

The development server compiles the source code under `ui/src/` and
watches for file-system changes to the `ui/src/` folder.

Use of the development server requires:

* Node v6.10.3+
* NPM v3.10.10+

(These depdencies are included in the provided Vagrant environment.
Also note that, when the test harness is run, the above dependencies
will be automatically downloaded and installed into `ui/node/`.)

To use the development server, navigate into the `ui/` folder
and run the commands:

```shell
 ~/psocratic-take-home-assessment/ui$ npm install
 ~/psocratic-take-home-assessment/ui$ npm start
```

The development server will run on `localhost:3000`.

#### Source code

The source code for the application is in `ui/src/`, and is provided
to help make the understanding and debugging the application easier,
but should not be used or referenced by your solution.

Instead, `ui/lib/bundle.js` and/or `ui/lib/index.html` should be used
as the system-under-test.

#### Stub test suite

A test suite stub is provided which you may choose (but are not required)
to use as the basis for your solution. This test suite stub is integrated
into the test harness. The use of this stub is left as an exercise for the reader.

#### Test harness integration

If you choose to use the provided stub test suite as the basis for you solution,
it is likely that you will not need to do any extra work to integrate your solution
into the test harness, or to document any extra setup or install steps.

If you do not use the provided stub test suite as the basis for your solution,
you must modify the `ui/test-ui.sh` script so that it executes your test
suite, and to include in your submission documentation for any extra setup or
install steps that must be done before the test harness can run your solution.

Use the `exec` shell command when invoking your test suite within `ui/test-ui.sh`
to ensure that, if the shell process is killed, your UI test suite process is also
killed.

## Submitting your work

Your submission should include the source code for your solution, and any
documentation needed to run and test your solution. Please do not include
dependencies (e.g. `node_modules/` or `target/`) in your submission.

You can submit your work by:

1.  Emailing a zip, tarball or equivalent containing your work to [max@psocratic.com](mailto:max@psocratic.com)
1.  Email a link to your work to [max@psocratic.com](mailto:max@psocratic.com)
1.  Upload a zip, tarball or equivalent to [this](https://www.dropbox.com/request/zmtSQoNw4HG2q3b9lBLP) DropBox Requests folder\*

\*Be sure to name your submission file in a way that identifies you,
or else to include identifying information inside of the submission itself.
Files submitted to this folder are not visible to the public, or to other
Psocratic engineering candidates.
