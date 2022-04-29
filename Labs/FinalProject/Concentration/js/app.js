//Adam Cowher
//4/29/2022
//N220

//function that takes the given card div clicked, retrieves the number value, and gets rid of any matches
function flipCard(card, num) {
    //if statement for a card div with a numeric value
    if (num) {
        //retrieves the numeric value from a given card div and displays it briefly to the player
        card.innerHTML = '<span class="checkCard" value=' + num + '>' + num + '<span>';
        //retrieves the span tag by a specific class name, displays the number values on the card divs
        var grids = document.getElementsByClassName('checkCard');
        //if two selected cards have a match, reveal them for two seconds before vanishing both
        if (grids.length == 2) {
            //parses the string value of the card div and returns it as an integer
            if (parseInt(grids[0].innerText) == parseInt(grids[1].innerText)) {
                //sets the delay for revealing and removing cards
                setTimeout(function () {

                    while (grids.length > 0) {
                        //removes the number preview from the card div
                        grids[0].parentNode.remove();

                    }

                }, 2000);

            } else {

                setTimeout(function () {

                    while (grids.length > 0) {
                        //removes the entire card div
                        grids[0].parentNode.removeChild(grids[0]);

                    }

                }, 2000);

            }

        }

    }

}