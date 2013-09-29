function getCatImg(imgIndex)  {
    return "images/cat" + imgIndex + ".jpg";
}

function nextCatIndex(firstCat, secondCat, numberOfCats) {
    do {
        var imgIndex = Math.floor((Math.random() * numberOfCats) + 1);
    } while(imgIndex == firstCat || imgIndex == secondCat);

    return imgIndex;
}
