loadScript('1.js', function (error, script) {

    if (error) {
        handleError(error)
    } else {
        // ...
        loadScript('2.js', function (error, script) {
            if (error) {
                handleError(error)
            } else {
                // ...
                loadScript('3.js', function (error, script) {
                    if (error) {
                        handleError(error)
                    } else {
                        // ...continue after all scripts are loaded (*)
                    }
                })

            }
        })
    }
})