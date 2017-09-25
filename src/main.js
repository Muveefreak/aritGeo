'use strict';
module.exports = {

    aritGeo: (arr) => {
        let diff = arr[1] - arr[0];
        let ratio = arr[1] / arr[0];

        let arith = true;;
        let geo = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i + 1] - arr[i] !== diff)
                arith = false;
            if (arr[i + 1] / ratio !== arr[i])
                geo = false;
        }

        if (arr == null || arr.length === 0) {
            return "0";
        } else if (arr.length === 1 || !Array.isArray(arr) ) {
            return "-1";
        } else if (arith === true)
            return "arithmetic";
        else if (geo === true)
            return "geometric";
        else if (arith != true && geo != true)
            return "-1";
        else
            return "-1";
    }
}