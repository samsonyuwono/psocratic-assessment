describe('signup', function() {
    context('before the form is submitted', function() {
        describe('the signup container', function() {
            it('should display a prompt to signup', function() {
                // TODO
            })
        })
    })

    context('when the form is submitted', function() {
        describe('the app', function() {
            it('should submit a signup attempt to the API', function(done) {
                // TODO
            })
        })

        context('and the API does not return an HTTP OK status code', function() {
            describe('the signup container', function() {
                it('should display a failure message', function(done) {
                    // TODO
                })
            })
        })

        context('and the email address input is empty', function() {
            describe('the app', function() {
                it('should not issue an api call', function(done) {
                    // TODO
                })
            })

            describe('the signup container', function() {
                it('should display a failure message', function() {
                    // TODO
                })
            })
        });

        context('and the password inputs are empty', function() {
            describe('the app', function() {
                it('should not issue an api call', function(done) {
                    // TODO
                })
            })

            describe('the signup container', function() {
                it('should display a failure message', function() {
                    // TODO
                })
            })
        });

        context('and the API returns an HTTP OK status code', function() {
            describe('the app', function() {
                it('should store the auth token in the cookie jar', function(done) {
                    // TODO
                })
            })

            describe('the signup container', function() {
                it('should display a success message', function(done) {
                    // TODO
                })
            })
        })
    })
})
