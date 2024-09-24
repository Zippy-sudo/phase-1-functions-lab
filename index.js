function distanceFromHqInBlocks(pickupLocation){
    const x = 42;
    const y = Number.parseInt(pickupLocation,10);
    if (typeof(y) === "number") {
        if (Number.isNaN(y)) {
            return "Not a number";
        } else if (!Number.isNaN(y)) {
            if (y < 0){
                return "Not an Address";
            } else if ( y === (x + 1)) {
                return  1;
            } else if (y >= x) {
                return y - x;
            } else return x - y;
        }
    } else return "Not a number";
}

function distanceFromHqInFeet(a) {
    return (distanceFromHqInBlocks(a) * 264);
}

function distanceTravelledInFeet(b, c) {
    const d = Number.parseInt(b,10);
    const e = Number.parseInt(c,10);
    if (typeof(d) === "number" && typeof(e) === "number") {
        if (Number.isNaN(d) || Number.isNaN(e)) {
            return "Not a number";
        } else if (!Number.isNaN(d) || !Number.isNaN(e)) {
            if (d < 0 || e < 0){
                return "Not an Address";
            } else if ( d === (e + 1)) {
                return  1 * 264;
            } else if (e >= d) {
                return (e - d) * 264;
            } else return (d - e) *264;
        }
    }
}

function calculatesFarePrice(f,g) {
    if (distanceTravelledInFeet(f,g) >= 0 && distanceTravelledInFeet(f,g) <= 400) {
        return 0; 
    } else if (distanceTravelledInFeet(f,g) > 400 && distanceTravelledInFeet(f,g) <= 2000) {
        const distanceCharged = distanceTravelledInFeet(f,g) - 400;
        const cost =  distanceCharged * 0.02;
        return  cost;
    } else if (distanceTravelledInFeet(f,g) > 2000 && distanceTravelledInFeet(f,g) <= 2500) {
         return 25 ;
    } else if(distanceTravelledInFeet(f,g) > 2500){
        return "cannot travel that far";
    };
}
console.log((distanceTravelledInFeet(34, 32)));