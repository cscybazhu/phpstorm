$(function () {

    var rules = {
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                minlength: 2,
                required: true
            },
            message: {
                minlength: 2,
                required: true
            },
            validateSelect: {
                required: true
            },
            validateCheckbox: {
                required: true,
                minlength: 2
            },
            validateRadio: {
                required: true
            },
            password: {
                required: true,
                minlength: 9,
                maxlength: 12
            }
        }

    };

    var validationObj = $.extend(rules, Theme.validationRules);

    $('form').validate(validationObj);

});