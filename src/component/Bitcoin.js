import {useEffect, useState} from "react";

function Bitcoin() {

    const [bit,setBit] = useState(0)

    let valueBitcoin = "https://api.kraken.com/0/public/Ticker?pair=XXBTZEUR";

    const fetchData = async () => {
        return await fetch(valueBitcoin)
            .then((response) => response.json())
            .then((data) => setBit(data.result.XXBTZEUR.a[0]));
    }


    useEffect(() => {
        fetchData()
    }, []);


    return(
        <div> {bit}€ </div>
    )


}
export default Bitcoin;