test( "given an index, should get the image associated", function() {
    equal(getCatImg(1), "images/cat1.jpg" );
    equal(getCatImg(2), "images/cat2.jpg" );
    equal(getCatImg(3), "images/cat3.jpg" );
});

test( "should calculate the index of the next cat to be shown", function() {
    equal(nextCatIndex(1, 2, 3), 3);
    equal(nextCatIndex(2, 1, 3), 3);
    equal(nextCatIndex(null, null, 1), 1);
    equal(nextCatIndex(null, 1, 2), 2);
    equal(nextCatIndex(1, null, 2), 2);
});

test( "given a cat image index and the general score, should increment the score of the chosen cat", function() {
    deepEqual(incrementScore(1, {}), {"1":1});
    deepEqual(incrementScore(1, {"1":1, "2":0}), {"1":2, "2":0});
    deepEqual(incrementScore(2, {"1":1, "2":0, "3":3}), {"1":1, "2":1, "3":3});
});