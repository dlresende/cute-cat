test( "given an index, should get the image associated", function() {
    equal(getCatImg(1), "images/cat1.jpg" );
});

test( "should calculate the index of the next cat to be shown", function() {
   equal(nextCatIndex(1, 2, 3), 3);
   equal(nextCatIndex(2, 1, 3), 3);
   equal(nextCatIndex(null, null, 1), 1);
   equal(nextCatIndex(null, 1, 2), 2);
   equal(nextCatIndex(1, null, 2), 2);
});