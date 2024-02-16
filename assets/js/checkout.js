const cardNumber = document.querySelector("#card-number");
        const cardExpiration = document.querySelector("#expiration-date");
        const cardCvv = document.querySelector("#card_cvv");

        cardNumber.addEventListener('keyup', function (e) {
            let num = cardNumber.value;

            let newValue = '';
            num = num.replace(/\s/g, '');
            for (var i = 0; i < num.length; i++) {
                if (i % 4 == 0 && i > 0) newValue = newValue.concat(' ');
                newValue = newValue.concat(num[i]);
                cardNumber.value = newValue;
            }

            let card_number = document.querySelector(".card-number");
            if (num.length < 16) {
                card_number.style.border = "1px solid red";
            } else {
                card_number.style.border = "1px solid green";
            }
        })

        cardExpiration.addEventListener('keyup', function (e) {
            let newDate = cardExpiration.value;

            if (e.which !== 8) {
                var numChars = e.target.value.length;
                if (numChars == 2) {
                    var thisVal = e.target.value;
                    thisVal += '/';
                    e.target.value = thisVal;
                    console.log(thisVal.length);
                }
            }

            if (newDate.length < 5) {
                cardExpiration.style.border = "1px solid red";
            } else {
                cardExpiration.style.border = "1px solid green";
            }
        })

        cardCvv.addEventListener('keyup', function (e) {
            let cvvNum = cardCvv.value;
            if (cvvNum.length < 3) {
                cardCvv.style.border = "1px solid red";
            } else {
                cardCvv.style.border = "1px solid green";
            }
        })

        