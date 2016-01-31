/*
https://medium.freecodecamp.com/javascript-modules-a-beginner-s-guide-783f7d7a5fcc#.viroouubd

Another popular approach used by libraries like JQuery is global import.
It's similar to the anonymous closure we just saw, except now we pass in globals as parameters.
*/
(function (globalVariable) {

    // Keep this variable private inside this closure scope
    var privateFunction = function() {
        console.log('Shhh, this is private!');
    }

    // Expose the below methods via the globalVariable interface while hiding
    // the implementation of the method within the function() block

    globalVariable.each = function(collection, iterator) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                iterator(collection[i], i, collection);
            }
        } else {
            for (var key in collection) {
                iterator(collection[key], key, collection);
            }
        }
    };

    globalVariable.filter = function(collection, test) {
        var filtered = [];
        globalVariable.each(collection, function(item) {
            if (test(item)) {
                filtered.push(item);
            }
        });
        return filtered;
    };

    globalVariable.map = function(collection, iterator) {
        var mapped = [];
        globalUtils.each(collection, function(value, key, collection) {
            mapped.push(iterator(value));
        });
        return mapped;
    };

    globalVariable.reduce = function(collection, iterator, accumulator) {
        var startingValueMissing = accumulator === undefined;

        globalVariable.each(collection, function(item) {
            if(startingValueMissing) {
                accumulator = item;
                startingValueMissing = false;
            } else {
                accumulator = iterator(accumulator, item);
            }
        });

        return accumulator;

    };

}(globalVariable));

// >> ReferenceError: globalVariable is not defined
// UMmmm... She lost me on this one. Anyhoo...
/*
In this example, globalVariable is the only variable that's global.
The benefit of this approach over anonymous closures is that you declare the global variables up front,
making it cryatal clear to people reading your code.
*/
