function getCatImg(imgIndex)  {
    return "images/cat" + imgIndex + ".jpg";
}

function getCatImgs(imgIndexes)  {
    var images = [];

    imgIndexes.forEach(function(imgIndex) {
        images.push(getCatImg(imgIndex));
    });

    return images;
}

function nextCatIndex(firstCat, secondCat, numberOfCats) {
    do {
        var imgIndex = Math.floor((Math.random() * numberOfCats) + 1);
    } while(imgIndex == firstCat || imgIndex == secondCat);

    return imgIndex;
}

function incrementScore(imgCatIndex, currentScore) {
    if(currentScore[imgCatIndex])
        currentScore[imgCatIndex]++;
    else
        currentScore[imgCatIndex] = 1;

    console.log("New score: " + JSON.stringify(currentScore));

    return currentScore;
}

function sortByPoints(score) {
    var indexes = [];

    for(var index in score)
        indexes.push(index);

    return indexes.sort(function(e1, e2) {
        return score[e2] - score[e1];
    });
}